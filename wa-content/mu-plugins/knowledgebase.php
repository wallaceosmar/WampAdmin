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
                    
                    <!-- BEGIN GROUP -->
                    <div class="col-md-4">
                        <ul class="nav nav-tabs flex-column nav-inline" id="tab-faq-group" role="tablist">
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
                    <!-- END GROUP -->
                    
                    <!-- -->
                    <div class="col-md-8">
                        <div class="tab-content" id="tab-faq">
                            <!-- BEGIN PROJECT -->
                            <div class="tab-pane fade show active" id="project" role="tabpanel" aria-labelledby="project-tab">
                                <div class="card-accordion" id="accordion">
                                    <div class="card">
                                        <div class="card-header" id="h_1">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#c_1" aria-expanded="true" aria-controls="c_1">
                                                    <?php _e('Project folder structure.');?>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="c_1" class="collapse collapsed" aria-labelledby="h_1" data-parent="#accordion">
                                            <div class="card-body">
                                                <p>Folder strutcture.</p>
                                                <dl class="row text-truncate">
                                                    <dt class="col-4"><code>/{$project_name}</code></dt>
                                                    <dd class="col-8">
                                                        <dl class="row">
                                                            <dd class="col-12">/public_html</dd>
                                                            <dd class="col-12">/wampadmin.conf</dd>
                                                        </dl>
                                                    </dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="h_2">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#c_2" aria-expanded="true" aria-controls="c_2">
                                                    <?php _e('Project VirtualHost');?>
                                                </button>
                                            </h5>
                                        </div>
                                        <div id="c_2" class="collapse collapsed" aria-labelledby="h_2" data-parent="#accordion">
                                            <div class="card-body">
                                                <p><?php _e('The WampAdmin recomend to use this form of virtual host config');?></p>
                                                <pre><code>
&lt;VirtualHost *:80&gt;
    
    # ServerName
    ServerName {$project_servername}
    DocumentRoot "${INSTALL_DIR}/www/{$project_foldername}/public_html"

    # Logs
    CustomLog "${INSTALL_DIR}/www/{$project_foldername}/logs/one-access.log" combined
    ErrorLog "${INSTALL_DIR}/www/{$project_foldername}/logs/one-error.log"

    &lt;Directory  "${INSTALL_DIR}/www/{$project_foldername}/public_html/"&gt;
        Options +Indexes +Includes +FollowSymLinks +MultiViews
        AllowOverride All
        Require local
    &lt;/Directory&gt;
    
&lt;/VirtualHost&gt;
                                                </code></pre>
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
                    <!-- -->
                    
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