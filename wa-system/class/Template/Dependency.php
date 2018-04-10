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

namespace WA\Template;

/**
 * Description of Dependency
 *
 * @author Avell G1511 MAX
 */
class Dependency {
    
    public $args = null;
    
    public $deps = array();
    
    public $extra = array();
    
    public $handle;
    
    public $src;
    
    public $ver = false;
    
    /**
     * 
     */
    public function __construct() {
        @list( $this->handle, $this->src, $this->deps, $this->ver, $this->args ) = func_get_args();
        if ( ! is_array($this->deps) ) {
            $this->deps = array();
        }
    }
    
    /**
     * Add handle data.
     * 
     * @param string $name
     * @param type $data
     * 
     * @return boolean
     */
    public function add_data( $name, $data ) {
        if ( !is_scalar( $name ) ) {
            return FALSE;
        }
        $this->extra[ $name ] = $data;
        return true;
    }
    
}
