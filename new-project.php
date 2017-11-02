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

$title = 'New Project';
$parent_file = 'edit-project.php';
$submenu_file = 'new-project.php';


register_theme_footer(function(){ ?>
<script>
    $(document).ready(function(){
        $('#slugname').on('change',function(){
            $('#projectname').val( this.value + ".localhost" );
        });
    });
</script>
<?php });

require_once ( ABSPATH . '/wa-header.php' ); ?>
<!-- .row -->
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">New Project</h1>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Project</div>
                    <form action="project.html?action=new" method="POST">
                        <div class="panel-body">
                            <div class="form-group">
                                <input type="hidden" id="projectname" name="project-name" >
                                <label for="exampleInputEmail1">Project Slug name</label>
                                <div class="input-group">
                                    <span class="input-group-addon" id="sizing-addon1">http://</span>
                                    <input id="slugname" type="text" class="form-control" placeholder="Slug">
                                    <span class="input-group-addon" id="sizing-addon1">.localhost/</span>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <button type="submit" class="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include ABSPATH . '/wa-footer.php';