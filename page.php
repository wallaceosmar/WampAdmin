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

/* Load bootstrap */
require_once ( dirname( __FILE__ ) . '/wa-admin.php' );

global $plugin_page;

if ( $_GET['page'] ) {
    $plugin_page = $_GET['page'];
    $plugin_page = plugin_basename($plugin_page);
}

if ( isset($plugin_page) ) {
    
    if ( true ) {
        
        if ( ! ( file_exists( WA_PLUGIN_DIR . "/$plugin_page" ) && is_file( WA_PLUGIN_DIR . "/$plugin_page" ) ) ) {
            exit;
        }
        
        do_action( "load-{$plugin_page}" );
        
        include( WA_PLUGIN_DIR . "/$plugin_page");
    }
    
    include ABSPATH . '/wa-footer.php';
    exit(1);
}