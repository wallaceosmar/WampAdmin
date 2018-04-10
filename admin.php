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
 * Bootstrap file
 * 
 * @package WampAdmin
 * @subpackage Administration
 */

if ( !defined ( 'WA_ADMIN' ) ) {
    /**
     * 
     */
    define('WA_ADMIN', true);
}

// 
require_once ( dirname( __FILE__ ) . '/wa-load.php' );

/**
 * 
 * @global string $pagenow
 * @global string $plugin_page
 * @global string $typenow
 */
global $pagenow, $plugin_page, $typenow;

$page_hook = null;

if ( isset( $_GET['page'] ) ) {
    $plugin_page = filter_input( INPUT_GET, 'page' );
    $plugin_page = plugin_basename( $plugin_page );
}

//Header navbar
include ( ABSPATH . WASYSINC . '/navbar-menu.php' );
include ( ABSPATH . WASYSINC . '/default-dashboard-section.php' );

/**
 * Fires as script is being initialized.
 */
do_action( 'wamp_init' );

if ( isset( $plugin_page ) ) {
    $the_parent = $pagenow;
    if ( ! $page_hook = get_plugin_page_hook( $plugin_page, $the_parent ) ) {
        $page_hook = get_plugin_page_hook($plugin_page, $plugin_page);
    }
    unset( $the_parent );
}

$hook_suffix = '';
if ( isset( $page_hook ) ) {
    $hook_suffix = $page_hook;
} elseif ( isset( $plugin_page ) ) {
    $hook_suffix = $plugin_page;
} elseif ( isset( $pagenow ) ) {
    $hook_suffix = $pagenow;
}

// Handle plugin admin pages.
if ( isset( $plugin_page ) ) {
    if ( $page_hook ) {
        /**
         * 
         */
        do_action( "load-{$page_hook}" );
        if ( !isset( $_GET['noheader'] ) ) {
            get_header();
        }
        
        /**
         * 
         */
        do_action( $page_hook );
    } else {
        if ( validate_file( $plugin_page ) ) {
            die();
        }
        
        if ( !( file_exists( WA_PLUGIN_DIR . "/$plugin_page") &&
                is_file( WA_PLUGIN_DIR . "/$plugin_page") ) &&
                !( file_exists( WAMU_PLUGIN_DIR . "/$plugin_page") &&
                is_file( WAMU_PLUGIN_DIR . "/$plugin_page") ) ) {
            die();
        }
        
        /**
         * 
         */
        do_action( "load-{$page_hook}" );
        if ( !isset( $_GET['noheader'] ) ) {
            get_header();
        }
        
        if ( file_exists( WAMU_PLUGIN_DIR . "/$plugin_page" ) ) {
            include ( WAMU_PLUGIN_DIR . "/$plugin_page" );
        } else {
            include ( WA_PLUGIN_DIR . "/$plugin_page" );
        }
        
    }
    get_footer();
    exit;
} else {
    
    /**
     * 
     */
    do_action( "load-{$page_hook}" );
}


if ( !empty( $_REQUEST['action'] ) ) {
    /**
     * 
     */
    do_action('wamp_action_' . $_REQUEST['action']);
}
