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

namespace WA\System;

/**
 * Handle all the options of the WampAdmin
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class WA_Options {
    
    /**
     * Options file path
     * 
     * @var string 
     */
    private $optionspath = '/sys-data/options.data';
    
    /**
     * Configs
     * 
     * @var array 
     */
    private $options;
    
    /**
     * Constructor
     */
    public function __construct() {
        $this->init();
    }
    
    /**
     * Magic method __get
     * 
     * @param string $name
     * 
     * @return mixed
     */
    public function __get($name) {
        return $this->get($name);
    }
    
    /**
     * Magic method __isset
     * 
     * @param string $name
     * 
     * @return bool
     */
    public function __isset($name) {
        return $this->has($name);
    }
    
    /**
     * Magic method __set
     * 
     * @param string $name
     * @param mixed $value
     */
    public function __set($name, $value) {
        $this->set($name, $value);
    }
    
    /**
     * Magic method __unset
     * 
     * @param type $name
     */
    public function __unset($name) {
        return $this->del($name);
    }
    
    /**
     * Delete a value
     * 
     * @param string $name
     */
    public function del( $name ) {
        unset($this->options[$name]);
        // Save the delete option
        $this->save();
        return !$this->has( $name );
    }
    
    /**
     * Get a option value
     * 
     * @param string $name
     * @param mixed $default
     * 
     * @return mixed
     */
    public function get( $name, $default = null ) {
        return $this->has($name) ? $this->options[ $name ]: $default;
    }
    
    /**
     * Verify if a value exists
     * 
     * @param string $name
     * 
     * @return bool
     */
    public function has ( $name ) {
        return isset( $this->options[ $name ] );
    }
    
    /**
     * Initialize the options configuration
     * 
     * @global WA_DataHandler $wa_file_handler
     */
    public function init() {
        global $wa_file_handler;
        
        if ( $this->is_edited ) {
            $this->save();
        }
        
        // Get the configurations
        $this->options = maybe_unserialize(
                $wa_file_handler->load( WA_CONTENT_DIR . $this->optionspath ) );
    }
    
    /**
     * Save the configuration
     * 
     * @global \WA\System\WA_DataHandler $wa_file_handler
     */
    private function save() {
        global $wa_file_handler;
        
        return $wa_file_handler->save( WA_CONTENT_DIR . $this->optionspath,
            maybe_serialize($this->options));
    }
    
    /**
     * Set the a value
     * 
     * @param string $name
     * @param mixed $value
     */
    public function set( $name, $value ) {
        $this->options[ $name ] = $value;
        
        return $this->save();
    }
    
    /**
     * Update a value
     * 
     * @param string $name
     * @param mixed $value
     */
    public function update( $name, $value ) {
        return $this->set($name, $value);
    }
    
}
