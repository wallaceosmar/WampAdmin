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

function wa_enqueue_style( $handle, $src = '', $deps = array(), $ver = false, $media = 'all' ) {
    $wa_styles = wa_styles();
    if ( $src ) {
        
    }
    $wa_styles->enqueue( $handle );
}

/**
 * 
 * @global \WA\Template\Styles $wa_styles
 * 
 * @return \WA\Template\Styles
 */
function wa_styles() {
    global $wa_styles;
    
    if ( !$wa_styles instanceof WA\Template\Styles ) {
        $wa_styles = new WA\Template\Styles();
    }
    
    return $wa_styles;
}

/**
 * 
 * @global array $wa_styles
 * 
 * @param type $handle
 * @param type $src
 */
function wa_register_style( $handle, $src ) {
    wa_styles()->add( $handle, $src );
}


/**
 * Display styles that are in the $handles queue.
 * 
 * @global WA\Template\Styles $wa_styles
 * 
 * @param boolean $handles Styles to be printed. Default 'false'.
 * 
 * @return array 
 */
function wa_print_styles( $handles = false ) {
    if ( '' === $handles ) { // for wp_head
        $handles = false;
    }
    
    if ( ! $handles ) {
        do_action( 'wa_print_styles' );
    }
    
    global $wa_styles;
    
    if ( ! ( $wa_styles instanceof WA\Template\Styles ) ) {
        if ( ! $handles ) {
            return array(); // No need to instantiate if nothing is there.
        }
    }
 
    return wa_styles()->do_items( $handles );
}