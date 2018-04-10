<?php

/* 
 * Plugin Name: WampAdmin Knowledgebase
 * Description: Knowledgebase of the WampAdmin
 * Version: 1.0
 */

function _mu_plugin_knowledfebase_page_() { ?>
    <!-- BEGIN SIDEBAR -->
    <div class="col-md-3 page-sidebar">
    <?php get_sidebar(); ?>
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
                        <?php _e('Help');?><small></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
            
            <!-- BEGIN PAGE CONTENT-->
            <div class="container-fluid" style="padding-left: 0px;padding-right: 0px;">
                
                <div class="note note-info"><?php _e('This is a defaul FAQ database with comon question and response.');?></div>
            
                <div class="row knowledgebase">
                    <div class="col-md-4">
                        <ul class="nav nav-tabs flex-column nav-inline" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="project-tab" data-toggle="tab" href="#project" role="tab" aria-controls="project" aria-selected="true">
                                    <i class="fas fa-users"></i> <?php _e('Projects');?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="plugin-tab" data-toggle="tab" href="#plugin" role="tab" aria-controls="plugin" aria-selected="false">
                                    <i class="fas fa-users"></i> <?php _e('Plugins');?></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings"  aria-selected="false">
                                    <i class="fas fa-users"></i> <?php _e('Settings');?></a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content" id="myTabContent">
                            <!-- BEGIN PROJECT -->
                            <div class="tab-pane fade show active" id="project" role="tabpanel" aria-labelledby="project-tab">
                                <div class="card-accordion" id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <?php _e('Project folder structure.');?>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" class="collapse collapsed" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>Folder strutcture.</p>
                                                <dl class="row text-truncate">
                                                    <dt class="col-sm-3"><code>/{$project_name}</code></dt>
                                                    <dd class="col-sm-9">
                                                        <dl class="row">
                                                            <dd class="col-sm-12"><code>/public_html</code></dd>
                                                            <dd class="col-sm-12"><code>/logs</code></dd>
                                                            <dd class="col-sm-12"><code>/cgi-bin (Optional)</code></dd>
                                                            <dd class="col-sm-12"><code>/wampadmin.conf</code></dd>
                                                        </dl>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- END PROJECT -->
                            <!-- BEGIN PLUGIN -->
                            <div class="tab-pane fade" id="plugin" role="tabpanel" aria-labelledby="plugin-tab"></div>
                            <!-- END PLUGIN -->
                            <!-- BEGIN SETTINGS -->
                            <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab"></div>
                            <!-- END SETTINGS -->
                        </div>
                    </div>
                </div>
                
                <div class="clearfix"></div>
            </div>
            <!-- END PAGE CONTENT-->
            
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
    <!-- END PAGE CONTAINER -->
<?php
}

function _mu_plugin_knowledgebase_init_() {
    // Add the knowledgebase
    add_navbar_menu( __('Knowledge Base'), __('Help'), 'wampadmin-knowledgebase.php', '_mu_plugin_knowledfebase_page_');
}
add_action( 'wamp_init', '_mu_plugin_knowledgebase_init_');
