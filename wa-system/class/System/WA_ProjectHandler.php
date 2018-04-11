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

use WA\Project\Project;

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
     * Store the name of the file of config of wampadmin
     * 
     * @var string 
     */
    public $project_filename;
    
    /**
     * Constructor.
     * 
     * @param string $path Project dir
     */
    public function __construct() {
        @list( $this->projects_path, $this->project_filename ) = func_get_args();
        if ( empty( $this->project_filename ) ) {
            $this->project_filename = get_option( 'wamp_admin_project_filename', 'wampadmin.conf' );
        }
    }
    
    /**
     * 
     * @param type $project_data
     * @return \WA\System\WA_Error
     */
    public function create_project( $project_data ) {
        
        if ( !isset( $project_data['project_folder'] ) || empty( $project_data['project_folder'] ) ) {
            return new WA_Error( '' );
        }
        
        // 
        $project_folder = $project_data['project_folder'];
        
        // Clean the project datas
        foreach ( array( 'ID' ) as $key ) {
            if ( !isset( $project_data[$key] ) ) {
                continue;
            }
            unset($project_data[$key]);
        }
        unset( $key );
        
        if ( !is_dir( "$this->projects_path/$project_folder" ) ) {
            @mkdir( "$this->projects_path/$project_folder", 0755);
            /**
             * Fires after create the folders
             */
            $folders2create = apply_filters( 'project_folders_create_list', array( 'public_html' ) );
            foreach ( $folders2create as $folder ) {
                @mkdir( "$this->projects_path/$project_folder/$folder", 0755 );
            }
            unset( $folder );
        }
        
        $defaults = array(
            'ID' => substr( md5( $project_folder ), 0, 9),
            'database' => array(),
            'virtualhosts' => array()
        );
        
        $filename = "$this->projects_path/$project_folder/$this->project_filename";
        $project = new Project();
        if( !$project->createProject( $filename,
                wa_parse_args( $project_data, $defaults )) ) {
            return new WA_Error();
        }
        
        
        
        return $project->init($filename);
    }
    
    /**
     * Get the project
     * 
     * @param string $project_name
     * 
     * @return Project
     */
    public function get_project( $project_name ) {
        $project = new Project;
        
        $project_name = trim( $project_name );
        if ( !empty( $project_name ) ) {
            $project->init( "{$this->projects_path}/"
            . "{$project_name}/{$this->project_filename}" );
        }
        
        return $project;
    }
    
    /**
     * 
     * @return array(\WA\Project\Project)
     */
    public function get_projects( $projects_dir = '' ) {
        $wa_projects = array();
        
        $projects_dir = trim($projects_dir);
        if ( empty( $projects_dir ) ) {
            $projects_dir = $this->projects_path;
        }
        
        // Files project directory
        $project_dir = @ opendir( $projects_dir );
        if ( $project_dir ) {
            while (($dir = readdir( $project_dir ) ) !== false ) {
                if ( ( '.' == substr( $dir, 0, 1) ) || !is_dir( $projects_dir . '/' . $dir ) ) {
                    continue;
                }
                $project = $this->get_project( $dir );
                if ( !$project->exists() ) {
                    continue;
                }
                $wa_projects[] = $project;
            }
            closedir( $project_dir );
        }
        return $wa_projects;
    }
    
    /**
     * 
     * @param Project $folder_name
     * 
     * @return bool
     */
    public function is_valid_project( $project ) {
        return ( ( $project instanceof Project ) && $project->exists() );
    }
    
}
