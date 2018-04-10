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
 * Escaping for HTML attributes.
 * 
 * @param string $text
 * 
 * @return string
 */
function esc_attr ( $text ) {
    /**
     * Filters a string cleaned and escaped for output in an HTML attribute.
     */
    return apply_filters( 'attribute_escape', $text);
}

/**
 * 
 * @param string $text
 * 
 * @return string
 */
function esc_http_query( $text ) {
    return preg_replace( '/\?.*/', '', $text );
}

/**
 * 
 * @param string $text
 * @return string
 */
function esc_url ( $text ) {
    /**
     * 
     */
    return apply_filters( 'url_escape', $text);
}

/**
 * Sanitizes a title, or returns a fallback title.
 * 
 * @param string $title The string to be sanitized.
 * @param string $fallback_title A title to use if $title is empty.
 * 
 * @return string The sanitized string.
 */
function sanitize_title( $title, $fallback_title = '' ) {
    
    $title = filter_var( $title, FILTER_SANITIZE_STRING );
    if ( '' === $title || null === $title ) {
        $title = $fallback_title;
    }
    
    return $title;
}

/**
 * Parses a string into variables to be stored in an array.
 * 
 * @param string $string The string to be parsed.
 * @param array $array Variables will be stored in this array.
 */
function wa_parse_str( $string, &$array ) {
    parse_str( $string, $array );
    
    /**
     * 
     */
    $array = apply_filters( 'wa_parse_str', $array);
}

