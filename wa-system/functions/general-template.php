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
 * Load footer template.
 * 
 * @param string $name The name of the specialised footer.
 */
function get_footer( $name = null ) {
    
    $templates = array();
    if ( !empty( $name ) ) {
        $templates[] = "footer-{$name}.php";
    }
    $templates[]    = 'footer.php';
    
    locate_template( $templates, true );
}

/**
 * Load header template.
 * 
 * @param string $name The name of the specialised header.
 */
function get_header( $name = null ) {
    
    $templates = array();
    if ( !empty( $name ) ) {
        $templates[] = "header-{$name}.php";
    } 
    $templates[] = 'header.php';
    
    locate_template( $templates, true );
}

/**
 * Load navbar template.
 * 
 * @param string $name The name of the specialised navbar.
 */
function get_navbar( $name = null ) {
    
    $templates = array();
    if ( !empty( $name ) ) {
        $templates[] = "navbar-{$name}.php";
    }
    $templates[] = 'navbar.php';
    
    locate_template( $templates, true);
}

/**
 * Load sidebar template.
 * 
 * @param string $name The name of the specialised sidebar.
 */
function get_sidebar( $name = null ) {
    
    $templates = array();
    if ( !empty( $name ) ) {
        $templates[] = "sidebar-{$name}.php";
    }
    $templates[] = 'sidebar.php';
    
    locate_template( $templates, true );
}