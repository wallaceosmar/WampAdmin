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
 * @global array $wa_dashbord_card
 */
function wa_dashboard() {
    global $wa_dashbord_card;
?>
<!-- BEGIN DASHBOARD -->
<div class="row">
    <!-- BEGIN DASHBOARD ITEM -->
    <div class="col-md-3">
        <div class="dashboard-stat blue">
            <a class="list dashstat" href="<?php echo base_url('/list-project.php');?>" title="Project">
                <div class="visual">
                    <i class="fas fa-h-square"></i>
                </div>
                <div class="details">
                    <div class="number">2</div>
                    <div class="desc">Hospedagem </div>
                </div>
            </a>
            <a class="more" href="<?php echo base_url('/new-project.php');?>">
                Nova hospedagem <i class="m-icon-swapright m-icon-white"></i>
            </a>
        </div>
    </div>
    <!-- END DASHBOARD ITEM -->
</div>
<!-- END DASHBOARD -->
<?php
}

/**
 * 
 * @global array $wa_dashbord_card
 */
function wa_dashboard_setup() {
    global $wa_dashbord_card;
}

