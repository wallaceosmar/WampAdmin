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

namespace WA\Project;

/**
 * Description of Project
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 * 
 * @version 0.2
 * 
 * @property string $ID Description
 * @property array $database Description
 * @property string $project_folder Description
 * @property array $virtualhosts Description
 */
class Project {
    
    /**
     * The absolute path to the project config file
     * 
     * @var string 
     */
    private $filename;
    
    /**
     * Contructor
     * 
     * @param string $filename
     */
    public function __construct( $filename = null ) {
        if ( !empty( $filename ) ) {
            $this->init( $filename );
        }
    }
    
    /**
     * Give access to private variables
     * 
     * @param string $name
     */
    public function __get($name) {
        return isset( $this->{$name} ) ? $this->{$name}: null;
    }
    
    /**
     * 
     * @param type $name
     * @param type $value
     * 
     * @return void
     */
    public function __set($name, $value) {
        if ( 'filename' == $name ) {
            return;
        }
        $this->{$name} = $value;
    }
    
    /**
     * 
     * @param type $filename
     * @param type $content
     */
    public static function createProject( $filename, $content ) {
        return @file_put_contents($filename, maybe_serialize($content));
    }
    
    /**
     * Verify if the project exists
     * 
     * @return bool
     */
    public function exists() {
        return ( !empty( $this->filename ) && file_exists( $this->filename ) );
    }
    
    /**
     * Init all the
     * 
     * @param string $filename
     */
    public function init( $filename ) {
        if ( !file_exists( $filename ) ) {
            trigger_error( sprintf( __('The file'), $filename ) );
        }
        $project_configs = get_datafile( $filename );
        if ( !is_array( $project_configs ) ) {
            return $this;
        }
        
        foreach ( $project_configs as $key => $value ) {
            $this->{$key} = $value;
        }
        
        $this->filename = $filename;
        
        return $this;
    }
    
}
