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

/** Load WampAdmin Bootstrap */
require_once ( dirname ( __FILE__ ) . '/admin.php' );

$action = filter_input( INPUT_GET, 'action' );
if ( isset( $_POST['plugins'] ) ) {
    $plugin = filter_input( INPUT_POST, 'plugins');
} elseif( $_GET['plugins'] ) {
    $plugin = filter_input( INPUT_GET, 'plugins');
} else {
    $plugin = null;
}

switch ( $action ) {
case 'activate':
    $result = activate_plugin($plugin);
    if ( is_wa_error( $result ) ) {
        http_response_code(404);
        break;
    }
    http_response_code(200);
    break;
case 'deactivate':
    $result = deactivate_plugins( $plugin, false );
    if ( !$result ) {
        http_response_code(404);
        break;
    }
    http_response_code(200);
    break;
default:
    /**
     * 
     */
    wa_redirect( base_url( '/plugin.php' ) );
}
exit;