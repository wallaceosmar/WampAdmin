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

namespace WA\System;

/**
 * Handle all file manipulation of the WampAdmin
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class WA_DataHandler {
    
    /**
     * Prepares filename and content for saving
     * 
     * @param string $filename Filename to save to
     * @param string $content Content to save to cache
     */
    public function save($filename, $content) {
        if( !$this->put( $filename, $content) ) {
            trigger_error(get_class($this) . " error: Couldn't write to $file", E_USER_WARNING);
            return false;
        }

        return true;
    }

    /**
     * Saves data to file
     * 
     * @param string $file Filename to save to
     * @param string $data Data to save into $file
     */
    protected function put( $file, $data, $mode = false ) {
        if( file_exists( $file ) && ( file_get_contents( $file ) === $data) ) {
            touch($file);
            return true;
        }
        if( ! $fp = @fopen($file, 'wb' )) {
            return false;
        }
        
        fwrite( $fp, $data);
        fclose( $fp);
        
        $this->chmod( $file, $mode);
        return true;

    }

    /**
     * Change the file permissions
     * 
     * @param string $file Absolute path to file
     * @param integer $mode Octal mode
     */
    protected function chmod($file, $mode = false){
        if (!$mode) {
            $mode = 0755;
        }
        
        return @chmod( $file, $mode);
    }

    /**
     * Returns the content of the cached file if it is still valid
     * 
     * @param string $id Unique ID for content type, used to distinguish between different caches
     * @return null|string Content of the cached file if valid, otherwise null
     */
    public function load($filename) {
        return $this->get( $filename );
    }

    /**
     * Returns the content of the file
     * 
     * @param string $id Filename to load data from
     * @return bool|string Content of the file if valid, otherwise null
     */
    protected function get ( $filename ) {
        if (!$this->check( $filename ) ) {
            return null;
        }

        return file_get_contents( $filename );
    }

    /**
     * Check a file for validity
     * 
     * @param string $id Unique ID for content type, used to distinguish between different caches
     * @return bool False if the cache doesn't exist or is invalid, otherwise true
     */
    protected function check( $filename ){
        return file_exists( $filename );
    }

    /**
     * Delete a file
     *
     * @param string $filename Unique ID
     * 
     * @return bool
     */
    public function delete( $filename ) {
        return unlink( $filename );
    }
    
}
