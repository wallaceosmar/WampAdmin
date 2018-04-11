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

$title = __('New Project');

//
if ( is_method_post() ) {
    // Project
    $project = create_project();
    if ( is_wa_error( $project ) ) {
        die( '' . __FILE__ . ':' . __LINE__ );
    }
    
    
    wa_redirect( add_query_arg( array( 'project' => $project->project_folder ), 'project.php' ) );
}

// 
$parent_file = 'list-project.php';
$submenu_file = 'new-project.php';

require_once ( ABSPATH . '/wa-header.php' ); ?>
    
    <!-- BEGIN SIDEBAR -->
    <div class="col-md-3 page-sidebar">
    <?php require_once ( ABSPATH . '/wa-sidebar.php' ); ?>
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
                        <?php _e('Projects');?> <small><?php _e('Create new project.');?></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
            
            <!-- BEGIN PAGE CONTENT-->
            <div class="container-fluid">
                <div class="portlet portlet-box bg-blue">
                    <div class="portlet-title">
                        <div class="caption"><i class="fas fa-folder"></i> <?php _e('New Project');?></div>
                    </div>
                    <div class="portlet-body">
                        <form class="form-horizontal" method="POST" action="<?php echo base_url('/new-project.php');?>">
                            <div class="form-group row">
                                <label class="col-md-2 control-label"><?php _e('Folder name');?></label>
                                <div class="col-md-10 controls">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="project-name-prepend"><?php echo rtrim(
                                                    get_option('default_project_dir', WA_PROJECT_ROOT), '/' ) . '/';?></span>
                                        </div>
                                        <input name="project_folder" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="project-name-append">/public_html</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-actions row">
                                <button type="submit" class="btn btn-blue"><i class="fas fa-check"></i> <?php _e('Create');?></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END PAGE CONTENT-->
            
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
    <!-- END PAGE CONTAINER -->
<?php require_once ( ABSPATH . '/wa-footer.php' );