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

/**
 * 
 * @global WA\System\WA_ProjectHandler $wa_projects
 * 
 * @param \WA\Project\Project $project_data
 */
function create_project ( $project_data = null ) {
    global $wa_projects;
    
    if ( empty( $project_data ) || !is_array($wa_projects) ) {
        $project_data = $_POST;
    }
    
    return $wa_projects->create_project($project_data);
}

/**
 * Get the Project Data
 * 
 * @global WA\System\WA_ProjectHandler $wa_projects
 * 
 * @param string $project_folder
 */
function get_project( $project_folder ) {
    global $wa_projects;
    
    return $wa_projects->get_project($project_folder);
}

/**
 * Check the project directory and retrieve all
 *  project with plugin data.
 * 
 * @param string $project_folders Relative path to single project folder.
 * 
 * @return array(\WA\Project\Project)
 */
function get_projects( $project_folders = '' ) {
    global $wa_projects;
    
    return $wa_projects->get_projects( $project_folders );
}

/**
 * 
 * @return string
 */
function get_project_page_base_url() {
    return 'project.php?' . http_build_query(array(
        'project' => wa_get_current_project()->project_folder
    )) ;
}

/**
 * Verify if a project is selected
 * 
 * @global \WA\Project\Project $wa_project
 * 
 * @return boolean
 */
function is_project_page () {
    global $wa_project;
    
    return $wa_project->exists();
}


/**
 * 
 * 
 * @param type $file
 * 
 * @return type
 */
function project_basename( $file ) {
    // $wa_project contains normalized path.
    $file = wa_normalize_path( $file );
    $project_dir = wa_normalize_path( get_option( 'default_project_dir', WA_PROJECT_ROOT ) );
    $file = preg_replace('#^' . preg_quote( $project_dir , '#') . '/#', '', $file);
    return trim( $file, '/' );
}
