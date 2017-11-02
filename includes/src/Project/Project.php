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

namespace WA\Project;

/**
 * Description of Project
 * 
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 * 
 * @property string $title Description
 * @property string $folder_name Description
 */
class Project {
    
    /**
     *
     * @var array
     */
    private $project = array();
    
    /**
     *
     * @var type 
     */
    private $filename;
    
    /**
     * 
     */
    public function __construct( $project_path, $project_folder ) {
        $this->filename = $project_path . $project_folder;
        if ( file_exists( $this->filename . '/wampadmin.json' ) ) {
            $this->project = json_decode( file_get_contents( $this->filename . '/wampadmin.json' ) );
            if ( empty( $this->project ) ) {
                $this->project = new \stdClass();
            }
            $this->project->folder_name = $project_folder;
        }
    }
    
    /**
     * 
     * @return type
     */
    function exists() {
        return ( !empty( $this->project ) );
    }
    
    /**
     * 
     * @return boolean
     */
    public function create() {
        if ( $this->exists() || is_dir( $this->filename ) ) {
            return false;
        }
        
        mkdir( $this->filename, '0755' );
        mkdir( $this->filename . '/public_html', '0755' );
        mkdir( $this->filename . '/logs', '0755' );
        mkdir( $this->filename . '/cgi-bin', '0755' );
        
        file_put_contents( $this->filename . '/wampadmin.json', json_encode(array(
            'title' => basename($this->filename),
            'library' => array(),
        )));
        
        return true;
        
    }
    
    /**
     * 
     * @param type $name
     * @return type
     */
    public function __get($name) {
        return isset( $this->project->$name ) ? $this->project->$name : null;
    }
    
}
