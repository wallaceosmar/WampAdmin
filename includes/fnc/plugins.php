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
 * 
 * @global WA\Plugins\Plugins $_plugins
 * 
 * @return array
 */
function get_plugin_headers() {
    global $_plugins;
    
    return $_plugins->get_plugins_header();
}

/**
 * 
 * @param string $file
 * @return string
 */
function plugin_basename( $file ) {
    
    $file = normalize_path($file);
    
    $plugin_dir = normalize_path( WA_PLUGIN_DIR );
    $file = preg_replace( '#^' . preg_quote($plugin_dir, '#') . '/#', '', $file);
    
    return $file;
}

/**
 * 
 * @global WA\Plugins\Plugins $_plugins
 * 
 * @param string $plugin_file
 * 
 * @return bool
 */
function plugin_is_activate ( $plugin_file ) {
    global $_plugins;
    
    return $_plugins->is_activate( $plugin_file );
}

/**
 * 
 * @global WA\Plugins\Plugins $_plugins
 * 
 * @param string $plugin_file
 */
function register_plugin ( $plugin_file ) {
    global $_plugins;
    
    $plugin_file = plugin_basename($plugin_file);
    
    require_once( WA_PLUGIN_DIR . DS . $plugin_file );
    
    do_action('activate_' . $plugin_file);
    
    $_plugins->activate_plugin( $plugin_file );
}

/**
 * 
 * @global WA\Plugins\Plugins $_plugins
 * 
 * @param string $plugin_file
 */
function unregister_plugin ( $plugin_file ) {
    global $_plugins;
    
    $plugin_file = plugin_basename($plugin_file);
    
    require_once( WA_PLUGIN_DIR . DS . $plugin_file );
    
    do_action('deactivate_' . $plugin_file);
    
    $_plugins->deactivate_plugin( $plugin_file );
}