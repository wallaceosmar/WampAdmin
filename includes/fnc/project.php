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
 * @global WA\Project\Projects $_projects
 * 
 * @return WA\Project\Project
 */
function get_list_projects() {
    global $_projects;
    
    return $_projects->get_projects_info();
}

/**
 * Create a new project
 * 
 * @global WA\Project\Projects $_projects
 * 
 * @return bool
 */
function new_project( $project_name ) {
    global $_projects;
    
    $return = false;
    if ( !empty( $project_name ) ) {
        $return = @$_projects->create_project($project_name);
        if ( !$retun instanceof \WA\Project\Project) {
            $return = false;
        }
    }
    
    return $return;
}

/**
 * 
 * @global WA\Project\Projects $_projects
 * 
 * @param string $project_path
 * 
 * @return bool
 */
function delete_project( $project_path ) {
    global $_projects;
    
    return $_projects->delete_project($project_path);
}