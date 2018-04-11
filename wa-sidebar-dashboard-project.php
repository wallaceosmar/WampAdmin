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

/**
 * 
 * @global string $parent_file
 * @global string $submenu_file
 * @global array $dashboard_menu
 * @global \WA\Project\Project $wa_project
 */
/* @var $wa_project \WA\Project\Project */
global $parent_file, $submenu_file, $dashboard_sidebar_menus, $wa_project;

?>
    <div class="text-center" style="margin-top:25px;">
        <a class="text-center" href="<?php echo base_url('index.php');?>">
            <img src="wa-content/img/wamp.png" alt="logo" style="width:160px;">
        </a>
    </div>
    <div class="portlet project-dashboard-information">
        <ul class="unstyled">
            <li class="text-center">
                <span title="<?php echo $wa_project->project_folder;?>">
<?php

// Virtual host
$virtualhost = $wa_project->project_folder;
if ( !empty( $wa_project->virtualhosts ) ) {
    $virtualhost = $wa_project->virtualhosts[0];
}

?>
                    <a target="_blank" href="//<?php echo $virtualhost;?>"><?php echo $virtualhost;?> <i class="fas fa-external-link-alt"></i></a>
                </span>
            </li>
<?php foreach( (array) $dashboard_sidebar_menus as $dashboard_item ):?>
            <li>
                <span class="project-info"><?php echo $dashboard_item[0];?></span>
                <span class="project-num" title="<?php echo $dashboard_item[1];?>">
                    <?php
                    if ( !empty( $dashboard_item[3] ) ) {
                        echo "<a href='{$dashboard_item[3]}'>" . $dashboard_item[1]
                                . ( !empty( $dashboard_item[3] )? ' <i class="' . $dashboard_item[3] .'"></i>': '' )
                                . '</a>';
                    } else {
                        echo $dashboard_item[1] . ( !empty( $dashboard_item[3] )? ' <i class="' . $dashboard_item[3] .'"></i>': '' );
                    }
                    ?>
                </span>
                <?php if( !empty( $dashboard_item[2] ) ):?>
                <br />
                <div class="progress">
                    <div style="width: <?php echo (int) $dashboard_item[2];?>%;" class="progress-bar progress-bar-striped <?php echo join( ' ', $dashboard_item[4] )?>"></div>
                </div>
                <?php endif;?>
            </li>
<?php endforeach;?>
        </ul>
    </div>