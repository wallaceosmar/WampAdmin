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
 * Constructs the topnavbar menu.
 * 
 * The elements in the array are :
 *      0: Menu item name
 *      1: The URL of the item's file
 *      2: Page title
 *      3: Hookname
 * 
 * @global array $navbar_menu
 */
$navbar_menu[2] = array( __('Home'), 'index.php', '', '' );

// Projects
$navbar_menu[20] = array( __('Projects'), 'list-project.php', '', '', '' );
$navbar_submenu[ 'list-project.php' ][5] = array( __('All Projects'), 'list-project.php', '', 'fas fa-list-ul' );
$navbar_submenu[ 'list-project.php' ][10] = array( __('New Project'), 'new-project.php', '', 'fas fa-edit' );

// Plugins
$navbar_menu[85] = array( __('Plugins'), 'plugins.php', '', '' );
