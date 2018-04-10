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

function add_dashboard_section( $dashboard_title, $dashboard_slugname, $dashboard_icon = '', $position = null ) {
    global $dashboard_section;
    
    $new_section = array( $dashboard_title, $dashboard_slugname,$dashboard_icon );
    if ( null === $position ) {
        $dashboard_section[] = $new_section;
    } elseif ( isset( $dashboard_section[ "$position" ] ) ) {
        $position = $position + substr( base_convert( md5( $dashboard_slugname . $dashboard_title ), 16, 10 ) , -5 ) * 0.00001;
        $dashboard_section[ "$position" ] = $new_section;
    } else {
        $dashboard_section[ $position ] = $new_section;
    }
}

/**
 * Add subitem and page to the project dashboard
 * 
 * @global array $subdashboard_section
 * 
 * @param string $parent_slug
 * @param string $page_title
 * @param string $menu_title
 * @param string $menu_slug
 * @param string $icon_class
 * @param string $function
 * @param bool $target
 * @param bool $breadcrumb
 * 
 * @return boolean
 */
function add_subdashboard_section ( $parent_slug, $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false, $breadcrumb = true ) {
    global $subdashboard_section;
    
    $parent_slug = trim( $parent_slug );
    if ( empty( $parent_slug ) ) {
        return FALSE;
    }
    
    // Remove plugin basename
    $menu_slug = plugin_basename( $menu_slug );
    $parent_slug = plugin_basename( $parent_slug);
    
    // 0: Menu Title 1: Menu Slug 2: Page Title 3: Icon class 4: Target
    $subdashboard_section[$parent_slug][] = array ( $menu_title, $menu_slug, $page_title, $icon_class, $target );
    if ( false !== ( $pos = strpos( $menu_slug, '?') ) ) {
        $_menu_slug = substr( $menu_slug, 0, $pos);
    } else {
        $_menu_slug = $menu_slug;
    }
    
    $hookname = get_plugin_page_hookname( $_menu_slug, $parent_slug);
    if ( !empty( $function ) && !empty( $hookname ) ) {
        /**
         * 
         */
        add_action($hookname, $function);
    }
    
    if ( $breadcrumb ) {
        /**
         * 
         */
        add_breadcrumb_item( $menu_slug, $menu_title, $menu_slug, $parent_slug );
    }
    
    $_registered_pages[$hookname] = true;
    
    // No parent as top level.
    $_parent_pages[$menu_slug] = $parent_slug;
    
    return $hookname;
}

/**
 * Return all the section dashboard
 * 
 * @return array
 */
function get_dashboard_section() {
    global $dashboard_section;
    
    if ( !isset( $dashboard_section ) ) {
        $dashboard_section = array();
    }
    
    return $dashboard_section;
}

/**
 * Return all the subsection of the param
 * 
 * @param string $section_key
 * 
 * @return array
 */
function get_dashboard_subsection( $section_key ) {
    global $subdashboard_section;
    
    return $subdashboard_section[ $section_key ];
}

/**
 * Verify if the subsection is empty
 * 
 * @param string $section_key
 * 
 * @return boolean
 */
function dashboard_has_subsection( $section_key ) {
    global $subdashboard_section;
    
    return ( isset( $subdashboard_section[ $section_key ] ) );
}
