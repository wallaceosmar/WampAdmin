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

function add_project_page( $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false ) {
    return add_subdashboard_section( 'project-page.php', $page_title, $menu_title, $menu_slug, $icon_class, $function, $target );
}

function add_virtual_host_page( $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false ) {
    return add_subdashboard_section( 'virtual-host.php', $page_title, $menu_title, $menu_slug, $icon_class, $function, $target );
}

function add_files_page( $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false ) {
    return add_subdashboard_section( 'files.php', $page_title, $menu_title, $menu_slug, $icon_class, $function, $target );
}

function add_database_page( $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false ) {
    return add_subdashboard_section( 'database.php', $page_title, $menu_title, $menu_slug, $icon_class, $function, $target );
}

function add_advanced_page( $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false ) {
    return add_subdashboard_section( 'advance.php', $page_title, $menu_title, $menu_slug, $icon_class, $function, $target );
}

function add_others_page( $page_title, $menu_title, $menu_slug, $icon_class = '', $function = '', $target = false ) {
    return add_subdashboard_section( 'others.php', $page_title, $menu_title, $menu_slug, $icon_class, $function, $target );
}

/**
 * 
 * @param string $parent
 */
function get_page_parent( $parent = '' ) {
    global $parent_file, $navbar_menu, $navbar_submenu, $pagenow, $typenow,
            $plugin_page;
    
    if ( !empty ( $parent ) && 'admin.php' != $parent ) {
        return $parent;
    }
    
    if ( $pagenow == 'admin.php' && isset( $plugin_page ) ) {
        foreach ( (array) $navbar_menu as $parent_menu ) {
            if ( $parent_menu[1] == $plugin_page ) {
                $parent_file = $plugin_page;
                return $parent_file;
            }
        }
    }
    
    if ( isset( $plugin_page ) ) {
        $parent_file = $pagenow;
        return $parent_file;
    }
    
    foreach ( array_keys( (array) $navbar_submenu ) as $parent) {
        foreach ( $navbar_submenu[$parent] as $submenu_array ) {
            if ( !empty($typenow) ) {
                $parent_file = $parent;
                return $parent;
            } elseif ( $submenu_array[1] == $pagenow && empty($typenow) && ( empty($parent_file) || false === strpos($parent_file, '?') ) ) {
                $parent_file = $parent;
                return $parent;
            } elseif ( isset( $plugin_page ) && ($plugin_page == $submenu_array[1] ) ) {
                $parent_file = $parent;
                return $parent;
            }
        }
    }
 
    if ( empty( $parent_file ) ) {
        $parent_file = '';
    }

    return '';
}

/**
 * 
 * @global string $title
 * @global array $navbar_menu
 * @global array $navbar_submenu
 * @global string $pagenow
 * @global string $plugin_page
 * 
 * @return type
 */
function get_page_title() {
    global $title, $navbar_menu, $navbar_submenu, $pagenow,
            $plugin_page;
    
    if ( ! empty( $title ) ) {
        return $title;
    }
    
    $hook = get_plugin_page_hook( $plugin_page, $pagenow);
    $parent = $parent1 = get_page_parent();
    if ( empty( $parent ) ) {
        foreach ( (array) $navbar_menu as $menu_array ) {
            if ( isset( $menu_array[2] ) ) {
                if ( $menu_array[1] == $pagenow ) {
                    $title = $menu_array[2];
                    return $menu_array[2];
                } elseif ( isset( $plugin_page ) && ($plugin_page == $menu_array[1] ) && ($hook == $menu_array[3] ) ) {
                    $title = $menu_array[2];
                    return $menu_array[2];
                }
            } else {
                $title = $menu_array[0];
                return $title;
            }
        }
    } else {
        foreach ( array_keys( $navbar_submenu ) as $parent ) {
            foreach ( $navbar_submenu[$parent] as $submenu_array ) {
                if ( isset( $plugin_page ) &&
                    ( $plugin_page == $submenu_array[1] ) &&
                    (
                        ( $parent == $pagenow ) ||
                        ( $parent == $plugin_page ) ||
                        ( $plugin_page == $hook ) ||
                        ( $pagenow == 'admin.php' && $parent1 != $submenu_array[1] ) ||
                        ( !empty($typenow) && $parent == $pagenow . '?post_type=' . $typenow)
                    )
                    ) {
                        $title = $submenu_array[2];
                        return $submenu_array[2];
                    }
 
                if ( $submenu_array[1] != $pagenow || isset( $_GET['page'] ) ) // not the current page
                    continue;
 
                if ( isset( $submenu_array[2] ) ) {
                    $title = $submenu_array[2];
                    return $submenu_array[2];
                } else {
                    $title = $submenu_array[0];
                    return $title;
                }
            }
        }
        if ( empty ( $title ) ) {
            foreach ( $navbar_menu as $menu_array ) {
                if ( isset( $plugin_page ) &&
                        ( $plugin_page == $menu_array[1] ) &&
                        ( $pagenow == 'admin.php' ) &&
                        ( $parent1 == $menu_array[1] ) ) {
                    $title = $menu_array[3];
                    return $menu_array[3];
                }
            }
        }
    }
    return $title;
}