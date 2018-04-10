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
 */

/**
 * Define initial constants
 */
function wa_initial_constants() {
    
    define( 'WASYSCLS', WASYS . '/class' );
    define( 'WASYSINC', WASYS . '/includes' );
    
    if ( !defined( 'SHORTINT' ) ) {
        /**
         * 
         */
        define( 'SHORTINT', false );
    }
    
    if ( !defined( 'WA_CONTENT_DIR' ) ) {
        /**
         * 
         */
        define( 'WA_CONTENT_DIR', ABSPATH . 'wa-content' );
    }
    
    if ( !defined( 'WA_PROJECT_ROOT' ) ) {
        /**
         * The WampAdmin will assume you intaled the WampAdmin in the folder
         * <code>apps</code> and will set as default the folder www as you
         * project folder
         */
        define( 'WA_PROJECT_ROOT', dirname ( dirname ( ABSPATH ) ) . '/www' );
    }
    
}

function wa_plugin_directory_constants() {
    
    /**
     * 
     */
    if ( !defined( 'WA_PLUGIN_DIR' ) ) {
        define( 'WA_PLUGIN_DIR', WA_CONTENT_DIR . '/plugins' );
    }
    
    /**
     * 
     */
    if ( !defined( 'WAMU_PLUGIN_DIR' ) ) {
        define( 'WAMU_PLUGIN_DIR', WA_CONTENT_DIR . '/mu-plugins' );
    }
    
}