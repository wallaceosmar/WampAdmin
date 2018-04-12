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

/** */
require_once ( dirname( __FILE__ ) . '/admin.php' );

$action = isset( $_REQUEST['action'] ) ? $_REQUEST['action'] : '';
$plugin = isset( $_REQUEST['plugins'] ) ? $_REQUEST['plugins'] : '';

if ( $action ) {
    switch ( $action ) {
        case 'activate':
            $result = activate_plugin($plugin);
            if ( is_wa_error( $result ) ) {
                wa_redirect( base_url( 'plugins.php' ) );
            }
            if ( headers_sent() ) {
                echo "<meta http-equiv='refresh' content='" . esc_attr("0;url=" . base_url('plugins.php')) . "' />";
            } else {
                wa_redirect( base_url( 'plugins.php' ) );
            }
            exit;
        case 'deactivate':
            deactivate_plugins( $plugin, false );
            if (headers_sent()) {
               echo "<meta http-equiv='refresh' content='" . esc_attr("0;url=" . base_url('plugins.php')) . "' />";
            } else {
               wa_redirect( base_url( 'plugins.php' ) );
            }
            exit;
    }
}

$title = __('Plugins');

$parent_file = 'plugins.php';
$submenu_file = 'plugins.php';

get_header(); ?>
    
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
                        <?php _e('Plugins');?><small></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
            
            <!-- BEGIN PAGE CONTENT-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="portlet">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="fas fa-plug"></i>
                                    <?php _e('List of Plugins');?>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <table class="table table-striped table-bordered table-advance" id="plugin_list">
                                    <thead>
                                        <tr>
                                            <th><?php _e('Name');?></th>
                                            <th><?php _e('Description');?></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ( get_plugins() as $plugin_path => $plugin ):?>
                                        <tr data-plugin-path="<?php echo $plugin_path;?>" data-plugin-activated="<?php echo is_plugin_active( $plugin_path ); ?>">
                                            <td><?php echo $plugin['Name'];?></td>
                                            <td><?php echo $plugin['Description'];?></td>
                                        </tr>
                                        <?php endforeach;?>
                                    </tbody>
                                </table>
                            </div>
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

wa_register_plain_script(function(){
?>
<script>
    //@hack to show on all pages without modifying the lib
    var initTablePluginList = function() {
        
        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement( 'th' );
        var nCloneTd = document.createElement( 'td' );
        var nCloneTd2 = document.createElement( 'td' );
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
        nCloneTd2.innerHTML = '<span>-</span>';
        
        // 
        $('#plugin_list thead tr').each( function () {
            nCloneTh.width = '25px';
            elem = this.insertBefore( nCloneTh, this.childNodes[0] );
        });
        
        // 
        $('#plugin_list tbody tr').each( function () {
            elem = this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
        });

        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable = $('#plugin_list').DataTable({
            columnDefs: [
                { targets: [ 0, 2 ], orderable: false },
                { targets: [ 0, 1, 2], visible: true},
                { searchable: false, targets: [ 0, 2 ] }
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
                zeroRecords: "<?php _e('Results not found.');?>",
                search: "",
                infoFiltered: "",
                paginate: {
                    previous: "<?php _e('Previous');?>",
                    next: "<?php _e('Next');?>"
                }
            },
            pageLength: 10
        });
        
        // 
        $('.dataTables_filter input').attr('placeholder', "<?php _e('Search...');?>");
        
        // 
        jQuery('#plugin_list_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#plugin_list_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#plugin_list_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */
        $('#plugin_list').on('click', ' tbody td', function () {
            var _this = this;
            if ( oTable.row( _this ).child.isShown() ) {
                /* This row is already open - close it */
                $( _this ).parent().find('.row-details').addClass("row-details-close").removeClass("row-details-open");
                oTable.row( _this ).child.hide();
            } else {
                /* Open this row */
                $(this).parent().find('.row-details').addClass("row-details-open").removeClass("row-details-close");
                //console.log( fnFormatDetails( oTable, nTr ) );
                $.post( '<?php echo base_url('ajax-table-action.php', array( 'list-page' => 'plugin' ));?>',{
                    plugins: $( _this ).parent('tr').data('plugin-path')
                }).done( function( data ) {
                    oTable.row( _this )
                            .child( data, 'details')
                            .show();
                });
                //oTable.row( this ).child(fnFormatDetails( oTable, this ), 'details').show();
            }
        });
    }
    initTablePluginList();
</script>
<?php
});

get_footer();