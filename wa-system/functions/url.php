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
 * 
 * @param string $url
 * @param string $args
 * 
 * @return string
 */
function base_plugin_project_url ( $url = '/', $args = array() ) {
    return base_url( 'admin.php', wa_parse_args(array(
        'page' => $url,
        'project' => filter_input( INPUT_GET, 'project' )
    ), $args));
}

/**
 * Return the base url of plugin pages
 * 
 * @param string $url 
 * @param string $args 
 * 
 * @return string Plugin page url
 */
function base_plugin_url ( $url = '/', $args = array() ) {
    return base_url( 'admin.php', wa_parse_args(array(
        'page' => $url
    ), $args));
}

/**
 * Return the url with get param project inserted
 * 
 * @param string $url
 * @param array $args
 * 
 * @return string
 */
function base_project_url ( $url = '/', $args = array() ) {
    return base_url($url, wa_parse_args(array(
        'project' => filter_input( INPUT_GET, 'project' )
    ), $args));
}

/**
 * 
 * @param string $url
 * @param array $args
 * 
 * @return type
 */
function base_url( $url = '/', $args = array() ) {
    static $guess_url = null;
    
    if ( null === $guess_url ) {
        $guess_url = wa_guess_url();
    }
    
    return $guess_url . '/'
            . ltrim($url, '/')
            . ( !empty( $args ) ? '?' . http_build_query( $args ) : '' );
}
