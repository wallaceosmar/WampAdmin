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

// Header content response
header("Content-type: application/json; charset=utf-8");

define( 'SHORTINT', true );

/** Load WampAdmin Bootstrap */
require_once ( dirname ( __FILE__ ) . '/wa-system/wa-load.php' );

// Only these origins will be allowed to upload
$accepted_origins = get_option( 'upload_accepted_origins', array(
    'http://localhost', 'https://localhost'
));

/*! 
 * 
 */
if ( !empty( filter_input( INPUT_POST, 'path_dir' ) ) ) {
    $imageFolder = filter_input( INPUT_POST, 'path_dir' );
} else {
    $imageFolder = get_option( 'upload_path_dir', WA_CONTENT_DIR . '/content');
}

// Only these extension will be allowed to upload
$accepted_file_extension = get_option( 'upload_accepted_file_extension',
        array( 'gif', 'jpg', 'png', 'zip'));

reset ( $_FILES );
$temp = current( $_FILES );

if ( is_uploaded_file( $temp['tmp_name'] ) ) {
    if ( isset( $_SERVER['HTTP_ORIGIN'] ) ) {
        // same-origin requests won't set an origin. If the origin is set, it must be valid.
        if ( in_array( $_SERVER['HTTP_ORIGIN'], $accepted_origins ) ) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        } else {
            header( get_server_protocol() . " 403 Origin Denied", true, 403 );
            return;
        }
    }

    /*
      If your script needs to receive cookies, set images_upload_credentials : true in
      the configuration and enable the following two headers.
    */
    // header('Access-Control-Allow-Credentials: true');
    // header('P3P: CP="There is no P3P policy."');

    // Sanitize input
    if ( preg_match( "/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'] ) ) {
        header( get_server_protocol() . " 400 Invalid file name.", true, 400 );
        return;
    }

    // Verify extension
    if ( !in_array( strtolower( pathinfo( $temp['name'], PATHINFO_EXTENSION)), $accepted_file_extension ) ) {
        header( get_server_protocol() . " 400 Invalid extension.", true, 400 );
        return;
    }

    // Accept upload if there was no origin, or if it is an accepted origin
    $filetowrite = $imageFolder . $temp['name'];
    move_uploaded_file($temp['tmp_name'], $filetowrite);

    // Respond to the successful upload with JSON.
    // Use a location key to specify the path to the saved image resource.
    // { location : '/your/uploaded/image/file'}
    header( get_server_protocol() . " 200 Server OK", true, 200);
    echo json_encode(array('location' => $filetowrite), JSON_PRETTY_PRINT);
} else {
    // Notify editor that the upload failed
    header( get_server_protocol() . " 403 Forbidden", true, 403);
    echo json_encode(array( 'message' => 'Forbidden' ), JSON_PRETTY_PRINT);
}
