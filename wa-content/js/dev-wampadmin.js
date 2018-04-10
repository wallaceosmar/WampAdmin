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


(function(){
    
    //@hack to show on all pages without modifying the lib
    var initTablePluginList = function() {
        
        /* Formating function for row details */
        function fnFormatDetails(oTable, nTr) {
            var bookmarks;
            var aData = oTable.row(nTr).data();
            
            var sOut = '<div class="container">';
            sOut += '<div class="row justify-content-md-center">';
            
            sOut += '<div class="col-md-2">';
            sOut += '<a>Teste</a>';
            sOut += '</div>';
            
            sOut += '</div>';
            sOut += '</div>';
            return sOut;
        }
        
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
                { targets: [0, 1, 2], visible: true},
                { targets: 0, orderable: false },
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
        jQuery('#plugin_list_wrapper .dataTables_filter input').addClass("m-wrap small"); // modify table search input
        jQuery('#plugin_list_wrapper .dataTables_length select').addClass("m-wrap small"); // modify table per page dropdown
        jQuery('#plugin_list_wrapper .dataTables_length select').select2(); // initialzie select2 dropdown

        /* Add event listener for opening and closing details
         * Note that the indicator for showing which row is open is not controlled by DataTables,
         * rather it is done here
         */
        $('#plugin_list').on('click', ' tbody td', function () {
            if ( oTable.row( this ).child.isShown() ) {
                /* This row is already open - close it */
                $(this).parent().find('.row-details').addClass("row-details-close").removeClass("row-details-open");
                oTable.row( this ).child.hide();
            } else {
                /* Open this row */
                $(this).parent().find('.row-details').addClass("row-details-open").removeClass("row-details-close");
                //console.log( fnFormatDetails( oTable, nTr ) );
                oTable.row( this ).child(fnFormatDetails( oTable, this ), 'details').show();
            }
        });
    }
    
    $(document).ready(function(){
        // Initiate the plugin list
        if( 0 != $('#plugin_list').length ) {
            initTablePluginList();
        }
        // Initiate the project list
        if ( 0 != $('#project_list').length ) {
            //initTableProjectList($('#project_list'));
        }
    });
})();