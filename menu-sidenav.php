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
 * The current page.
 *
 * @global string $self
 */
$self = preg_replace('|^.*/wampadmin/|i', '', $_SERVER['PHP_SELF']);
$self = preg_replace('|^.*/plugins/|i', '', $self);

/**
 * For when admin-header is included from within a function.
 *
 * @global array  $menu
 * @global array  $submenu
 * @global string $parent_file
 * @global string $submenu_file
 */
global $menu, $submenu, $parent_file, $submenu_file;

function _wa_menu_output( $menu, $submenu, $submenu_as_parent = true ) {
    global $self, $parent_file, $submenu_file, $plugin_page;
    
    foreach ( $menu as $key => $item ) {
        $class = $submenu_class = array();
        $arrow = '';
        
        $href = $item[1];
        if ( false === strpos( '://', $href) ) {
            $href = base_url($href);
        }
        
        // Submenu
        $submenu_items = array();
        if ( ! empty( $submenu[$item[1]] ) ) {
            $submenu_items = $submenu[$item[1]];
            $arrow = '<span class="fa arrow"></span>';
        }
        
        if ( ( $parent_file && $item[1] == $parent_file ) || ( empty($typenow) && $self == $item[1] ) ) {
            $class[] = 'active';
        }
        
        
        $class = $class ? ' class="' . join( ' ', $class ) . '"' : '';
        echo '<li>' . PHP_EOL;
        
        echo "\t<a{$class} href='{$href}'><i class='fa {$item[4]} fa-fw'></i> {$item[0]}{$arrow}</a>";
        
        if ( ! empty( $submenu_items ) ) {
            echo "<ul class='nav nav-second-level'>";
            
            // 0 = menu_title, 1 = menu_slug, 2 = page_title
            foreach ( $submenu_items as $sub_key => $sub_item ) {
                
                $title = $sub_item[0];
                $class = array();
                
                $menu_file = $sub_item[1];
                if ($submenu_file == $sub_item[1]) {
                    $class[] = 'active';
                }
                
                $class = $class ? ' class="' . join( ' ', $class ) . '"' : '';
                
                echo "<li{$class}><a href='{$menu_file}'>{$title}</a></li>";
            }
            
            echo '</ul>';
        }
        
        echo '</li>' . PHP_EOL;
    }
}

ksort( $menu );

?>
            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <?php _wa_menu_output($menu, $submenu); ?>
                    </ul>
                </div>
                <!-- /.sidebar-collapse -->
            </div>