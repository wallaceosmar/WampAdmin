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

$title = 'Projects';
$parent_file = 'edit-project.php';
$submenu_file = 'edit-project.php';

register_theme_footer(function(){ ?>
<script>
    $(document).ready(function(){
        $(':checkbox*[data-maxevent]').on('change', function(){
            if( this.checked) {
                $(':checkbox').prop('checked', true);
            } else {
                $(':checkbox').prop('checked', false);
            }
        });
        $('select[id="max-action"]').on('change', function(){
            if ( "null" == this.value ) {
                return true;
            }
            var _this = this;
            $(':checkbox[name]').each(function( index, selector ){
                if ( !selector.checked ) {
                    return true;
                }
                console.log( selector );
                $.post('project.html',{
                    'action': _this.value,
                    'project-folder': selector.value
                }, function(){
                    window.location.reload();
                });
            });
        });
    });
</script>
<?php });

require_once ( ABSPATH . '/wa-header.php' ); ?>
<!-- .row -->
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Projects</h1>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-sm-2">
                <div class="form-group">
                    <select id="max-action" class="form-control">
                        <option value="null">Max Action</option>
                        <option value="delete">Delete</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <table width="100%" class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th width="20px"><input data-maxevent="true" type="checkbox"></th>
                            <th>Title</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    <?php foreach( get_list_projects() as $project ): ?>
                        <tr>
                            <td><input name="project-folder[]" value="<?php echo $project->folder_name;?>" type="checkbox"></td>
                            <td><a href="<?php echo base_url('project.html', array(
                                'action' => 'view', 'project' => $project->folder_name
                            ));?>"><?php echo $project->title;?></a></td>
                            <td><?php echo $project->folder_name;?></td>
                            <td></td>
                        </tr>
                    <?php endforeach; ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th><input data-maxevent="true" type="checkbox"></th>
                            <th>Title</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</div>
<?php include ABSPATH . '/wa-footer.php';