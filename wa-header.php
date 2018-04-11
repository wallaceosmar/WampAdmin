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

$title = strip_tags( get_page_title() );

/**
 * Filter the wamp title
 */
$title = apply_filters( 'wamp_admin_title', $title);
?>
<!DOCTYPE html>
<html>
<!-- BEGIN HEAD -->
<head>
<?php

?>
<meta charset="utf-8" />
<?php


?>
<title><?php echo $title;?></title>
<?php

wa_enqueue_dependecy('need');

?>
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<?php

/**
 * Enqueue scripts for all WampAdmin pages.
 */
do_action('admin_enqueue_scripts');

/**
 * Print the style for all pages
 */
do_action( 'wamp_print_styles' );

/**
 * 
 */
do_action( 'wamp_head' );

?>
</head>
<!-- END HEAD -->
<?php

$wamp_body_class = 'page-navbar-fixed page-boxed';

/**
 * 
 */
$wamp_body_classes = apply_filters( 'wamp_body_class', '');

?>
<!-- BEGIN BODY -->
<body class="<?php echo $wamp_body_classes . ' ' . $wamp_body_class; ?>">
    
    <!-- preloader -->
    <div id="page_loader" style="z-index: 999999;">
        <div class="loader"></div>
    </div>
    <!-- /.preloader -->
    
    <!-- BEGIN HEADER -->
    <?php require_once( ABSPATH . '/wa-navbar.php' ); ?>
    <!-- END HEADER -->
    
    <!-- BEGIN CONTAINER -->
    <div class="container">
        <!-- BEGIN PAGE -->
        <div class="page-container row">