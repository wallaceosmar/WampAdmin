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
 */

/**
 * Attempts activation of plugin
 * 
 * @param string $plugin Path to the main plugin file from plugins directory.
 * @param string $redirect Optional. URL to redirect to.
 * @param bool $silent Optional. Whether to prevent calling activation hooks.
 * 
 * @return null
 */
function activate_plugin( $plugin, $redirect = '', $silent = false ) {
    $plugin = plugin_basename( trim( $plugin ) );
    
    $current = get_option( 'active_plugins', array());
    
    $valid = validate_plugin( $plugin );
    if ( is_wa_error( $valid ) ) {
        return $valid;
    }
    
    if ( !in_array( $plugin, $current ) ) {
        if ( !empty( $redirect ) ) {
            wa_redirect( base_url('plugins.php') );
        }
        ob_start();
        wa_register_plugin_realpath( WA_PLUGIN_DIR . '/' . $plugin );
        $_wa_plugin_file = $plugin;
        include_once( WA_PLUGIN_DIR . '/' . $plugin );
        $plugin = $_wa_plugin_file;
        
        if ( !$silent ) {
            /**
             * 
             */
            do_action( 'activate_plugin', $plugin );

            /**
             * 
             */
            do_action("activate_{$plugin}");
        }
        
        //
        $current = get_option( 'active_plugins', array() );
        $current[] = $plugin;
        sort( $current );
        update_option( 'active_plugins', $current);
        
        if ( ob_get_length() > 0 ) {
            $output = ob_get_clean();
        }
        ob_end_clean();
    }
    
    return null;
}

/**
 * Deactivate a single plugin or multiple plugins.
 * 
 * @param string|array $plugins Single plugin or list of plugins to deactivate.
 * @param type $silent Prevent calling deactivation hooks. Default is false.
 */
function deactivate_plugins( $plugins, $silent = false ) {
    $current = get_option( 'active_plugins', array() );
    foreach ( (array) $plugins as $plugin ) {
        $plugin = plugin_basename( trim( $plugin ) );
        if (!is_plugin_active($plugin)) {
            continue;
        }
        
        if ( ! $silent ) {
            /**
             * 
             */
            do_action( 'deactivate_plugin', $plugin );
        }
        
        $key = array_search( $plugin, $current);
        if ( FALSE !== $key ) {
            unset( $current[ $key ] );
        }
        
        if ( ! $silent ) {
            
            /**
             * 
             */
            do_action( "deactivate_{$plugin}" );
            
            /**
             * 
             */
            do_action( 'deactivated_plugin', $plugin );
        }
        
        
    }
    update_option( 'active_plugins', $current);
}

/**
 * 
 * @param type $plugin_file
 * @param type $markup
 * 
 * @return type
 */
function get_plugin_data( $plugin_file, $markup = true ) {
    $default_headers = array(
        'Name' => 'Plugin Name',
        'PluginURI' => 'Plugin URI',
        'Version' => 'Version',
        'Description' => 'Description',
        'Author' => 'Author',
        'AuthorURI' => 'Author URI',
        'TextDomain' => 'Text Domain',
        'DomainPath' => 'Domain Path',
        'Network' => 'Network'
    );
    
    $plugin_data = get_file_data( $plugin_file, $default_headers, 'plugin' );
    
    return $plugin_data;
}

/**
 * 
 * @param string $plugin_page
 * @param string $parent_page
 * 
 * @return string|null
 */
function get_plugin_page_hook( $plugin_page, $parent_page ) {
    $hook = get_plugin_page_hookname( $plugin_page, $parent_page);
    
    return has_action( $hook ) ? $hook: null;
}

/**
 * 
 * 
 * @global type $page_hooks
 * @param type $plugin_page
 * @param type $parent_page
 * 
 * @return type
 */
function get_plugin_page_hookname( $plugin_page, $parent_page ) {
    global $page_hooks;
    
    // Remove all Query String
    $plugin_page = preg_replace('/\?.*/', '', $plugin_page);
    
    $parent = get_page_parent( $parent_page );
    $page_type = 'wampadmin';
    if ( empty ( $parent_page ) || 'admin.php' == $parent_page || isset( $page_hooks[$plugin_page] ) ) {
        if ( isset( $page_hooks[$plugin_page] ) ) {
            $page_type = 'toplevel';
        } elseif ( isset( $page_hooks[$parent] )) {
            $page_type = $page_hooks[$parent];
        }
    } elseif ( isset( $page_hooks[$parent] ) ) {
        $page_type = $page_hooks[$parent];
    }
    $plugin_name = preg_replace( '!\.php!', '', $plugin_page );
    
    return $page_type . '_page_' . $plugin_name;
}

/**
 * 
 * @param string $file
 * @param string $options
 * @param array $default
 * 
 * @return mixed
 */
