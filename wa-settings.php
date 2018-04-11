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

use WA\System\WA_Config;

/**
 * @package WampAdmin
 * @subpackage Settings
 */

if ( !defined( 'DS' ) ) {
    /**
     * 
     */
    define( 'DS', DIRECTORY_SEPARATOR );
}

define( 'WASYS', 'wa-system' );
define( 'WASYSFNC', WASYS . '/functions' );

// Include files required for initialization.
require ( ABSPATH . WASYS . '/bootstrap.php' );
require ( ABSPATH . WASYSFNC . '/load.php' );
require ( ABSPATH . WASYSFNC . '/default-constants.php' );
require_once ( ABSPATH . WASYSFNC . '/hook.php' );
require_once ( ABSPATH . WASYSFNC . '/plugin.php' );

// Set initial default constants
wa_initial_constants();

// Load early WampAdmin files.
require_once ( ABSPATH . WASYSFNC . '/functions.php' );
require_once ( ABSPATH . WASYSFNC . '/options.php' );
require_once ( ABSPATH . WASYSFNC . '/wampadmin.php' );

/**
 * 
 */
if ( defined( 'SHORTINT' ) && SHORTINT ) {
    return;
}

/**
 * Initiate the WampServer configurations
 * 
 * @global \WA\System\Config $GLOBALS['wa_config']
 * 
 * @name $wa_config 
 */
$GLOBALS['wa_config'] = new WA_Config();

// Attach the default filters.
require_once ( ABSPATH . WASYSINC . '/default-filters.php' );

// Load the L10n library.
require_once( ABSPATH . WASYSFNC . '/l10n.php' );

// Load most of WampAdmin.
require_once ( ABSPATH . WASYSFNC . '/script-loader.php' );
require_once ( ABSPATH . WASYSFNC . '/formatting.php' );
require_once ( ABSPATH . WASYSFNC . '/breadcrumb.php' );
require_once ( ABSPATH . WASYSFNC . '/template.php' );
require_once ( ABSPATH . WASYSFNC . '/url.php' );
require_once ( ABSPATH . WASYSFNC . '/project.php' );
require_once ( ABSPATH . WASYSFNC . '/general-template.php' );
require_once ( ABSPATH . WASYSFNC . '/dashboard-section.php' );
require_once ( ABSPATH . WASYSFNC . '/nav-menu.php' );
require_once ( ABSPATH . WASYSFNC . '/page.php' );
require_once ( ABSPATH . WASYSFNC . '/file.php' );

// Plugin Constants
wa_plugin_directory_constants();

// Create common globals.
require( ABSPATH . WASYSINC . '/vars.php' );

/**
 *
 * @global array $GLOBALS['wa_plugin_paths']
 * 
 * @name $wa_plugin_paths 
 */
$GLOBALS['wa_plugin_paths'] = array();

// Load must use plugins
foreach ( wa_get_mu_plugins() as $mu_plugin ):
    include_once( $mu_plugin );
endforeach;
unset( $mu_plugin );

// Load active plugins.
foreach ( wa_get_active_and_valid_plugins() as $plugin ) {
    wa_register_plugin_realpath( $plugin );
    include_once( $plugin );
}
unset( $plugin );

// Load pluggable functions.
require ( ABSPATH . WASYSFNC . '/pluggable.php' );

/**
 * 
 */
do_action( 'init' );