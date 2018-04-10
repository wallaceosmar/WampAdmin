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
 * Description of Scripts
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class Scripts extends Dependencies {
    
    /**
     * 
     */
    public function __construct() {
        /**
         * 
         */
        do_action( 'wa_default_scripts', array(&$this));
    }
    
    public function do_footer_items() {
        $this->do_items(false, 1);
        return $this->done;
    }
    
    /**
     * 
     * @param type $handle
     * @param type $group
     * 
     * @return boolean
     */
    public function do_item( $handle, $group = false ) {
        if (!parent::do_item($handle)) {
            return false;
        }

        if ( 0 === $group && $this->groups[$handle] > 0 ) {
            $this->in_footer[] = $handle;
            return false;
        }
        
        if (false === $group && in_array($handle, $this->in_footer, true)) {
            $this->in_footer = array_diff($this->in_footer, (array) $handle);
        }

        $obj = $this->registered[$handle];

        if ( null === $obj->ver ) {
            $ver = '';
        } else {
            $ver = $obj->ver ? $obj->ver : $this->default_version;
        }

        if (isset($this->args[$handle])) {
            $ver = $ver ? $ver . '&amp;' . $this->args[$handle] : $this->args[$handle];
        }

        $src = $obj->src;
        $cond_before = $cond_after = '';
        $conditional = isset( $obj->extra['conditional'] ) ? $obj->extra['conditional'] : '';

        if ( $conditional ) {
            $cond_before = "<!--[if {$conditional}]>\n";
            $cond_after = "<![endif]-->\n";
        }
        
        $before_handle = $this->print_inline_script( $handle, 'before', false );
        $after_handle = $this->print_inline_script( $handle, 'after', false );
        
        if ( $before_handle ) {
            $before_handle = sprintf( "<script type='text/javascript'>\n%s\n</script>\n", $before_handle );
        }

        if ( $after_handle ) {
            $after_handle = sprintf( "<script type='text/javascript'>\n%s\n</script>\n", $after_handle );
        }

        if ( $this->do_concat ) {
            /**
             * Filters the script loader source.
             */
            $srce = apply_filters( 'script_loader_src', $src, $handle );
            $this->ext_handles .= "$handle,";
            $this->ext_version .= "$handle$ver";
        }
        
        $has_conditional_data = $conditional && $this->get_data( $handle, 'data' );
        
        if ( $has_conditional_data ) {
            echo $cond_before;
        }

		$this->print_extra_script( $handle );

		if ( $has_conditional_data ) {
			echo $cond_after;
		}

		// A single item may alias a set of items, by having dependencies, but no source.
		if ( ! $obj->src ) {
			return true;
		}

		if ( ! preg_match( '|^(https?:)?//|', $src ) && ! ( $this->content_url && 0 === strpos( $src, $this->content_url ) ) ) {
			$src = $this->base_url . $src;
		}

		if ( ! empty( $ver ) )
			$src = add_query_arg( 'ver', $ver, $src );

		/** This filter is documented in wp-includes/class.wp-scripts.php */
		$src = esc_url( apply_filters( 'script_loader_src', $src, $handle ) );

		if ( ! $src )
			return true;

		$tag = "{$cond_before}{$before_handle}<script type='text/javascript' src='$src'></script>\n{$after_handle}{$cond_after}";

        /**
         * Filters the HTML script tag of an enqueued script.
         */
        $tag = apply_filters( 'script_loader_tag', $tag, $handle, $src );
        if ( $this->do_concat ) {
            $this->print_html .= $tag;
        } else {
            echo $tag;
        }
        
        return true;
    }
    
    public function print_extra_script( $handle, $echo = true ) {
        if (!$output = $this->get_data($handle, 'data')) {
            return;
        }

        if (!$echo) {
            return $output;
        }

        echo "<script type='text/javascript'>\n"; // CDATA and type='text/javascript' is not needed for HTML 5
        echo "/* <![CDATA[ */\n";
        echo "$output\n";
        echo "/* ]]> */\n";
        echo "</script>\n";

        return true;
    }
    
    public function print_inline_script( $handle, $position = 'after', $echo = true ) {
	$output = $this->get_data( $handle, $position );
        if ( empty( $output ) ) {
            return false;
        }
        $output = trim( implode( "\n", $output ), "\n" );
        if ( $echo ) {
            printf( "<script type='text/javascript'>\n%s\n</script>\n", $output );
        }
        return $output;
    }
    
    /**
     * Resets class properties.
     */
    public function reset() {
        $this->do_concat = false;
        $this->print_code = '';
        $this->concat = '';
        $this->concat_version = '';
        $this->print_html = '';
        $this->ext_version = '';
        $this->ext_handles = '';
    }
    
}