function get_plugin_settings( $file, $options, $default ) {
    // Remove the file path and extension
    $file = str_replace( array( '.php', '-' ), array( '', '_' ), plugin_basename( $file ) );
    
    return get_option( $file . '_plugin_' . $options, $default);
}

/**
 * Check the plugins directory and retrieve all
 *  plugin files with plugin data.
 * 
 * @param string $plugin_folder Relative path to single plugin folder.
 * 
 * @return array Key is the plugin file path and the value
 *  is an array of the plugin data.
 */
function get_plugins($plugin_folder = '') {
    $wa_plugins = array ();
    $plugin_root = WA_PLUGIN_DIR;
    
    if ( !empty( $plugin_folder ) ) {
        $plugin_root .= $plugin_folder;
    }
    
    // Files in wa-content/plugins directory
    $plugins_dir = @ opendir( $plugin_root );
    $plugin_files = array();
    if ( $plugins_dir ) {
        while (($file = readdir( $plugins_dir ) ) !== false ) {
            if (substr($file, 0, 1) == '.') {
                continue;
            }
            if ( is_dir( $plugin_root.'/'.$file ) ) {
                $plugins_subdir = @ opendir( $plugin_root.'/'.$file );
                if ( $plugins_subdir ) {
                    while (($subfile = readdir( $plugins_subdir ) ) !== false ) {
                        if ( substr($subfile, 0, 1) == '.' )
                            continue;
                        if ( substr($subfile, -4) == '.php' )
                            $plugin_files[] = "$file/$subfile";
                    }
                    closedir( $plugins_subdir );
                }
            } else {
                if (substr($file, -4) == '.php') {
                    $plugin_files[] = $file;
                }
            }
        }
        closedir( $plugins_dir );
    }
    
    if ( empty($plugin_files) ) {
        return $wa_plugins;
    }

    foreach ( $plugin_files as $plugin_file ) {
        if (!is_readable("$plugin_root/$plugin_file")) {
            continue;
        }

        $plugin_data = get_plugin_data( "$plugin_root/$plugin_file", false, false ); //Do not apply markup/translate as it'll be cached.
        if (empty($plugin_data['Name'])) {
            continue;
        }

        $wa_plugins[plugin_basename( $plugin_file )] = $plugin_data;
    }
    
    return $wa_plugins;
}

/**
 * Check whether a plugin is active.
 * 
 * @param string $plugin Path to the main plugin file from plugins directory.
 * 
 * @return bool True, if in the active plugins list. False, not in the list.
 */
function is_plugin_active( $plugin ) {
    return in_array( $plugin, get_option( 'active_plugins', array()));
}

/**
 * Check whether the plugin is inactive.
 * 
 * @param string $plugin Path to the main plugin file from plugins directory.
 * 
 * @return bool
 */
function is_plugin_inactive( $plugin ) {
    return ! is_plugin_active( $plugin );
}

/**
 * 
 * @param type $file
 * @param type $slugname
 * @param type $title
 * @param type $attr
 * @param type $values
 * @param type $form_type
 * @param type $description
 */
function register_plugin_setting( $file, $slugname, $title, $attr = array(), $values = '', $form_type = 'input', $description = '' ) {
    // Remove the file path and extension
    $file = str_replace( array( '.php', '-' ), array( '', '_' ), plugin_basename( $file ) );
    
    register_wampadmin_setting( $file . '_plugin_' . $slugname, $title, $attr, $values, $form_type, $description );
}

/**
 * Gets the basename of a plugin.
 * 
 * @param string $file
 * 
 * @return string
 */
function plugin_basename( $file ) {
    
    // $wa_plugin_paths contains normalized paths.
    $file = wa_normalize_path( $file );
    
    $plugin_dir = wa_normalize_path(WA_PLUGIN_DIR);
    $mu_plugin_dir = wa_normalize_path( WAMU_PLUGIN_DIR );
    
    $file = preg_replace('#^' . preg_quote($plugin_dir, '#') . '/|^' . preg_quote($mu_plugin_dir, '#') . '/#', '', $file);
    
    return trim($file, '/');
}

/**
 * 
 * @param type $plugin
 * 
 * @return WA_Error|int
 */
function validate_plugin($plugin) {
    
    if ( validate_file( $file ) ) {
        return new WA_Error( 'plugin_invalid' );
    }
    
    if ( ! file_exists(WA_PLUGIN_DIR . '/' . $plugin) ) {
        return new WA_Error( 'plugin_not_found' );
    }
    
    $installed_plugins = get_plugins();
    if ( !isset( $installed_plugins[$plugin] ) ) {
        return new WA_Error( 'no_plugin_header' );
    }

    return 0;
}

function wa_register_plugin_realpath( $file ) {
    global $wa_plugin_paths;
}
