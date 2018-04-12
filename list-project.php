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

$title = __('List of Projects');

// 
$parent_file = 'list-project.php';
$submenu_file = 'list-project.php';

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
                        <?php _e('Projects');?><small></small>
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
                                <div class="caption"><i class="fas fa-globe"></i><?php _e('List of Projects');?></div>
                            </div>
                            <div class="portlet-body">
                                <table class="table table-striped table-bordered table-advance" id="project_list">
                                    <thead>
                                        <tr>
                                            <th><?php _e('Project Name');?></th>
                                            <th><?php _e('State');?></th>
                                            <th><?php _e('Action');?></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach( get_projects() as $project_key => $project_item ):?>
                                        <tr data-project-basename="<?php echo $project_item->project_folder;?>">
                                            <td><?php echo $project_item->project_folder;?></td>
                                            <td><span class="badge portled-badge <?php //echo $project_item;?>"><?php //echo $project_item['State'];?></span></td>
                                            <td>
                                                <a class="btn btn-purple btn-mini"><?php _e('Error');?></a>
                                            </td>
                                        </tr>
                                        <?php endforeach;?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <a href="<?php echo base_url('new-project.php');?>" class="btn btn-purple btn-big new-service-btn"
                           data-ga-event-name="start-account-create"><?php echo sprintf( __('New Project %s'), '<i class="far fa-arrow-alt-circle-right fa-2x"></i>');?> </a>
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
    var initTableProjectList = function() {
        
        /*
         * Insert a 'details' column to the table
         */
        var nCloneTh = document.createElement( 'th' );
        var nCloneTd = document.createElement( 'td' );
        var nCloneTd2 = document.createElement( 'td' );
        nCloneTd.innerHTML = '<span class="row-details row-details-close"></span>';
        nCloneTd2.innerHTML = '<span>-</span>';
        
        // 
        $('#project_list thead tr').each( function () {
            nCloneTh.width = '25px';
            elem = this.insertBefore( nCloneTh, this.childNodes[0] );
        });
        
        // 
        $('#project_list tbody tr').each( function () {
            elem = this.insertBefore(  nCloneTd.cloneNode( true ), this.childNodes[0] );
        });

        /*
         * Initialse DataTables, with no sorting on the 'details' column
         */
        var oTable = $('#project_list').DataTable({
            columnDefs: [
                { targets: [ 0, 1, 2, 3 ], visible: true},
                { targets: [ 0, 3], orderable: false },
                { searchable: false, targets: [ 0, 2, 3 ] }
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
                zeroRecords: "Nenhum resultado encontrado.",
                search: "",
                infoFiltered: "",
                paginate: {
                    previous: "Anterior",
                    next: "Próximo"
                }
            },
            pageLength: 10
        });
        
        // 
        $('.dataTables_filter input').attr('placeholder', "Search..");
        
        // 
        jQuery('#project_list_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#project_list_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#project_list_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */
        $('#project_list').on('click', ' tbody td', function () {
            var _this = this;
            if ( oTable.row( _this ).child.isShown() ) {
                /* This row is already open - close it */
                $( _this ).parent().find('.row-details').addClass("row-details-close").removeClass("row-details-open");
                oTable.row( _this ).child.hide();
            } else {
                /* Open this row */
                $( _this ).parent().find('.row-details').addClass("row-details-open").removeClass("row-details-close");
                //console.log( fnFormatDetails( oTable, nTr ) );
                $.post( '<?php echo base_url('ajax-table-action.php', array( 'list-page' => 'project' ));?>',{
                    project: $( _this ).parent('tr').data('project-basename')
                }).done( function( data ) {
                    oTable.row( _this )
                            .child( data, 'details')
                            .show();
                });
            }
        });
    }
    initTableProjectList();
</script>
<?php
});

get_footer();