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

if ( is_method_post() ) {
    // Get the inputs
    $settings_inputs_list = array_keys($_POST);
    foreach ( $settings_inputs_list as $curropt ) {
        if ( is_array( $_POST[$curropt] ) ) {
            $value = filter_input( INPUT_POST, $curropt, FILTER_DEFAULT, FILTER_REQUIRE_ARRAY);
        } else {
            $value = filter_input( INPUT_POST, $curropt, FILTER_DEFAULT );
        }
        $value = apply_filters( "settings_{$curropt}", $value, $curropt );
        update_option( $curropt, $value);
    }
}

$title = __('Settings'); 

$parent_file = 'settings.php';
$submenu_file = 'settings.php';

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
                        <?php _e('Settings');?> <small><?php _e('change the WampAdmin settings.');?></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
            
            <!-- BEGIN PAGE CONTENT-->
<?php foreach( get_settings_options() as $settings_file => $settings_items ): ?>
            <div class="row">
                <div class="col-12">
                    <div class="portlet portlet-box bg-pink">
                        <div class="portlet-title">
                            <div class="caption"><i class="fas fa-cogs"></i> <?php echo get_breadcrumb_item($settings_file);?></div>
                        </div>
                        <div class="portlet-body">
                            <form class="form-horizontal" method="POST" action="<?php echo base_url('/settings.php');?>">
<?php
foreach( $settings_items as $option_key => $settings ):
    // Get the option value
    $option_values = get_option( $option_key, ( isset( $settings['default_value'] ) ? $settings['default_value'] : null) );
?>
                                <div class="form-group row">
                                    <label class="col-md-4 control-label"><?php echo $settings['name'];?></label>
                                    <div class="col-md-8 controls">
<?php switch( $settings['form'] ):
    case 'select': ?><select class="form-control select2 m-wrap"<?php
    foreach ( $settings['attr'] as $attr_name => $attr_value ):
        // Continue if not alowed attribute name
        if ( in_array( $attr_name , array( 'name', 'value', 'class' )) ) {
            continue;
        }
        echo ' ' . $attr_name . '="' . $attr_value . '"';
    endforeach;
    // Print the name
    echo "name='{$option_key}'";
    ?>><option value="null"><?php _e('Select option');?></option><?php
    if ( isset( $settings['attr']['value'] ) ):
        foreach ( $settings['attr']['value'] as $value => $name ):
            $selected = ( ( $value == $option_values ) ? ' selected' : '' );
            echo "<option value='{$value}'{$selected}>{$name}</option>";
        endforeach;
        unset( $value, $name );
    endif;
    ?></select><?php
        break;
    case 'textare':
        break;
    case 'input':
    case 'input:checbox':
    case 'input:radio':
    default :
        $typeinput = end( $typeinput = explode( ':', $settings['form']) );
        switch ( $typeinput ):
            case 'checbox':
                $cn = 0;
                foreach( $settings['attr']['value'] as $v_value => $v_name ):
                    $input_id = sprintf( '%s-%s', $option_key, ++$cn);
                ?><div class="custom-control custom-checkbox"><?php
                    echo "<input name='{$option_key}[]' type='checkbox'"
                    . ( in_array( $v_value, $option_values) ? ' checked ' : ' ' ) . "value='{$v_value}' class='custom-control-input' id='{$input_id}'>";
                    echo "<label class='custom-control-label' for='{$input_id}'>{$v_name}</label>";
                    ?></div><?php
                endforeach;
                break;
            default;
            ?><input class="form-control"<?php
                if( isset( $settings['attr'] ) ):
                    foreach ( $settings['attr'] as $attr_name => $attr_value ):
                        // Continue if not alowed attribute name
                        if ( in_array( $attr_name, array( 'name', 'value', 'class' )) ): continue; endif;
                        echo ' ' . $attr_name . '="' . $attr_value . '"';
                    endforeach;
                endif;
                if ( !isset( $settings['attr']['type'] ) ):
                    echo ' type="text"';
                endif; ?> name="<?php echo $option_key;?>" value="<?php echo $option_values;?>"><?php
        endswitch;
endswitch;?>
                                        <?php if( isset( $settings['description'] ) && !empty( $settings['description'] ) ):?><span class="form-text text-muted help-inline"><?php echo $settings['description'];?></span><?php endif;?>
                                    </div>
                                </div>
<?php endforeach;?>
                                <div class="form-actions row">
                                    <button type="submit" class="btn btn-blue"><i class="fas fa-check"></i> <?php _e('Save');?></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
<?php endforeach; ?>
            <!-- END PAGE CONTENT-->
            
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
    <!-- END PAGE CONTAINER -->
<?php

wa_register_plain_script(function(){ ?>
<script>
$(document).ready(function(){
    $('.select2').select2();
});
</script>
<?php });

include ( ABSPATH . '/wa-footer.php' );
