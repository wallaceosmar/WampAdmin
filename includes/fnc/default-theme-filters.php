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

// 
register_theme_header(function() { ?>
    <!-- Bootstrap core CSS-->
    <link href="<?php echo content_url('vendor/bootstrap/css/bootstrap.min.css');?>" rel="stylesheet">
<?php }, 0);

// 
register_theme_header(function() { ?>
    <!-- MetisMenu CSS -->
    <link href="<?php echo content_url('/vendor/metisMenu/metisMenu.min.css');?>" rel="stylesheet">
<?php }, 1);

// 
register_theme_header(function() { ?>
    <!-- Custom styles for this template-->
    <link href="<?php echo content_url('css/sb-admin-2.css');?>" rel="stylesheet">
<?php }, 6);

// 
register_theme_header(function() { ?>
    <!-- Custom fonts for this template-->
    <link href="<?php echo content_url('vendor/font-awesome/css/font-awesome.min.css');?>" rel="stylesheet">
<?php }, 9);

 register_theme_header( function() { ?>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
 <?php }, 11);

register_theme_footer(function() { ?>
    <!-- jQuery -->
    <script src="<?php echo content_url('/vendor/jquery/jquery.min.js');?>"></script>
<?php }, 0);

register_theme_footer(function() { ?>
    <!-- Bootstrap Core JavaScript -->
    <script src="<?php echo content_url('/vendor/bootstrap/js/bootstrap.min.js');?>"></script>
<?php }, 0);

register_theme_footer(function() { ?>
    <!-- Metis Menu Plugin JavaScript -->
    <script src="<?php echo content_url('/vendor/metisMenu/metisMenu.min.js');?>"></script>
<?php }, 0);

register_theme_footer(function() { ?>
    <!-- Custom Theme JavaScript -->
    <script src="<?php echo content_url('/js/sb-admin-2.min.js');?>"></script>
<?php }, 0);