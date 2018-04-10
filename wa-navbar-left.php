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
 * The current page.
 *
 * @global string $self
 */
$self = preg_replace('|^.*/plugins/|i', '', $_SERVER['PHP_SELF']);

/**
 * This is included as function
 * 
 * @global array $navbar_menu
 * @global array $navbar_submenu
 */
global $navbar_menu, $navbar_submenu, $parent_file, $submenu_file;

/**
 * 
 * @internal Internal function
 * 
 * @global string $self
 * @global string $parent_file
 * @global string $submenu_file
 * 
 * @param array $navbar_menu
 * @param array $navbar_submenu
 */
function _wa_menu_output( $navbar_menu, $navbar_submenu ) {
    global $self, $parent_file, $submenu_file;
    
    foreach ( $navbar_menu as $key => $item ) {
        $class = array( 'nav-item' );
        
        
        $submenu_items = array();
        if ( ! empty( $navbar_submenu[$item[1]] ) ) {
            $submenu_items = $navbar_submenu[$item[1]];
            $class[] = 'dropdown';
        }
        
        if ( ( $item[1] == $parent_file ) || ( $self == $item[1] ) ) {
            $class[] = 'active';
        }
        
        $class = $class ? ' class="' . join( ' ', $class ) . '"' : '';
        echo "<li{$class}>";
        
        if ( ! empty( $submenu_items ) ) {
            echo "<a class='nav-link dropdown-toggle' href='#' id='navbarProjectDropdown' role='button'"
                . " data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>{$item[0]}</a>";
        } elseif ( ! empty( $item[1] ) ) {
            $menu_hook = get_plugin_page_hook( $item[1], 'admin.php');
            $menu_file = $item[1];
            if ( false !== ( $pos = strpos($menu_file, '?') ) ) {
                $menu_file = substr($menu_file, 0, $pos);
            }
            
            if ( !empty( $menu_hook ) || ( ( 'index.php' != $item[1] ) && file_exists( WA_PLUGIN_DIR . "/$menu_file" ) && ! file_exists( ABSPATH . "/$menu_file" ) ) ) {
                echo "<a href='admin.php?page=" . preg_replace( '/\?(.*)/', '&$1', $item[1]) . "' class='nav-link'>{$item[0]}</a>";
            } else {
                echo "<a href='{$item[1]}' class='nav-link'>{$item[0]}</a>";
            }
        }
        
        if ( ! empty( $submenu_items ) ) {
            echo "<div class='dropdown-menu' aria-labelledby=''>";
            
            foreach ( $submenu_items as $sub_key => $sub_item ) {
                $class = array( 'dropdown-item' );
                
                $menu_file = $item[1];
                if (false !== ( $pos = strpos($menu_file, '?') )) {
                    $menu_file = substr($menu_file, 0, $pos);
                }
                
                if ( isset( $submenu_file ) ) {
                    if ( $submenu_file == $sub_item[1] ) {
                        $class[] = 'active';
                    }
                }
                
                $icon = !empty( $sub_item[3] ) ? "<i class='{$sub_item[3]}'></i> ": '';
                $class = $class ? ' class="' . join( ' ', $class ) . '"' : '';
                
                if ( empty( $sub_item[0] ) ) {
                    echo '<div class="dropdown-divider"></div>';
                    continue;
                }
                
                $sub_file = $sub_item[1];
                if ( ( ( 'index.php' != $sub_item[1] ) && file_exists( WA_PLUGIN_DIR . "/$sub_file" ) && ! file_exists( ABSPATH . "/$sub_file" ) ) ) {
                    echo "<a{$class} href='admin.php?page=" . preg_replace( '/\?(.*)/', '&$1', $sub_item[1]) . "'>{$icon}{$sub_item[0]}</a>";
                } else {
                    echo "<a{$class} href='{$sub_item[1]}'>{$icon}{$sub_item[0]}</a>";
                }
            }
            
            echo '</div>';
        }
        
        echo '</li>';
    }
    
}

// Sort the array
ksort( $navbar_menu );

?>
<ul class="navbar-nav mr-auto">
    <?php
    
    /**
     * print the menu
     */
    _wa_menu_output( $navbar_menu, $navbar_submenu );
    
    /**
     * Fires after the menu is printed
     */
    do_action( 'navbar-right-menu' );
    
    ?>
</ul>