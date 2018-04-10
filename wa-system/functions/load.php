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

use WA\System\WA_Error;

/**
 * @package WampAdmin
 * @subpackage Load
 */

/**
 * 
 * @param type $method
 * 
 * @return type
 */
function is_method ( $method ) {
    return ( strtoupper( $method ) == $_SERVER['REQUEST_METHOD'] );
}

/**
 * 
 * @param type $method
 * 
 * @return type
 */
function is_method_post () {
    return is_method( 'POST' );
}


/**
 * Check whether variable is a WordPress Error.
 * 
 * @param WA_Error $object Check if unknown variable is a WP_Error object.
 * 
 * @return bool if WA_Error. False, if not WA_Error.
 */
function is_wa_error( $object ) {
    return ( $object instanceof WA_Error );
}

/**
 * 
 * @return string|array
 */
function wa_get_active_and_valid_plugins() {
    $plugins = array();
    $active_plugins = (array) get_option( 'active_plugins', array());
    
    if ( empty ( $active_plugins ) ) {
        return $plugins;
    }

    foreach ( $active_plugins as $plugin ) {
        if ( ! validate_file( $plugin ) // $plugin must validate as file
                && '.php' == substr( $plugin, -4 ) // $plugin must end with '.php'
                && file_exists( WA_PLUGIN_DIR . '/' . $plugin ) // $plugin must exist
                // not already included as a network plugin
                && ( ! $network_plugins || ! in_array( WA_PLUGIN_DIR . '/' . $plugin, $network_plugins ) )
            )
            $plugins[] = WA_PLUGIN_DIR . '/' . $plugin;
	}
    return $plugins;
}

/**
 * Retrieve an array of must-use plugin files.
 * 
 * @return array Files to include.
 */
function wa_get_mu_plugins() {
    $mu_plugins = array();
    if ( !is_dir(WAMU_PLUGIN_DIR) ) {
        return $mu_plugins;
    }
    if (!$dh = opendir(WAMU_PLUGIN_DIR)) {
        return $mu_plugins;
    }
    while ( ( $plugin = readdir( $dh ) ) !== false ) {
        if ( substr($plugin, -4) == '.php' ) {
            $mu_plugins[] = WAMU_PLUGIN_DIR . '/' . $plugin;
        }
    }
    closedir( $dh );
    sort( $mu_plugins );
 
    return $mu_plugins;
}
