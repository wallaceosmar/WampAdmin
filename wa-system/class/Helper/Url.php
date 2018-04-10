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

namespace WA\Helper;

/**
 * Description of Url
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class Url {
    
    /**
     * Url host
     * 
     * @var string 
     */
    public $host;
    
    /**
     * Url path
     * 
     * @var string 
     */
    public $path;
    
    /**
     * Url query
     * 
     * @var array 
     */
    public $query;
    
    /**
     * Url Scheme
     * 
     * @var string 
     */
    public $scheme;
    
    /**
     * 
     */
    public function __construct( $url, $force_to_ssl = false ) {
        if ( !is_array( $url ) ) {
            $url = parse_url($url);
        }
        
        $url = wa_parse_args( $url, array(
            'path' => $_SERVER['REQUEST_URI'],
            'scheme' => 'http',
            'host' => $_SERVER['SERVER_NAME'],
            'query' => $_GET
        ));
        
        $this->host = $url['host'];
        $this->path = $url['path'];
        $this->query = $this->_parse_query($url['query']);
        $this->scheme = $url['scheme'];
    }
    
    /**
     * Conver the class in string
     * 
     * @return string Description
     */
    public function __toString() {
        
    }
    
    /**
     * Parse the string query to an array
     * 
     * @param string $query
     * 
     * @return array
     */
    private function _parse_query( $query ) {
        $parsed = array();
        if ( !is_array( $query ) ) {
            foreach ( explode( '&', $query) as $key => $value ) {
                list( $q_key, $q_value ) = explode( '=', $value);
                $parsed[ $q_key ] = $q_value;
            }
        }
        return $parsed;
    }
    
    /**
     * 
     * @param string $name
     * @param mixed $default
     * 
     * @return mixed
     */
    public function getQuery( $name = null, $default = null ) {
        if ( null === $name ) {
            $default = $this->query;
        } elseif ( isset( $this->query[ $name ] ) ) {
            $default = $this->query[ $name ];
        }
        return $default;
    }
    
}
