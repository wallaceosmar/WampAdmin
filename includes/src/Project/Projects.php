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

use Exception;

/**
 * Description of Project
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class Projects {
    
    /**
     *
     * @var array(WA\Project\Project) 
     */
    private $project_headers = array();
    
    /**
     *
     * @var type 
     */
    private $folder_ignore = array( '.', '..' );
    
    /**
     * 
     * @param string $from_folder
     * 
     * @return array(WA\Project\Project)
     */
    public function get_projects_info ( $from_folder = WAMP_PROJECT_FOLDER ) {
        $this->project_headers = array();
        
        if ($handle = @opendir ( $from_folder )) {
            while ( $folder = readdir ( $handle ) ) {
                
                if ( is_file( $from_folder . $folder ) || in_array($folder, $this->folder_ignore ) ) {
                    continue;
                }
                
                $project = null;
                if ( ! is_dir( $from_folder . $folder . '/public_html' ) ) {
                    continue;
                }
                
                $project = new Project( $from_folder, $folder );
                
                if ( !$project->exists() ) {
                    continue;
                }
                
                $this->project_headers[] = $project;
            }
        }
        
        return $this->project_headers;
    }
    
    /**
     * 
     * @param string $project_name
     * @param string $folder_path
     * 
     * @return Project
     */
    public function get_project_info( $project_name, $folder_path = WAMP_PROJECT_FOLDER ) {
        return new Project($folder_path, $project_name);
    }
    
    /**
     * 
     * @param string $project_name
     * @param string $folder_path
     * 
     * @return false|Project
     */
    public function create_project( $project_name, $folder_path = WAMP_PROJECT_FOLDER ) {
        
        if ( !is_readable( $folder_path ) ) {
            throw new Exception('You dont have the permision to write in the folder.');
        } elseif ( is_dir( $folder_path . $project_name) ) {
            throw new Exception('The folder of the project ared exist`s;');
        }
        
        $project = new Project( $folder_path, $project_name);
        if ( $project->exists() ) {
            return false;
        }
        
        $project->create();
        
        return true;
    }
    
    public function delete_project( $project_name, $folder_path = WAMP_PROJECT_FOLDER ) {
        if ( !is_dir( $folder_path . $project_name) ) {
            return false;
        }
        
        return rmdir_recursive( $folder_path . $project_name );
    }
    
}
