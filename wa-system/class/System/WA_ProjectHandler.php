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
 * Description of WA_ProjectHandler
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class WA_ProjectHandler {
    
    /**
     * Store the projects dirname
     * 
     * @var string 
     */
    public $projects_path;
    
    /**
     * Constructor.
     * 
     * @param string $path Project dir
     */
    public function __construct() {
        @list( $this->projects_path ) = func_get_args();
    }
    
    /**
     * Get the project
     * 
     * @param string $project_name
     * 
     * @return boolean
     */
    public function get_project( $project_name ) {
        $project_name = trim( $project_name );
        if ( empty( $project_name ) ) {
            return false;
        }
        
        return get_datafile( "{$this->projects_path}/"
            . "{$project_name}/wampadmin.conf" );
    }
    
}
