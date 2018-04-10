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
 * Description of Dependencies
 *
 * @author Avell G1511 MAX
 */
class Dependencies
{
    
    /**
     *
     * @var array 
     */
    public $done = array();
    
    /**
     *
     * @var array 
     */
    public $groups = array();
    
    /**
     *
     * @var array 
     */
    public $queue = array();
    
    /**
     * An array of registered handle objects.
     * 
     * @var array 
     */
    public $registered = array();
    
    /**
     *
     * @var array 
     */
    public $to_do = array();
    
    /**
     * Register an item.
     * 
     * @param type $handle
     * @param type $src
     * @param type $deps
     * @param type $ver
     * @param type $args
     * 
     * @return boolean Whether the item has been registered. True on success, false on failure.
     */
    public function add($handle, $src, $deps = array(), $ver = false, $args = null) {
        if (isset($this->registered[$handle])) {
            return false;
        }
        $this->registered[$handle] = new Dependency($handle, $src, $deps, $ver, $args);
        return true;
    }
    
    /**
     * Add extra item data.
     * 
     * @param string $handle Name of the item. Should be unique.
     * @param string $key The data key.
     * @param mixed $value The data value.
     * 
     * @return boolean True on success, false on failure.
     */
    public function add_data( $handle, $key, $value ) {
        if (!isset($this->registered[$handle])) {
            return false;
        }

        return $this->registered[$handle]->add_data( $key, $value );
    }
    
    /**
     * 
     * @param mixed $handles
     * 
     * @return array|bool
     */
    public function all_deps($handles, $recursion = false, $group = false) {
        if (!$handles = (array) $handles) {
            return false;
        }

        foreach ($handles as $handle) {
            $handle_parts = explode('?', $handle);
            $handle       = $handle_parts[0];
            $queued       = in_array($handle, $this->to_do, true);
            
            if (in_array($handle, $this->done, true)) { // Already done
                continue;
            }

            $moved     = $this->set_group($handle, $recursion, $group);
            $new_group = $this->groups[$handle];
            
            if ($queued && !$moved) { // already queued and in the right group
                continue;
            }

            $keep_going = true;
            if (!isset($this->registered[$handle])) {
                $keep_going = false;
            } // Item doesn't exist.
            elseif ($this->registered[$handle]->deps && array_diff($this->registered[$handle]->deps, array_keys($this->registered))) {
                $keep_going = false;
            } // Item requires dependencies that don't exist.
            elseif ($this->registered[$handle]->deps && !$this->all_deps($this->registered[$handle]->deps, true, $new_group)) {
                $keep_going = false;
            } // Item requires dependencies that don't exist.
            
            if (!$keep_going) { // Either item or its dependencies don't exist.
                if ($recursion) {
                    return false;
                } // Abort this branch.
                else {
                    continue;
                } // We're at the top level. Move on to the next one.
            }
            
            if ($queued) { // Already grabbed it and its dependencies.
                continue;
            }

            if (isset($handle_parts[1])) {
                $this->args[$handle] = $handle_parts[1];
            }

            $this->to_do[] = $handle;
        }
        
        return true;
    }
    
    /**
     * Processes the items and dependencies.
     * 
     * @param mixed $handles
     * @param mixed $group  Group level: level (int), no groups (false).
     * 
     * @return array Handles of items that have been processed.
     */
    public function do_items( $handles = false, $group = false ) {
	$handles = false === $handles ? $this->queue : (array) $handles;
	$this->all_deps( $handles );
        foreach ( $this->to_do as $key => $handle ) {
            if ( !in_array($handle, $this->done, true) && isset($this->registered[$handle]) ) {
                /*
                 * Attempt to process the item. If successful,
                 * add the handle to the done array.
                 *
		 * Unset the item from the to_do array.
		 */
                if ($this->do_item($handle, $group)) {
                    $this->done[] = $handle;
                }

                unset( $this->to_do[$key] );
            }
        }
        return $this->done;
    }
    
    /**
     * Processes a dependency.
     * 
     * @param string $handle Name of the item. Should be unique.
     * 
     * @return bool True on success, false if not set.
     */
    public function do_item($handle) {
        return isset($this->registered[$handle]);
    }
    
    /**
     * Queue an item or items.
     * 
     * @param mixed $handles
     */
    public function enqueue($handles) {
        foreach ((array) $handles as $handle) {
            $handle = explode('?', $handle);
            if (!in_array($handle[0], $this->queue) && isset($this->registered[$handle[0]])) {
                $this->queue[] = $handle[0];
                if (isset($handle[1])) {
                    $this->args[$handle[0]] = $handle[1];
                }
            }
        }
    }
    
    /**
     * 
     * @param string $handle
     * @param string $key
     * 
     * @return mixed
     */
    public function get_data($handle, $key) {
        if (!isset($this->registered[$handle])) {
            return false;
        }
        
        if (!isset($this->registered[$handle]->extra[$key])) {
            return false;
        }
        
        return $this->registered[$handle]->extra[$key];
    }
    
    /**
     * 
     * @param type $handle
     * @param type $recursion
     * @param type $group
     * 
     * @return boolean
     */
    public function set_group($handle, $recursion, $group) {
        $group = (int) $group;
        if (isset($this->groups[$handle]) && $this->groups[$handle] <= $group) {
            return false;
        }
        $this->groups[$handle] = $group;
        return true;
    }
    
}
