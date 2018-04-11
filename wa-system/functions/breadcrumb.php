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


function add_breadcrumb_item( $filename, $breadcrumb_title, $slug_name = '', $parent = 'index.php', $icon_css = '' ) {
    global $wa_breadcrumb;
    
    $filename = trim( $filename );
    if ( empty( $filename ) ) {
        return false;
    }
    
    //esc_http_query($text)
    $filename = esc_http_query ( plugin_basename( $filename ) );
    $parent = esc_http_query( plugin_basename( $parent ) );
    
    $wa_breadcrumb[ $filename ] = array( $breadcrumb_title, $slug_name, $parent, $icon_css );
}

/**
 * Print the breadcrumb
 * 
 * @uses get_breadcrumb Description
 */
function breadcrumb_print_element() {
    global $pagenow, $plugin_page;
    
    $wa_breadcrumb = get_breadcrumb();
    $page = $pagenow;
    if ( !empty( $plugin_page ) ) {
        $page = $plugin_page;
    }
    
    // Breadcrumb
    $breadcrumb = array();
    do {
        
        if ( isset( $wa_breadcrumb[$page] ) ) {
            $breadcrumb[] = $wa_breadcrumb[$page];
            if ( $page !== $wa_breadcrumb[$page][2] ) {
                $page = $wa_breadcrumb[$page][2];
                continue;
            }
            
        }
        
        break;
    } while ( true );
    
    // Breadcrumb Reverse
    $breadcrumb = array_reverse($breadcrumb);
    
    echo '<ul class="breadcrumb">';
    foreach ( (array) $breadcrumb as $item ):
        
        echo '<li class="breadcrumb-item">';
        
        // Verify if a icon is defined
        if ( !empty( $item[3] ) ) {
            echo "<i class='{$item[3]}'></i> ";
        }
        // Menu Hook
        $menu_hook = get_plugin_page_hook( $item[2], 'admin.php');
        $menu_file = $item[1];
        if ( false !== ( $pos = strpos($menu_file, '?') ) ) {
            $menu_file = substr($menu_file, 0, $pos);
        }
        if ( empty( $item[1] ) ) {
            echo $item[0];
        } elseif ( ( $menu_hook ) || ( ( 'index.php' != $item[1] ) && (
                file_exists( WA_PLUGIN_DIR . "/{$menu_file}" ) || file_exists( WAMU_PLUGIN_DIR . "/{$menu_file}" )
                ) && ! file_exists( ABSPATH . "/$menu_file" ) ) ) {
            
            if ( false !== strpos( $item[1], '?') ) {
                $menu_url = str_replace( '?', '&', $item[1]);
            } else {
                $menu_url = $item[1];
            }
            echo "<a href='admin.php?page={$menu_url}'>{$item[0]}</a>";
        } else {
            echo "<a href='{$item[1]}'>{$item[0]}</a>";
        }
               
        echo '</li>';
    endforeach;
    echo '</ul>';
}

/**
 * Create the default breadcrumb items
 * 
 * @global array $wa_breadcrumb
 */
function default_breadcrumb () {
    global $wa_breadcrumb;
    
    // Initialize the breadcrumb
    get_breadcrumb();
    
    // Add the default breadcrumb
    require_once ( ABSPATH . WASYSINC . '/default-breadcrumb.php' );
}

/**
 * Get the breadcrum
 * 
 * @global array $wa_breadcrumb
 * @return array
 */
function get_breadcrumb() {
    global $wa_breadcrumb;
    
    if ( !isset( $wa_breadcrumb ) || empty( $wa_breadcrumb ) ) {
        $wa_breadcrumb = array();
    }
    
    return $wa_breadcrumb;
}

function get_breadcrumb_item( $filename ) {
    global $wa_breadcrumb;
    
    return isset( $wa_breadcrumb[ $filename ] ) ?
        $wa_breadcrumb[ $filename ][0] : $filename;
}