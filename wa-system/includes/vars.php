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

use WA\System\WA_ProjectHandler;
use WA\Project\Project;

global $pagenow;

// Which page are we?
// Pre default the index.php
$pagenow = 'index.php';
if ( preg_match('#([^/]+\.php)([?/].*?)?$#i', $_SERVER['PHP_SELF'], $self_matches) ) {
    $pagenow = strtolower($self_matches[1]);
}
unset( $self_matches );

/**
 * Handle of all functions of projects
 * 
 * @global WA_ProjectHandler $GLOBALS['wa_projects']
 * 
 * @name $wa_projects 
 */
$GLOBALS['wa_projects'] = new WA_ProjectHandler(
    get_option( 'default_project_dir', WA_PROJECT_ROOT )
);

/**
 * Populate the project file
 * 
 * @global Project $GLOBALS['wa_project']
 * 
 * @name $wa_project 
 */
$GLOBALS['wa_project'] = $wa_projects
        ->get_project( filter_input( INPUT_GET, 'project' ) );
