<?php

use WA\Plugins\Plugins;

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

/* @var $plugins WA\Plugins\Plugins */

require_once ( dirname( __FILE__ ) . '/constants.php' );
require_once ( ABSPATH . WAINC . '/fnc/hooks.php' );
require_once ( ABSPATH . WAINC . '/fnc/error.php' );

add_filter('error_alert_mount', '_mount_alert_');

// Include the autoloader class
require_once ( ABSPATH . WAINC . '/autoload.php' );

// Load the functions
require_once ( ABSPATH . WAINC . '/fnc/default-constants.php' );
require_once ( ABSPATH . WAINC . '/fnc/load.php' );
require_once ( ABSPATH . WAINC . '/fnc/functions.php' );
require_once ( ABSPATH . WAINC . '/fnc/url.php' );
require_once ( ABSPATH . WAINC . '/fnc/theme.php' );
require_once ( ABSPATH . WAINC . '/fnc/misc.php' );
require_once ( ABSPATH . WAINC . '/fnc/plugins.php' );
require_once ( ABSPATH . WAINC . '/fnc/project.php' );

$submenu = $menu = array();

// Filters
require_once ( ABSPATH . WAINC . '/fnc/default-string-filters.php' );
require_once ( ABSPATH . WAINC . '/fnc/default-theme-filters.php' );

// Include the initialization of the vars
require_once ( ABSPATH . WAINC . '/vars.php' );

// Load active plugins.
$_plugins->load_plugins();

// Menu
require_once ( ABSPATH . 'menu.php' );

/**
 * Fires once activated plugins have loaded.
 */
do_action('plugins_loaded');