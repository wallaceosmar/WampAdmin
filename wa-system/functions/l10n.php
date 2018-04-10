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
 * Retrieve the translation of $text.
 * 
 * @param string $text Text to translate.
 * @param string $domain Optional. Text domain. Unique identifier for retrieving translated strings.
 *                       Default 'default'.
 * 
 * @return string Translated text
 */
function __( $text, $domain = 'default' ) {
    return translate($text, $domain);
}

/**
 * Display translated text.
 * 
 * @param string $text Text to translate.
 * @param string $domain Optional. Text domain. Unique identifier for retrieving translated strings.
 *                       Default 'default'.
 */
function _e( $text, $domain = 'default' ) {
    echo translate($text, $domain);
}

/**
 * Display translated text that has been escaped for safe use in an attribute.
 * 
 * @param string $text Text to translate.
 * @param string $domain Optional. Text domain. Unique identifier for retrieving translated strings.
 *                       Default 'default'.
 * 
 * @return void
 */
function esc_attr_e( $text, $domain = 'default' ) {
    echo esc_attr( translate($text, $domain) );
}

/**
 * Retrieve the translation of $text.
 * 
 * @param string $text Text to translate.
 * @param string $domain Optional. Text domain. Unique identifier for retrieving translated strings.
 *                       Default 'default'.
 * 
 * @return string Translated text
 */
function translate( $text, $domain = 'default' ) {
    $translation = $text;
    /**
     *  Filters text with its translation.
     */
    return apply_filters( 'gettext', $translation, $text, $domain);
}