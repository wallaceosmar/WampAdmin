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
 * Description of Menus
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class Menus implements \ArrayAccess, \IteratorAggregate, \Countable {
    
    /**
     * 
     * @var array 
     */
    private $items = array();
    
    /**
     * 
     */
    public function count() {
        count( $this->items );
    }
    
    /**
     * 
     * @return \ArrayIterator
     */
    public function getIterator() {
        return new \ArrayIterator( $this->items );
    }
    
    /**
     * 
     * @param string $offset
     * 
     * @return mixed
     */
    public function offsetExists($offset) {
        return isset( $this->items );
    }
    
    /**
     * 
     * @param string $offset
     * 
     * @return mixed
     */
    public function offsetGet($offset) {
        return $this->items[ $offset ];
    }
    
    /**
     * 
     * @param string $offset
     * @param mixed $value
     */
    public function offsetSet($offset, $value) {
        $this->items[ $offset ] = $value;
    }
    
    /**
     * 
     * @param type $offset
     */
    public function offsetUnset($offset) {
        unset( $this->items[ $offset ] );
    }

}
