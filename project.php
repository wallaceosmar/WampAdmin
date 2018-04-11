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

/** Load WampAdmin Bootstrap */
require_once ( dirname ( __FILE__ ) . '/admin.php' );

if ( !is_project_page() ) {
    /**
     * 
     */
    wa_redirect('list-project.php');
}

// Add dashbord menu
require_once ( ABSPATH . WASYSINC . '/dashboard-sidebar-menu.php' );

$title = __('Dashboard');

// 
$parent_file = 'list-project.php';
$submenu_file = 'project.php';

// wa-header.php
require_once ( ABSPATH . '/wa-header.php' ); ?>
    <!-- BEGIN SIDEBAR -->
    <div class="col-md-3 page-sidebar">
    <?php get_sidebar('dashboard-project'); ?>
    </div>
    <!-- END SIDEBAR -->
    
    <!-- BEGIN PAGE -->
    <div class="col-md-9 page-content">
        <!-- BEGIN PAGE CONTAINER -->
        <div class="container">
            
            <!-- BEGIN PAGE HEADER-->
            <div class="row hidden-print">
                <div class="col-12">
                    <!-- BEGIN PAGE TITLE & BREADCRUMB-->
                    <h3 class="page-title">
                        <small></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
            
            <!-- BEGIN PAGE CONTENT-->
            <div class="container-fluid">
                
                <!-- BEGIN SEARCHBOX -->
                <div class="row search-forms search-default">
                    <form class="col-12 form-search" action="#" method="get" id="section_form">
                        <div class="chat-form pulsate-once" style="outline: 0px; box-shadow: rgba(191, 28, 86, 0) 0px 0px 13px; outline-offset: 20px;">
                            <div class="input-cont" style="margin-right: 0px !important;">
                                <input type="text" placeholder="<?php _e('Input the section name...');?>" id="findInput2"
                                       style="height: auto;"
                                       class="form-control m-wrap">
                            </div>
                        </div>
                    </form>
                </div>
                <!-- END SEARCHBOX -->
                
                <!-- BEGIN SEARCH SECTION -->
                <div class="search_sections">
                    <?php foreach ( get_dashboard_section() as $section_item):
                        if( !dashboard_has_subsection( $section_item[1] ) ) { continue; };?>
                    <!-- BEGIN SECTION ITEM -->
                    <div class="row">
                        <div class="col-12">
                            <div class="portlet">
                                <div class="portlet-title">
                                    <div class="caption" style="text-transform: capitalize;">
                                        <i class="<?php echo $section_item[2];?>"></i><?php echo $section_item[0];?></div>
                                </div>
                                <div class="portlet-body project-dashboard">
<?php foreach( get_dashboard_subsection( $section_item[1] ) as $sub_item ):
    // 0: Menu Title 1: Menu Slug 2: Page Title 3: Icon class 4: Target
    $dash_hook = get_plugin_page_hook( $sub_item[1], 'admin.php');
    $sub_file = $sub_item[1];
    
    if ( false !== ( $pos = strpos( $sub_file, '?') ) ) {
        $sub_file = substr( $sub_file, 0, $pos);
    }
    
    echo '<!-- BEGIN SUB SECTION ITEM -->';
    echo '<a class="icon-btn-project" '  . ( $sub_item[4] ? 'target="_BLANK" ': '' );
    if ( !empty( $dash_hook ) || ( ( 'index.php' != $sub_item[1] ) && file_exists( WA_PLUGIN_DIR . "/$sub_file" ) && ! file_exists( ABSPATH . "/$sub_file" ) ) ) {
        echo "href='admin.php?page=" . preg_replace( '/\?(.*)/', '&$1', $sub_item[1]) . "'>";
    } else {
        echo "href='{$sub_item[1]}'>";
    }
    echo "<i class='{$sub_item[3]}'></i>";
    echo "<div class='name'>{$sub_item[0]}</div>";
    echo '</a><!-- END SUB SECTION ITEM -->';
endforeach;?>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END SECTION ITEM -->
                    <?php endforeach;?>
                    
                </div>
                <!-- END SEARCH SECTION -->
                
                <div class="clearfix"></div>
            </div>
            <!-- END PAGE CONTENT-->
            
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
    <!-- END PAGE CONTAINER -->
<?php require_once( ABSPATH . '/wa-footer.php' );
