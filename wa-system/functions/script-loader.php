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

// WampAdmin Style function
require_once ( ABSPATH . WASYSFNC . '/wa-styles.php' );

// WampAdmin Style function
require_once ( ABSPATH . WASYSFNC . '/wa-scripts.php' );

/**
 * 
 * @global \WA\Template\Scripts $wa_scripts
 * @global bool $compress_scripts
 */
function _print_scripts() {
    global $wa_scripts, $compress_scripts;

    $zip = $compress_scripts ? 1 : 0;
    if ($zip && defined('ENFORCE_GZIP') && ENFORCE_GZIP) {
        $zip = 'gzip';
    }

    if ( $concat = trim( $wa_scripts->concat, ', ' ) ) {
        if ( !empty($wa_scripts->print_code) ) {
            echo "\n<script type='text/javascript'>\n";
            echo "/* <![CDATA[ */\n"; // not needed in HTML 5
            echo $wa_scripts->print_code;
            echo "/* ]]> */\n";
            echo "</script>\n";
        }
        
        $concat = str_split( $concat, 128 );
        $concat = 'load%5B%5D=' . implode( '&load%5B%5D=', $concat );
        
        $src = $wa_scripts->base_url . "/wp-admin/load-scripts.php?c={$zip}&" . $concat . '&ver=' . $wa_scripts->default_version;
        echo "<script type='text/javascript' src='" . esc_attr($src) . "'></script>\n";
    }
    
    if (!empty($wa_scripts->print_html)) {
        echo $wa_scripts->print_html;
    }
}

/**
 * 
 * @global type $compress_css
 */
function _print_styles() {
    global $compress_css;
    
    $wa_styles = wa_styles();
    $zip = $compress_css ? 1 : 0;
    if ($zip && defined('ENFORCE_GZIP') && ENFORCE_GZIP) {
        $zip = 'gzip';
    }

    if ( $concat = trim( $wa_styles->concat, ', ' ) ) {
        $dir = $wa_styles->text_direction;
        $ver = $wa_styles->default_version;

        $concat = str_split( $concat, 128 );
        $concat = 'load%5B%5D=' . implode( '&load%5B%5D=', $concat );
        
        $href = $wa_styles->base_url . "/wp-admin/load-styles.php?c={$zip}&dir={$dir}&" . $concat . '&ver=' . $ver;
        echo "<link rel='stylesheet' href='" . esc_attr($href) . "' type='text/css' media='all' />\n";
        
        if ( !empty($wa_styles->print_code) ) {
            echo "<style type='text/css'>\n";
            echo $wa_styles->print_code;
            echo "\n</style>\n";
        }
    }

    if (!empty($wp_styles->print_html)) {
        echo $wp_styles->print_html;
    }
}

/**
 * Private, for use in *_footer_scripts hooks
 */
function _wa_footer_scripts() {
    print_late_styles();
    print_footer_scripts();
}

/**
 * 
 * @global \WA\Template\Scripts $wa_scripts
 * @global type $concatenate_scripts
 * 
 * @return type
 */
function print_footer_scripts() {
    global $wa_scripts, $concatenate_scripts;
    
    if ( ! ( $wa_scripts instanceof \WA\Template\Scripts ) ) {
        return array(); // No need to run if not instantiated.
    }

    script_concat_settings();
    $wa_scripts->do_concat = $concatenate_scripts;
    $wa_scripts->do_footer_items();

    /**
     * Filters whether to print the footer scripts.
     *
     * @since 2.8.0
     *
     * @param bool $print Whether to print the footer scripts. Default true.
     */
    if ( apply_filters( 'print_footer_scripts', true ) ) {
        _print_scripts();
    }
    
    $wa_scripts->reset();
    return $wa_scripts->done;
}

/**
 * 
 * @global \WA\Template\Styles $wa_styles
 * 
 * @global type $concatenate_scripts
 * @return type
 */
function print_late_styles() {
    global $wa_styles, $concatenate_scripts;

    if ( ! ( $wa_styles instanceof \WA\Template\Styles ) ) {
        return;
    }

    script_concat_settings();
    $wa_styles->do_concat = $concatenate_scripts;
    $wa_styles->do_footer_items();

    /**
     * Filters whether to print the styles queued too late for the HTML head.
     */
    if ( apply_filters( 'print_late_styles', true ) ) {
        _print_styles();
    }

    $wa_styles->reset();
    return $wa_styles->done;
}

function script_concat_settings() {
    global $concatenate_scripts, $compress_scripts, $compress_css;
    
    $compressed_output = ( ini_get('zlib.output_compression') || 'ob_gzhandler' == ini_get('output_handler') );
    if ( ! isset( $concatenate_scripts ) ) {
        $concatenate_scripts = defined('CONCATENATE_SCRIPTS') ? CONCATENATE_SCRIPTS : true;
    }

    if ( ! isset($compress_scripts) ) {
        $compress_scripts = defined('COMPRESS_SCRIPTS') ? COMPRESS_SCRIPTS : true;
    }

    if ( ! isset($compress_css) ) {
        $compress_css = defined('COMPRESS_CSS') ? COMPRESS_CSS : true;
    }
}

/**
 * 
 * @param WA\Template\Scripts $scripts
 */
function wa_default_scripts( $scripts ) {
    if ( !file_exists ( ABSPATH . WASYSINC . '/default-dependency-scripts.php' ) ) {
        return;
    }
    include (  ABSPATH . WASYSINC . '/default-dependency-scripts.php' );
}

/**
 * 
 * @param WA\Template\Styles $styles
 */
function wa_default_styles( $styles ) {
    if ( !file_exists ( ABSPATH . WASYSINC . '/default-dependency-styles.php' ) ) {
        return;
    }
    include (  ABSPATH . WASYSINC . '/default-dependency-styles.php' );
}

/**
 * Enqueue a script and style.
 * 
 * @param string $handle Name of the dependency. Should be unique.
 */
function wa_enqueue_dependecy( $handle ) {
    
    /**
     * 
     */
    wa_enqueue_style($handle);
    
    /**
     * 
     */
    wa_enqueue_script($handle);
}

/**
 * Hooks to print the scripts and styles in the footer.
 */
function wa_print_footer_scripts() {
    /**
     * Fires when footer scripts are printed.
     */
    do_action( 'wa_print_footer_scripts' );
}