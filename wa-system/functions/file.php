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

use WA\System\WA_DataHandler;

/**
 * Get the data for the file
 * 
 * @global WA_DataHandler $wa_file_handler
 * 
 * @param string $filename
 * 
 * @return mixed
 */
function get_datafile( $filename ) {
    global $wa_file_handler;
    
    return maybe_unserialize(
            $wa_file_handler->load($filename));
}

/**
 * Save the content in a file
 * 
 * @global WA_DataHandler $wa_file_handler
 * 
 * @param string $filename
 * @param mixed $content
 */
function set_datafile( $filename, $content ) {
    global $wa_file_handler;
    
    $wa_file_handler->save($filename,
            maybe_serialize($content));
}

/**
 * Delete the file
 * 
 * @global WA_DataHandler $wa_file_handler
 * 
 * @param string $filename
 * 
 * @return bool
 */
function del_datafile( $filename ) {
    global $wa_file_handler;
    
    return $wa_file_handler->delete($filename);
}
