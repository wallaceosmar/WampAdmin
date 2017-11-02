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

namespace WA\Plugins;

/**
 * 
 */
define( 'PLUGINS_FOLDER', ABSPATH . 'plugins' . DS );
define( 'PLUGINS_CONFIG_FILE', ABSPATH . WAINC . '/config/plugins.json' );

/**
 * Description of Modules
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class Plugins {
    
    /**
     *
     * @var type 
     */
    private $active_plugins = null;
    
    /**
     *
     * @var type 
     */
    private $plugins = array();
    
    /**
     *
     * @var type 
     */
    private $plugins_header = array();
    
    /**
     * 
     */
    public function __construct() {
        $this->active_plugins = array();
        $json = json_decode( file_get_contents( PLUGINS_CONFIG_FILE ));
        if ( isset( $json->activated ) ) {
            $this->active_plugins = $json->activated;
        }
    }
    
    /**
     * 
     * @param string $from_folder
     * @return array
     */
    public function get_plugins_header ( $from_folder = PLUGINS_FOLDER ) {
        if ($handle = @opendir ( $from_folder )) {
            while ( $file = readdir ( $handle ) ) {
                if ( is_file ( $from_folder . $file ) && strpos ( $from_folder . $file, '.plugin.php' ) ) {
                    $fp = fopen ( $from_folder . $file, 'r' );
                    // Pull only the first 8kiB of the file in.
                    $plugin_data = fread ( $fp, 8192 );
                    fclose ( $fp );
                    
                    preg_match ( '|Plugin Name:(.*)$|mi', $plugin_data, $name );
                    preg_match ( '|Plugin URI:(.*)$|mi', $plugin_data, $uri );
                    preg_match ( '|Version:(.*)|i', $plugin_data, $version );
                    preg_match ( '|Description:(.*)$|mi', $plugin_data, $description );
                    preg_match ( '|Author:(.*)$|mi', $plugin_data, $author_name );
                    preg_match ( '|Author URI:(.*)$|mi', $plugin_data, $author_uri );
                    preg_match ( '|License:(.*)$|mi', $plugin_data, $license );
                    preg_match ( '|LicenseURI:(.*)$|mi', $plugin_data, $license_uri );
                    
                    foreach ( array ('name', 'uri', 'version', 'description', 'author_name', 'author_uri', 'license', 'license_uri' ) as $field ) {
                        if (!empty(${$field})) {
                            ${$field} = trim(${$field} [1]);
                        } else {
                            ${$field} = '';
                        }
                    }
                    
                    $plugin_data = array (
                        'filename' => plugin_basename( $from_folder . $file), 'Name' => $name, 'Title' => $name,
                        'PluginURI' => $uri, 'Description' => $description,
                        'Author' => $author_name, 'AuthorURI' => $author_uri,
                        'Version' => $version, 'License' => $license, 'LicenseURI' => $license_uri
                    );
                    $this->plugins_header [] = $plugin_data;
                } elseif ( (is_dir ( $from_folder . $file )) && ($file != '.') && ($file != '..') ) {
                    $this->get_plugins_header( $from_folder . $file . DS );
                }
            }
            closedir ( $handle );
        }
        return $this->plugins_header;
    }
    
    /**
     * 
     */
    public function is_activate( $file ) {
        return is_array( $this->active_plugins ) && in_array( $file, $this->active_plugins);
    }
    
    /**
     * 
     * @param type $from_folder
     */
    public function load_plugins() {
        foreach ( $this->active_plugins as $plugin ) {
            $plugin = normalize_path( WA_PLUGIN_DIR . DS . $plugin );
            if ( strpos( $plugin, '.plugin.php') ) {
                $this->load_plugin_file( $plugin );
                $this->plugins [ $plugin ] ['file'] = $plugin;
            }
        }
    }
    
    /**
     * 
     * @param type $file
     * @return type
     */
    public function activate_plugin( $file ) {
        
        if ( in_array( $file, $this->active_plugins ) ) {
            return;
        }
        
        array_push($this->active_plugins, $file);
        
        $this->save();
    }
    
    public function deactivate_plugin ( $file ) {
        if ( ($key = array_search($file, $this->active_plugins)) !== false ) {
            unset( $this->active_plugins[ $key ] );
            $this->active_plugins = array_values( $this->active_plugins );
        }
        $this->save();
    }
    
    /**
     * 
     * @param string $file_require
     */
    private function load_plugin_file( $file_require ) {
        require_once ( $file_require );
    }
    
    /**
     * 
     */
    private function save() {
        $content = array(
            'activated' => $this->active_plugins
        );
        file_put_contents( PLUGINS_CONFIG_FILE , json_encode( $content, JSON_PRETTY_PRINT ));
    }
    
}
