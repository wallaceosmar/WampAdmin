<?php

/*
 * The MIT License
 *
 * Copyright 2018 wallaceosmar.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

namespace WA\Template;

/**
 * Description of Styles
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class Styles extends Dependencies {
    
    /**
     * 
     */
    public function __construct() {
        /**
         * 
         */
        do_action( 'wa_default_styles', array(&$this));
    }
    
    public function _css_href( $src, $ver, $handle ) {
        if ( !is_bool($src) && !preg_match('|^(https?:)?//|', $src) && ! ( $this->content_url && 0 === strpos($src, $this->content_url) ) ) {
            $src = $this->base_url . $src;
        }
        
        if (!empty($ver)) {
            $src = add_query_arg('ver', $ver, $src);
        }

        /**
         * Filters an enqueued style's fully-qualified URL.
         */
        $src = apply_filters( 'style_loader_src', $src, $handle );
        return $src;
    }
    
    /**
     * 
     * @return type
     */
    public function do_footer_items() {
	$this->do_items(false, 1);
        return $this->done;
    }
    
    public function do_item( $handle ) {
        if (!parent::do_item($handle)) {
            return false;
        }
        
        $obj = $this->registered[$handle];
        if (null === $obj->ver) {
            $ver = '';
        } else {
            $ver = $obj->ver ? $obj->ver : $this->default_version;
        }

        if (isset($this->args[$handle])) {
            $ver = $ver ? $ver . '&amp;' . $this->args[$handle] : $this->args[$handle];
        }

        if ( $this->do_concat ) {
            if ( $this->in_default_dir($obj->src) && !isset($obj->extra['conditional']) && !isset($obj->extra['alt']) ) {
                $this->concat .= "$handle,";
                $this->concat_version .= "$handle$ver";
                $this->print_code .= $this->print_inline_style( $handle, false );
                return true;
            }
        }

        if (isset($obj->args)) {
            $media = esc_attr($obj->args);
        } else {
            $media = 'all';
        }

        // A single item may alias a set of items, by having dependencies, but no source.
        if ( ! $obj->src ) {
            if ( $inline_style = $this->print_inline_style( $handle, false ) ) {
                $inline_style = sprintf( "<style id='%s-inline-css' type='text/css'>\n%s\n</style>\n", esc_attr( $handle ), $inline_style );
                if ( $this->do_concat ) {
                    $this->print_html .= $inline_style;
                } else {
                    echo $inline_style;
                }
            }
            return true;
        }

        $href = $this->_css_href( $obj->src, $ver, $handle );
        if ( ! $href ) {
            return true;
        }

        $rel = isset($obj->extra['alt']) && $obj->extra['alt'] ? 'alternate stylesheet' : 'stylesheet';
        $title = isset($obj->extra['title']) ? "title='" . esc_attr( $obj->extra['title'] ) . "'" : '';

        /**
         * Filters the HTML link tag of an enqueued style.
         *
         * @since 2.6.0
         * @since 4.3.0 Introduced the `$href` parameter.
         * @since 4.5.0 Introduced the `$media` parameter.
         *
         * @param string $html   The link tag for the enqueued style.
         * @param string $handle The style's registered handle.
         * @param string $href   The stylesheet's source URL.
         * @param string $media  The stylesheet's media attribute.
         */
        $tag = apply_filters( 'style_loader_tag', "<link rel='$rel' id='$handle-css' $title href='$href' type='text/css' media='$media' />\n", $handle, $href, $media);
        if ( 'rtl' === $this->text_direction && isset($obj->extra['rtl']) && $obj->extra['rtl'] ) {
            if ( is_bool( $obj->extra['rtl'] ) || 'replace' === $obj->extra['rtl'] ) {
                $suffix = isset( $obj->extra['suffix'] ) ? $obj->extra['suffix'] : '';
                $rtl_href = str_replace( "{$suffix}.css", "-rtl{$suffix}.css", $this->_css_href( $obj->src , $ver, "$handle-rtl" ));
            } else {
                $rtl_href = $this->_css_href( $obj->extra['rtl'], $ver, "$handle-rtl" );
            }

            /** This filter is documented in wp-includes/class.wp-styles.php */
            $rtl_tag = apply_filters( 'style_loader_tag', "<link rel='$rel' id='$handle-rtl-css' $title href='$rtl_href' type='text/css' media='$media' />\n", $handle, $rtl_href, $media );

            if ( $obj->extra['rtl'] === 'replace' ) {
                $tag = $rtl_tag;
            } else {
                $tag .= $rtl_tag;
            }
        }

        $conditional_pre = $conditional_post = '';
        if ( isset( $obj->extra['conditional'] ) && $obj->extra['conditional'] ) {
            $conditional_pre  = "<!--[if {$obj->extra['conditional']}]>\n";
            $conditional_post = "<![endif]-->\n";
        }

        if ( $this->do_concat ) {
            $this->print_html .= $conditional_pre;
            $this->print_html .= $tag;
            if ( $inline_style = $this->print_inline_style( $handle, false ) ) {
                $this->print_html .= sprintf( "<style id='%s-inline-css' type='text/css'>\n%s\n</style>\n", esc_attr( $handle ), $inline_style );
            }
            $this->print_html .= $conditional_post;
        } else {
            echo $conditional_pre;
            echo $tag;
            $this->print_inline_style( $handle );
            echo $conditional_post;
        }

        return true;
    }
    
    public function print_inline_style( $handle, $echo = true ) {
        $output = $this->get_data( $handle, 'after' );
        if ( empty( $output ) ) {
            return false;
        }
        $output = implode( "\n", $output );
        if ( ! $echo ) {
            return $output;
        }
        printf( "<style id='%s-inline-css' type='text/css'>\n%s\n</style>\n", esc_attr( $handle ), $output );
        return true;
    }
    
    public function reset() {
        $this->do_concat = false;
        $this->concat = '';
        $this->concat_version = '';
        $this->print_html = '';
    }
    
}
