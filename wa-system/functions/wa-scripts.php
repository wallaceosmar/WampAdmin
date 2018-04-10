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

/**
 * Enqueue a script.
 * 
 * @param string $handle Name of the script. Should be unique.
 * @param string $src Full URL of the script.
 * @param array $deps Optional. An array of registered script handles this script depends on. Default empty array.
 * @param string|bool|null $ver String specifying script version number.
 */
function wa_enqueue_script( $handle, $src = '', $deps = array(), $ver = false, $in_footer = false ) {
    $wa_scripts = wa_scripts();
    if ( $src ) {
	$_handle = explode( '?', $handle );
        
        if ( $src ) {
            $wa_scripts->add( $_handle[0], $src, $deps, $ver );
	}
        
        if ( $in_footer ) {
            $wa_scripts->add_data( $_handle[0], 'group', 1 );
        }
    }
    $wa_scripts->enqueue( $handle );
}

/**
 * 
 * @global WA\Template\Scripts $wa_scripts
 * @return \WA\Template\Scripts
 */
function wa_scripts() {
    global $wa_scripts;
    
    if ( !$wa_scripts instanceof WA\Template\Scripts ) {
        $wa_scripts = new WA\Template\Scripts();
    }
    
    return $wa_scripts;
}

/**
 * Register a plain script
 * 
 * @param callback $handle
 */
function wa_register_plain_script( $handle ) {
    /**
     * 
     */
    add_action('wamp_print_footer_scripts', $handle);
}

/**
 * 
 * @param type $handle
 * @param type $src
 */
function wa_register_script( $handle, $src ) {
    wa_scripts()->add( $handle, $src );
}

/**
 * Prints scripts in document head that are in the $handles queue.
 * 
 * @global WA\Template\Scripts $wa_scripts
 * 
 * @param string|bool|array $handles Scripts to be printed. Default 'false'.
 * 
 * @return array On success
 */
function wa_print_scripts( $handles = false ) {
    /**
     * 
     */
    do_action( 'wa_print_scripts' );
    
    global $wa_scripts;
    if ( ! ( $wa_scripts instanceof WA\Template\Scripts ) ) {
        if ( ! $handles ) {
            return array(); // No need to instantiate if nothing is there.
        }
    }
    
    return wa_scripts()->do_items( $handles );
}