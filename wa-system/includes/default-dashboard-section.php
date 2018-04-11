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
 * Default dashboard settings
 */

/**
 * Sub Section
 * 0: Menu Title 1: Menu Slug 2: Page Title 3: Icon class 4: Target
 */

// Section Projec
$dashboard_section[2] = array( __('Project'), 'project-page.php', 'fas fa-info-circle' );
$subdashboard_section[ 'project-page.php' ][0] = array( __('Details'), 'project-page.php?project=' . wa_get_current_project()->project_folder,
    __('Details'), 'fas fa-info fa-2x', false );

// Section Virtual Hosts
$dashboard_section[5] = array( __('Virtual Hosts'), 'virtual-host.php', 'fas fa-globe' );

// Section File Manger
$dashboard_section[10] = array( __('Files'), 'files.php', 'fas fa-folder-open' );

// Section Databases
$dashboard_section[15] = array( __('Database'), 'database.php', 'fas fa-database' );

// Section for advanced configuration
$dashboard_section[20] = array( __('Advanced'), 'advance.php', 'fas fa-cogs' );

// Section for another configurations
$dashboard_section[25] = array( __('Others'), 'others.php', 'fas fa-cog' );

