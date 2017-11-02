<?php

/* 
 * Plugin Name: Example
 * Plugin URI: http://example.com
 * Version: 1.0
 * Description: Example plugin 
 * Author: Example
 * Author URI: http://example.com
 */

function plugin_example ( $title ) {
    return 'WampAdmin &gt; ' . $title;
}

add_filter( 'filter_page_title', 'plugin_example');