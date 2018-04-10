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
 * Require the template file with WordPress environment.
 * 
 * @global string $title
 * 
 * @param string $_template_file Path to template file.
 * @param bool $require_once Whether to require_once or require.
 */
function load_template( $_template_file, $require_once = true ) {
    global $title, $pagenow, $parent_file, $submenu_file;
 
    if ( $require_once ) {
        require_once( $_template_file );
    } else {
        require( $_template_file );
    }
}

/**
 * Retrieve the name of the highest priority template file that exists.
 * 
 * @param string|array $template_names Template file(s) to search for, in order.
 * @param bool $load If true the template file will be loaded if it is found.
 * @param bool $require_once Whether to require_once or require. Has no effect if $load is false.
 * 
 * @return string The template filename if one is located.
 */
function locate_template($template_names, $load = false, $require_once = true ) {
    $located = '';
    foreach ( (array) $template_names as $template_name ) {
        if (!$template_name) {
            continue;
        }
        
        if ( file_exists( WA_CONTENT_DIR . '/theme-compat/' . $template_name ) ) {
            $located = WA_CONTENT_DIR . '/theme-compat/' . $template_name;
            break;
        } elseif ( file_exists( ABSPATH . $template_name ) ) {
            $located = ABSPATH . $template_name;
            break;
        }
    }
 
    if ($load && '' != $located) {
        load_template($located, $require_once);
    }

    return $located;
}
