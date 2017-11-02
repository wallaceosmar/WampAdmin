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

/* Load bootstrap */
require_once ( dirname( __FILE__ ) . '/wa-admin.php' );

// 
wa_reset_vars( array( 'action' ) );

if ( !$action ) {
    header( 'Location:' . base_url( 'edit-project.html' ) , true, 302);
}

switch ( $action ) {
case 'delete':
    $response = 404;
    if ( is_mehtod('post') ) {
        $project_name = filter_input( INPUT_POST, 'project-folder' );
        
        $project_name = apply_filters('snaitize_project_path', $project_name);
        if ( delete_project($project_name) ) {
            $response = 200;
        }
    }
    
    if ( !is_ajax() ) {
        header( 'Location:' . base_url( 'edit-project.html' ) , true, 302);
        exit;
    }
    
    http_response_code( $response );
    exit;
case 'new':
    
    if ( is_mehtod( 'post' ) ) {
        
        $project_name = filter_input( INPUT_POST, 'project-name');
        
        $project_name = apply_filters('snaitize_project_path', $project_name);
        
        $project = new_project($project_name);
        
        if ( !$project ) {
            header( 'Location:' . base_url( 'new-project.html' ) , true, 302);
        }
    }
    
    header( 'Location:' . base_url( 'edit-project.html' ) , true, 302);
    exit;
default :
    
    header( 'Location:' . base_url( 'edit-project.html' ) , true, 302);
}