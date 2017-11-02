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

/* @var $plugins WA\Plugins\Plugins */

require_once ( dirname( __FILE__ ) . '/wa-admin.php' );

$title = 'Plugins';

$parent_file = 'plugins.php';
$submenu_file = 'plugins.php';

wa_reset_vars( array( 'action', 'plugin' ) );

if ( $action ) {
    switch ( $action ) {
        case 'deactivate':
            /**
             * 
             */
            $plugin = apply_filters( 'deactivate_plugin', $plugin);

            unregister_plugin( $plugin );
            
            header('Location: ' . base_url( $parent_file ) );
            exit(1);
        case 'activate':
            /**
             * 
             */
            $plugin = apply_filters( 'activate_plugin', $plugin);

            register_plugin( $plugin );
            
            header('Location: ' . base_url( $parent_file ) );
            exit(1);
    }
}

include  ABSPATH . '/wa-header.php'; ?>
<div class="row">
    <div class="col-lg-12">
        <h1 class="page-header">Plugins</h1>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->
<div class="row">
    <div class="col-lg-12">
        <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Plugin</th>
                        <th>Version</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <?php foreach ( get_plugin_headers() as $plugin_header ):?>
                    <tr>
                        <td><a href="<?php echo $plugin_header ['PluginURI']; ?>" title="<?php echo $plugin_header ['Title']; ?>"><?php echo $plugin_header ['Name'];?></a></td>
                        <td><?php echo $plugin_header ['Version'];?></td>
                        <td><?php echo $plugin_header ['Description'];?>&nbsp;By&nbsp;<a href="<?php echo $plugin_header ['AuthorURI'];?>" title="Visit author homepage"><?php echo $plugin_header ['Author'];?></a>.</td>
                        <td><?php if( !plugin_is_activate( $plugin_header ['filename'] ) ):?>
                            <a href="<?php echo base_url($parent_file, array(
                                'action' => 'activate',
                                'plugin' => $plugin_header ['filename']
                                    ));?>">Activate</a><?php else:?><a href="<?php echo base_url($parent_file, array(
                                        'action' => 'deactivate',
                                        'plugin' => $plugin_header ['filename']
                                            ));?>">Deactivate</a><?php endif;?>
                        </td>
                    </tr>
                <?php endforeach;?>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Plugin</th>
                        <th>Version</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
    <!-- /.col-lg-12 -->
</div>
<!-- /.row -->

<?php include ABSPATH . '/wa-footer.php';