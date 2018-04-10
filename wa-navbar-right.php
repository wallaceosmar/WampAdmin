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
<ul class="navbar-nav ml-auto">
    
    <!-- BEGIN SETTINGS  -->
    <li class="nav-item <?php echo ( 'settings.php' == $pagenow ? 'active ' : '');?>dropdown">
        <a class="nav-link" href="<?php echo base_url('settings.php');?>" title="<?php _e('Settings')?>">
            <i class="fas fa-cogs"></i>
        </a>
    </li>
    <!-- END SETTINGS -->
    
    <!-- <?php if( false ):?>  -->
    <li class="nav-item dropdown language">
        <a class="nav-link dropdown-toggle" href="#" id="navbarProjectDropdown" 
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img alt="" src="wa-content/img/flags/en.png">
            <span class="hidden-1200">English</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarProjectDropdown">
            <a class="dropdown-item" href="#"><img src="wa-content/img/flags/pt_BR.png" alt=""> PT (BR)</a>
        </div>
    </li>
    <!-- <?php endif;?> -->
                
    <!-- <?php if( false ):?> -->
    <li class="nav-item dropdown user" style="height:42px;">
        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" style="height:29px;">
            <img class="user-avatar" title="avatar" src="<?php echo base_url('wa-content/img/user.png');?>">
            <span class="user-name">Example</span>
        </a>
        <div class="dropdown-menu">
            <a class="dropdown-item" href="#"><i class="fas fa-user"></i> <?php _e('Profile');?></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"><i class="icon-key"></i> <?php _e('Log Out');?></a>
        </div>
    </li>
    <!-- <?php endif;?> -->
    
</ul>