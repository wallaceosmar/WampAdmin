<?php

/* 
 * Plugin Name: Example1
 * Plugin URI: http://example.com
 * Version: 1.0
 * Description: Example plugin 
 * Author: Example
 * Author URI: http://example.com
 */

function example_menu() {
    add_menu_page('teste', 'teste', 'example/example.php', '', 'fa-circle-o' , 15);
}

function example_project_menu() {
    add_menu_page('teste', 'teste', 'example/example.php?project=' . get_project() , '', 'fa-circle-o' , 5);
}

add_filter('wampadmin_menu', 'example_menu');
add_filter('project_wampadmin_menu', 'example_project_menu');