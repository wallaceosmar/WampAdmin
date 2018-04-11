<?php

/* 
 * Plugin Name: WampAdmin MariaDB
 * Description: Manage the database for your project
 * Author: wallaceosmar
 * AuthorUri: wallace.osmar@hotmail.com
 * Version: 0.1.0
 */

/**
 * 
 */
function _mu_plugin_database_mariadb_page_() {
    global $wa_project;
    
?>

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
                        <?php _e('MariaDB Databases');?> <small><?php _e('create a MariaDB database, '
                                . 'view a list of MariaDB users and databases');?></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
<?php try {
    
    $pdoConnect = new PDO( 'mysql:hostname=' . get_plugin_settings( __FILE__, 'host', 'localhost') . ';port=' .
            get_plugin_settings( __FILE__, 'port', '3307'),
            get_plugin_settings( __FILE__, 'username', 'root'),
            get_plugin_settings( __FILE__, 'password', ''));
    
    // List the users
    $statement = $pdoConnect->prepare('SELECT * FROM `mysql`.`user` WHERE `Host` = ?;');
    $statement->bindValue( 1, "%{$wa_project->ID}%");
    $statement->execute();
?>
            <!-- BEGIN DATABASE CREATION -->
            <div class="row">
                <div class="col-12">
                    <div class="portlet portlet-box bg-yellow">
                        <div class="portlet-title">
                            <div class="caption"><i class="fas fa-cogs"></i> <?php _e('Create New Database and MySQL User');?></div>
                        </div>
                        <div class="portlet-body form">
                            <form class="form-horizontal">
                                <div class="form-group row">
                                    <label class="col-md-4 control-label"><?php _e('MariaDB Database name');?></label>
                                    <div class="col-md-8 controls">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><?php echo sprintf('u%s_', $wa_project->ID);?></div>
                                            </div>
                                            <input name="db_name" value="" type="text" placeholder="<?php _e('Database');?>" class="m-wrap" tabindex="1" maxlength="5">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-4 control-label"><?php _e('MariaDB Username');?></label>
                                    <div class="col-md-8 controls">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <div class="input-group-text"><?php echo sprintf('u%s_', $wa_project->ID);?></div>
                                            </div>
                                            <input name="username" value="" type="text" placeholder="<?php _e('Username');?>" class="m-wrap" tabindex="1" maxlength="5">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-4 control-label"><?php _e('Password');?></label>
                                    <div class="col-md-8 controls">
                                        <input name="password" value="" type="password" placeholder="<?php _e('Password');?>" class="m-wrap col-12">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-md-4 control-label"><?php _e('Confirm Password');?></label>
                                    <div class="col-md-8 controls">
                                        <input name="password_confirm" value="" type="password" placeholder="<?php _e('Confirm Password');?>" class="m-wrap col-12">
                                    </div>
                                </div>
                                <div class="form-actions row">
                                    <button type="submit" class="btn btn-blue"><i class="fas fa-check"></i> <?php _e('Create');?></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DATABASE CREATION -->
            
            <!-- BEGIN DATATABASE LIST -->
            <div class="row">
                <div class="col-12">
                    <div class="portlet portlet-box bg-yellow">
                        <div class="portlet-title">
                            <div class="caption"><i class="fas fa-cogs"></i> <?php _e('Current MariaDB Database and User List');?></div>
                        </div>
                        <div class="portlet-body">
                            <table class="table table-striped table-bordered table-advance" id="plugin_mariadb">
                                <thead>
                                    <tr>
                                        <th><?php _e('MariaDB Database');?></th>
                                        <th><?php _e('MariaDB User');?></th>
                                        <th><?php _e('MariaDB Host');?></th>
                                        <th><?php _e('Disc Usage');?></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php while( $row = $statement->fetchObject() ):?>
                                    <tr>
                                        <td></td>
                                        <td><?php echo $row->User;?></td>
                                        <td><?php echo $row->Host;?></td>
                                        <td></td>
                                    </tr>
                                    <?php endwhile;?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DATABASE LIST -->
            
<?php } catch ( Exception $ex ) { ?>
            <p class="note note-error"><?php echo $ex->getMessage();?></p>
<?php } ?>
            
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
    <!-- END PAGE CONTAINER -->
<?php }

function _mu_plugin_database_mariadb_load_ () {
    wa_register_plain_script(function(){ ?>
<script>
     //@hack to show on all pages without modifying the lib
    var initTableMySQLList = function() {
        
        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement( 'th' );
        var nCloneTd = document.createElement( 'td' );
        var nCloneTd2 = document.createElement( 'td' );
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
        nCloneTd2.innerHTML = '<span>-</span>';
        
        // 
        $('#plugin_mariadb thead tr').each( function () {
            nCloneTh.width = '25px';
            elem = this.insertBefore( nCloneTh, this.childNodes[0] );
        });
        
        // 
        $('#plugin_mariadb tbody tr').each( function () {
            elem = this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
        });
        
        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable = $('#plugin_mysql').DataTable({
            columnDefs: [
                { targets: [ 0, 1, 2, 3, 4 ], visible: true},
                { targets: [ 0, 4], orderable: false },
                { searchable: false, targets: [ 0, 4 ] }
            ],
            Sorting: [[1, 'desc']],
            lengthMenu: [
                [5, 10, 15, 20, -1],
                [5, 10, 15, 20, "All"] // change per page values here
            ],
            language: {
                lengthMenu: "_MENU_",
                info: "",
                infoEmpty: "",
                zeroRecords: "<?php _e('No data available in table');?>",
                search: "",
                infoFiltered: "",
                paginate: {
                    previous: "<?php _e('Previous');?>",
                    next: "<?php _e('Next');?>"
                }
            },
            pageLength: 10
        });
        
    }
    initTableMySQLList();
</script>
<?php });
}

function _plugin_mariadb_deactivate_ () {
    unregister_plugin_settings( __FILE__, 'username');
    unregister_plugin_settings( __FILE__, 'password');
    unregister_plugin_settings( __FILE__, 'host');
    unregister_plugin_settings( __FILE__, 'port');
}

/**
 * 
 */
function _mu_plugin_database_mariadb_init_() {
    global $wa_project;
    
    register_plugin_setting( __FILE__, 'username', __('Database username'),
            array(), null, null, __('MariaDB database username') );
    register_plugin_setting( __FILE__, 'password', __('Database password'),
            array( 'type' => 'password' ) , null, null, __('MariaDB database password') );
    register_plugin_setting( __FILE__, 'host', __('Database host'),
            array(), null, null, _('MariaDB hostname') );
    register_plugin_setting( __FILE__, 'port', __('Database Port'),
            array(), null, null, _('MariaDB Port') );
    
    // Add Dashboard Database page
    add_database_page( __('MariaDB Database'), __('MariaDB Database'),
            __FILE__ . '?project=' . $wa_project->project_folder ,
            'icon-mariadb fa-2x', '_mu_plugin_database_mariadb_page_' );
}

register_deactivation_hook( __FILE__ , '_plugin_mariadb_deactivate_');
add_action( 'load-wampadmin_page_wampadmin-mariadb', '_mu_plugin_database_mariadb_load_');
add_action( 'wamp_init', '_mu_plugin_database_mariadb_init_');