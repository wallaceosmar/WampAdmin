<?php

/* 
 * Plugin Name: Inverse Navbar Color
 * Plugin URI: http://example.com
 * Version: 1.0
 * Description: Inverse the color of the Navbar
 * Author: Example
 * Author URI: http://example.com
 */

function _inverse_navbar_color( $string ) {
    return 'navbar-inverse';
}

add_filter('change_navbar_color', '_inverse_navbar_color');