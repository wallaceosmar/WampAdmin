<?php

/* 
 * Plugin Name: phpinfo
 */

function plugin_php_info_page() {
    
    wa_register_plain_script(function(){ ?>
<script>
     $('iframe').ready(function(){
        //$('iframe').load( function() {
            $('iframe').contents().find("head")
                    .append($("<style type='text/css'>table{width:auto;}</style>"));
        //});
    });
</script><?php });
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
                        <small></small>
                    </h3>
                    <?php breadcrumb_print_element(); ?>
                    <!-- END PAGE TITLE & BREADCRUMB-->
                </div>
            </div>
            <!-- END PAGE HEADER-->
            
            <!-- BEGIN PAGE CONTENT-->
            <div class="row">
                <div style="overflow: none; position: relative; width: 100%; height: 1000px;" class="phpinfodisplay">
                    <iframe style="width: 100%;height: 100%; border: none;" src="//localhost/?phpinfo=1"></iframe>
                </div>
            </div>
            <!-- END PAGE CONTENT-->
            
        </div>
        <!-- END PAGE CONTAINER-->
    </div>
    <!-- END PAGE CONTAINER -->
<?php }

function plugin_php_info_init() {
    // Advanced
    add_navbar_menu( __('PHP Information'), 'phpinfo', __FILE__, 'plugin_php_info_page', null, true);
}
add_action( 'wamp_init', 'plugin_php_info_init');