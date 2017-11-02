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
 * Add a top-level menu page.
 * 
 * @global array $menu
 * @global array $page_hook
 * 
 * @param string $page_title The text to be displayed in the title tags of the page when the menu is selected.
 * @param string $menu_title The text to be used for the menu.
 * @param string $menu_slug The slug name to refer to this menu by (should be unique for 
 * @param string|callback $function The function to be called to output the content for this page.
 * @param string $icon The class to the icon to be used for this menu. 
 * @param int $position The position in the menu order this one should appear.
 */
function add_menu_page( $page_title, $menu_title, $menu_slug, $function = '', $icon = '', $position = null ) {
    global $menu, $page_hook;
    
    $page_hook[ $menu_slug ] = $menu_title;
    
    $new_menu = array( $menu_title, $menu_slug, $page_title, $function, $icon );
    if ( null === $position ) {
        $menu[] = $new_menu;
    } elseif ( isset( $menu[ "$position" ] ) ) {
        $position = $position + substr( base_convert( md5( $menu_slug . $menu_title ), 16, 10 ) , -5 ) * 0.00001;
        $menu[ "$position" ] = $new_menu;
    } else {
        $menu[ $position ] = $new_menu;
    }
    
}

/**
 * Add a submenu page.
 * 
 * @global array $submenu
 * @global array $menu
 * 
 * @param string $parent_slug The slug name for the parent menu.
 * @param string $page_title The text to be displayed in the title tags of the page when the menu is selected.
 * @param string $menu_title The text to be used for the menu.
 * @param string $menu_slug The slug name to refer to this menu by (should be unique for 
 * @param string|callback $function The function to be called to output the content for this page.
 */
function add_submenu_page( $parent_slug, $page_title, $menu_title, $menu_slug, $function = '' ) {
    global $submenu, $menu;
    
    if (!isset( $submenu[$parent_slug] ) && $menu_slug != $parent_slug ) {
        foreach ( (array)$menu as $parent_menu ) {
            if ($parent_menu[1] == $parent_slug) {
                $submenu[$parent_slug][] = array_slice($parent_menu, 0, 4);
            }
        }
    }
    
    $submenu[$parent_slug][] = array ( $menu_title, $menu_slug, $page_title );
    
}