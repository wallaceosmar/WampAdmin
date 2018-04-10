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
 * @package WampAdmin
 * @subpackage Menu
 */

/**
 * Add a top-level menu page.
 * 
 * @global array $navbar_menu
 * @global array $page_hooks
 * @global array $_registered_pages
 * @global array $_parent_pages
 * 
 * @param string $page_title The text to be displayed in the title tags of the page when the menu is selected.
 * @param string $menu_title The text to be used for the menu.
 * @param string $menu_slug The slug name to refer to this menu by.
 * @param callback $function The function to be called to output the content for this page.
 * @param int $position The position in the menu order this one should appear.
 * @param bool $breadcrumb
 * 
 * @return string The resulting page's hook_suffix.
 */
function add_navbar_menu( $page_title, $menu_title, $menu_slug, $function = '', $position = null, $breadcrumb = true ) {
    global $navbar_menu, $page_hooks, $_registered_pages, $_parent_pages;
    
    // 
    $menu_slug = plugin_basename( $menu_slug );
    $page_hooks[ $menu_slug ] = sanitize_title( $menu_title );
    
    $hookname = get_plugin_page_hookname( $menu_slug, '' );
    if (!empty($function) && !empty($hookname) ) {
        /**
         * 
         */
        add_action( $hookname, $function);
    }
    
    // 
    $new_menu = array( $menu_title, $menu_slug, $page_title, $hookname );
    if ( null === $position ) {
        $navbar_menu[] = $new_menu;
    } elseif ( isset( $navbar_menu[ "$position" ] ) ) {
        $position = $position + substr( base_convert( md5( $menu_slug . $menu_title ), 16, 10 ) , -5 ) * 0.00001;
        $navbar_menu[ "$position" ] = $new_menu;
    } else {
        $navbar_menu[ $position ] = $new_menu;
    }
    
    if ( $breadcrumb ) {
        /**
         * 
         */
        add_breadcrumb_item( $menu_slug, $menu_title, $menu_slug );
    }
    
    // 
    $_registered_pages[$hookname] = true;
    
    // No parent as top level
    $_parent_pages[$menu_slug] = false;
    
    return $hookname;
}

/**
 * Add a submenu page.
 * 
 * @global array $navbar_submenu
 * @global array $navbar_menu
 * @global array $_registered_pages
 * @global array $_parent_pages
 * 
 * @param string $parent_slug The slug name for the parent menu.
 * @param string $page_title The text to be displayed in the title tags of the
 *  page when the menu is selected.
 * @param string $menu_title The text to be used for the menu.
 * @param string $menu_slug he slug name to refer to this menu by
 * @param string $icon_class The icon class name
 * @param callback $function The function to be called to output the content for this page.
 * 
 * @return string The resulting page's hook_suffix.
 */
function add_submenu_page( $parent_slug, $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '' ) {
    global $navbar_submenu, $navbar_menu, $_registered_pages, $_parent_pages;
    
    // Remove plugin basename
    $menu_slug = plugin_basename( $menu_slug );
    $parent_slug = plugin_basename( $parent_slug);
    
    /*
     * If the parent doesn't already have a submenu, add a link to the parent
     * as the first item in the submenu. If the submenu file is the same as the
     * parent file someone is trying to link back to the parent manually. In
     * this case, don't automatically add a link back to avoid duplication.
     */
    if (!isset( $navbar_submenu[$parent_slug] ) && $menu_slug != $parent_slug ) {
        foreach ( (array)$menu as $parent_menu ) {
            if ( $parent_menu[1] == $parent_slug ) {
                $navbar_submenu[$parent_slug][] = array_slice($parent_menu, 0, 4);
            }
        }
    }
    
    $navbar_submenu[$parent_slug][] = array ( $menu_title, $menu_slug, $page_title, $icon_class );
    $hookname = get_plugin_page_hookname( $menu_slug, $parent_slug);
    if (!empty($function) && !empty($hookname)) {
        add_action($hookname, $function);
    }

    $_registered_pages[$hookname] = true;
    
    // No parent as top level.
    $_parent_pages[$menu_slug] = $parent_slug;
 
    return $hookname;
}
