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
 * @package WampAdmin
 * @subpackage Pluggable
 */

if( !function_exists( 'add_autoload_namespace_path' ) ):
    /**
     * Adds a base directory for a namespace prefix.
     * 
     * @global \WA\Psr4Autoloader $wa_autoloader
     * 
     * @param string $prefix The namespace prefix.
     * @param string $base_dir A base directory for class files in the
     * namespace.
     * @param bool $prepend If true, prepend the base directory to the stack
     * instead of appending it; this causes it to be searched first rather
     * than last.
     * 
     * @return void
     */
    function add_autoload_namespace_path($prefix, $base_dir, $prepend = false) {
        global $wa_autoloader;
        
        /**
         * Filter the autoload $base_dir
         */
        $base_dir = apply_filters( 'autoload_base_dir', $base_dir, $prefix, $prepend);
        
        $wa_autoloader->addNamespace($prefix, $base_dir, $prepend);
    }
endif;

if ( !function_exists( 'wa_get_current_project' ) ):
    /**
     * Get the current project
     * 
     * @global WA\Project\Project $wa_project
     * 
     * @staticvar \WA\Project\Project $project
     * 
     * @return \WA\Project\Project
     */
    function wa_get_current_project () {
        global $wa_project;
        
        return $wa_project;
    }
endif;

if ( !function_exists( 'wa_redirect' ) ):
    /**
     * Redirects to another page.
     * 
     * @param type $location The path to redirect to.
     * @param type $status Status code to use.
     * 
     * @return bool False if $location is not provided, true otherwise.
     */
    function wa_redirect($location, $status = 302) {
        /**
         * 
         */
        $location = apply_filters( 'wa_redirect', $location, $status);
        /**
         * 
         */
        $status = apply_filters( 'wa_redirect_status', $status, $location);
        if ( !$location ) {
            return false;
        }
        
        header( "Location: {$location}", true, $status);
        return true;
    }
endif;