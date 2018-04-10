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
 * @package WampAdmin
 */
if ( !defined( 'ABSPATH' ) ) {
    die('-1');
}

?>
        </div>
        <!-- END PAGE -->
        
        <!-- BEGIN FOOTER -->
        <div class="footer">
            <div class="footer-inner"><?php echo sprintf( __('© %s All rights reserved'), date( 'Y' ) );?></div>
            <div class="footer-tools">
                <span class="go-top">
                    <i class="icon-angle-up"></i>
                </span>
            </div>
        </div>
        <!-- END FOOTER -->
        
    </div>
    <!-- END CONTAINER -->
    
    <!-- BEGIN JAVASCRIPTS -->
<?php

/**
 * 
 */
do_action( 'wamp_footer', '' );

/**
 * Print the scripts
 */
do_action( 'wamp_print_footer_scripts' );

?>
    <!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>