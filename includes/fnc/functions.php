<?php

/* 
 * The MIT License
 *
 * Copyright 2017 wallaceosmar.
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
 * Redirect the url
 * 
 * @param string $url Url
 * @param int $statusCode
 */
function header_redirect ( $url, $statusCode = 303) {
   header('Location: ' . $url, true, $statusCode);
   exit(1);
}

/**
 * 
 * @return bool
 */
function is_ajax() {
    return ( !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' );
}

/**
 * 
 * @param string $mehtod
 * 
 * @return bool
 */
function is_mehtod( $mehtod = 'get' ) {
    return ( strtoupper ( $mehtod ) == $_SERVER['REQUEST_METHOD'] );
}

/**
 * 
 * @param string $path
 * 
 * @return string
 */
function normalize_path( $path ) {
    $path = str_replace( '\\', '/', $path );
    $path = preg_replace( '|(?<=.)/+|', '/', $path );
    if ( ':' === substr( $path, 1, 1 ) ) {
        $path = ucfirst( $path );
    }
    return $path;
}

/**
 * Merge user defined arguments into defaults array.
 * 
 * @param type $args
 * @param type $defaults
 * @return type
 */
function parse_args( $args, $defaults = '' ) {
    if (is_object($args)) {
        $r = get_object_vars($args);
    } elseif (is_array($args)) {
        $r = & $args;
    } else {
        wa_parse_str($args, $r);
    }
    
    return is_array( $defaults ) ? array_merge($defaults, $r) : $r;
}

/**
 * Parses a string into variables to be stored in an array.
 * 
 * @param type $string The string to be parsed.
 * @param type $array Variables will be stored in this array
 */
function wa_parse_str( $string, &$array ) {
    parse_str( $string, $array );
    
    $array = apply_filters( 'parse_str', $array );
}

/**
 * 
 * @param type $dir
 */
function rmdir_recursive($dir) {
    foreach( scandir( $dir ) as $file ) {
        if ('.' === $file || '..' === $file) {
            continue;
        }
        
        if ( is_dir("$dir/$file") ) {
            rmdir_recursive("$dir/$file");
        } else {
            unlink("$dir/$file");
        }
    }
    return rmdir($dir);
}

