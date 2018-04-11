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
 *      0: Title
 *      1: Slugname
 *      2: Parent
 *      3: Icon
 */

// Index
$wa_breadcrumb['index.php'] = array( __('Home'), 'index.php', 'index.php', 'fas fa-home' );

// Plugins
$wa_breadcrumb['plugins.php'] = array( __( 'Plugins' ), 'plugins.php', 'index.php', null );

// Project List
$wa_breadcrumb['list-project.php'] = array( __( 'Project' ), 'list-project.php', 'index.php', null );

// Project New
$wa_breadcrumb['new-project.php'] = array( __( 'Project' ), 'new-project.php', 'index.php', null );

// Settings
$wa_breadcrumb['settings.php'] = array( __( 'Settings' ), 'settings.php', 'index.php', null );

if ( is_project_page() ) {
    
    // Add the project breadcrumb
    $wa_breadcrumb['project.php'] = array( wa_get_current_project()->project_folder,
        get_project_page_base_url(), 'list-project.php', null );
    
    // Database
    $wa_breadcrumb['database.php'] = array( __('Database'),
        'database.php?project=' . wa_get_current_project()->project_folder, 'project.php', null );
    
    // Advanced
    $wa_breadcrumb['advance.php'] = array( __('Advanced'),
        'advanced.php?project=' . wa_get_current_project()->project_folder, 'project.php', null );
    
    // Others
    // Advanced
    $wa_breadcrumb['others.php'] = array( __('Others'),
        'others.php?project=' . wa_get_current_project()->project_folder, 'project.php', null );
}
