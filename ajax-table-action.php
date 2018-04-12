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
require_once ( dirname ( __FILE__ ) . '/wa-system/wa-load.php' );

// List page option
$list_page = filter_input( INPUT_GET, 'list-page' );

?>
<div class="container">
    <div class="row justify-content-md-center">
<?php

/**
 * Fires before the list of the default actions
 */
do_action( "list_action_before_{$list_page}", $list_page);

switch ( $list_page ):
    case 'plugin':
        $plugins = filter_input( INPUT_POST, 'plugins' );
        ?><a href="<?php echo base_url( 'plugins.php', array(
            'action' => ( is_plugin_active( $plugins ) ? 'deactivate' : 'activate' ),
            'plugins' => $plugins
        ));?>" class="btn-icon col-md-2 btn-details">
            <i class="fas fa-plug fa-3x" style="height: 42px"></i>
            <div><?php echo ( is_plugin_active($plugins) ? __('Deactivate') : __('Activate') ); ?></div>
        </a><?php
        break;
    case 'project':
        $project = filter_input( INPUT_POST, 'project' );
        ?><a href="<?php echo base_url( 'project.php', array(
            'project' => $project
        ));?>" class="btn-icon col-md-2 btn-details">
            <i class="fas fa-plug fa-3x" style="height: 42px"></i>
            <div><?php _e('Manage'); ?></div>
        </a><?php
        break;
    default :
endswitch;

/**
 * Fires after the list of the default actions
 */
do_action( "list_action_after_{$list_page}", $list_page);

?>
    </div>
</div>
<?php
