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
 * Constructs the menu.
 *
 * The elements in the array are :
 *     0: Menu item name
 *     1: The URL of the item's file
 *     2: Page Title
 *     3: Function
 *     4: Icon for top level menu
 *
 * @global array $menu
 */

//$menu[2] = array( 'Dashboard', 'index.html', '', '', 'fa-dashboard' );

$menu[10] = array( 'Projects', 'edit-project.html', '', '', 'fa-folder' );
$submenu['edit-project.html'][5] = array( 'Projects', 'edit-project.html', '' );
$submenu['edit-project.html'][10] = array( 'New Project', 'new-project.html', '' );

$menu[20] = array( 'Plugins', 'plugins.html', '', '', 'fa-plug' );

require_once ABSPATH . WAINC . '/menu.php';