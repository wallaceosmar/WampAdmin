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


?>
<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-host">
    
    <!-- BEGIN CONTAINER -->
    <div class="container">
        
        <!-- BEGIN NAVBAR LOGO -->
        <a class="navbar-brand" href="<?php echo base_url('/');?>">
            <img src="<?php echo base_url('/wa-content/img/wamp-white.png');?>" height="30" alt="WampAdmin">
        </a>
        <!-- END NAVBAR LOGO -->
        
        <!-- BEGIN COLLAPSE BUTTON -->
        <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="<?php _e('Toggle navigation');?>">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- END COLLAPSE BUTTON -->
        
        <!--BEGIN THE COLLAPSED -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <!-- BEGIN LEFT -->
            <?php require_once ( ABSPATH . '/wa-navbar-left.php' ); ?>
            <!-- END LEFT -->

            <!-- --
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <!-- -->

            <!-- BEGIN RIGHT -->
            <?php require_once ( ABSPATH . '/wa-navbar-right.php' ); ?>
            <!-- END RIGHT -->
            
        </div>
        <!-- -->
    </div>
    <!-- END CONTAINER -->
    
</nav>