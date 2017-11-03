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

/* Load bootstrap */
require_once ( dirname( __FILE__ ) . '/wa-admin.php' );

if ( !is_project_page() ) {
    return;
}

wa_reset_vars(array( 'action' ));

switch ( $action ) {
case 'angular-filemanager':
    $query = array( 'project' => get_project() );
?>
<!DOCTYPE html>
<html lang="en" data-ng-app="FileManagerApp">
    <head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
        <meta charset="utf-8">
        <title>Angular FileManager</title>

        <!-- third party -->
        <script src="bower_components/angular/angular.min.js"></script>
        <script src="bower_components/angular-translate/angular-translate.min.js"></script>
        <script src="bower_components/ng-file-upload/ng-file-upload.min.js"></script>
        <script src="bower_components/jquery/dist/jquery.min.js"></script>
        <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="bower_components/bootswatch/paper/bootstrap.min.css" />
        <!-- /third party -->

        <!-- Comment if you need to use raw source code -->
        <link href="bower_components/angular-filemanager/dist/angular-filemanager.min.css" rel="stylesheet">
        <script src="bower_components/angular-filemanager/dist/angular-filemanager.min.js"></script>
        <!-- /Comment if you need to use raw source code -->

        <script type="text/javascript">
            //example to override angular-filemanager default config
            angular.module('FileManagerApp').config(['fileManagerConfigProvider', function (config) {
                    var defaults = config.$get();
                    config.set({
                        appName: '<?php echo get_project();?>',
                        listUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        uploadUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        renameUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        copyUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        moveUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        removeUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        editUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        getContentUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        createFolderUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        downloadFileUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        downloadMultipleUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        compressUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        extractUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        permissionsUrl: '<?php echo base_url('api/FileManager/index.php', $query); ?>',
                        allowedActions: {
                            upload: true,
                            rename: true,
                            move: true,
                            copy: true,
                            edit: true,
                            changePermissions: true,
                            compress: true,
                            compressChooseName: true,
                            extract: true,
                            download: true,
                            downloadMultiple: true,
                            preview: true,
                            remove: true,
                            createFolder: true,
                            pickFiles: false,
                            pickFolders: false
                        }
                    });
            }]);
        </script>
    </head>

    <body class="ng-cloak">
        <angular-filemanager></angular-filemanager>
    </body>

</html>
<?php
    exit;
default :
    
    $title = 'File';
    
    require_once ( ABSPATH . '/wa-header.php' ); ?>
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">File</h1>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
    <div class="col-lg-12">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>File</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>File Manager</td>
                    <td>
                        <!-- Single button -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                File Managers <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="<?php echo base_url('/project-file.html', array(
                                    'action' => 'angular-filemanager',
                                    'project' => get_project()
                                    ));?>" target="_BLACK">angular-filemanager</a></li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<?php
}

include ABSPATH . '/wa-footer.php';