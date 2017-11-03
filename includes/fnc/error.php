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

/**
 * 
 * @global array $_error_alert
 */
function _mount_alert_() {
    global $_error_alert;
    
    if ( !isset( $_error_alert ) && empty( $_error_alert ) ) {
        return;
    }
    
    echo "<div class='row'><div class='col-12'>";
    foreach ( $_error_alert as $type => $typeitem ) {
        $class = array( 'alert' );
        
        switch ( $type ) {
            default :
                $class[] = 'alert-secondary';
        }
        
        $class = $class ? ' class="' . join( ' ', $class ) . '"' : '';
        echo "<div{$class}>";
        foreach ( $typeitem as $error ) {
            echo $error['message'];
        }
        echo '</div>';
    }
    echo '</div></div>';
}

/**
 * 
 * @global array() $_error_alert
 * 
 * @param type $type
 * @param type $message
 * @param type $title
 */
function add_message_alert( $type, $message, $title = '') {
    global $_error_alert;
    
    if ( !isset( $_error_alert ) ) {
        $_error_alert = array();
    }
    
    if ( !isset( $_error_alert[ $type ] ) ) {
        $_error_alert[ $type ] = array();
    }
    
    array_push($_error_alert[ $type ], array(
        'message' => $message,
        'title' => $title
    ));
}