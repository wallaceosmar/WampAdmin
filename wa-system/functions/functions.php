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
 * From php.net (modified by Mark Jaquith to behave like the native PHP5 function).
 * 
 * @see https://secure.php.net/manual/en/function.http-build-query.php
 *
 * @param array|object  $data       An array or object of data. Converted to array.
 * @param string        $prefix     Optional. Numeric index. If set, start parameter numbering with it.
 *                                  Default null.
 * @param string        $sep        Optional. Argument separator; defaults to 'arg_separator.output'.
 *                                  Default null.
 * @param string        $key        Optional. Used to prefix key name. Default empty.
 * @param bool          $urlencode  Optional. Whether to use urlencode() in the result. Default true.
 *
 * @return string The query string.
 */
function _http_build_query( $data, $prefix = null, $sep = null, $key = '', $urlencode = true ) {
    $ret = array();

    foreach ( (array) $data as $k => $v ) {
        if ($urlencode) {
            $k = urlencode($k);
        }
        if (is_int($k) && $prefix != null) {
            $k = $prefix . $k;
        }
        if (!empty($key)) {
            $k = $key . '%5B' . $k . '%5D';
        }
        if ($v === null) {
            continue;
        } elseif ($v === false) {
            $v = '0';
        }

        if (is_array($v) || is_object($v)) {
            array_push($ret, _http_build_query($v, '', $sep, $k, $urlencode));
        } elseif ($urlencode) {
            array_push($ret, $k . '=' . urlencode($v));
        } else {
            array_push($ret, $k . '=' . $v);
        }
    }
    
    if (null === $sep) {
        $sep = ini_get('arg_separator.output');
    }
    
    return implode($sep, $ret);
}

/**
 * 
 * @return type
 */
function add_query_arg() {
    $args = func_get_args();
    if ( is_array( $args[0] ) ) {
        if (count($args) < 2 || false === $args[1]) {
            $uri = $_SERVER['REQUEST_URI'];
        } else {
            $uri = $args[1];
        }
    } else {
        if (count($args) < 3 || false === $args[2]) {
            $uri = $_SERVER['REQUEST_URI'];
        } else {
            $uri = $args[2];
        }
    }

    if ($frag = strstr($uri, '#')) {
        $uri = substr($uri, 0, -strlen($frag));
    } else {
        $frag = '';
    }

    if ( 0 === stripos( $uri, 'http://' ) ) {
        $protocol = 'http://';
        $uri = substr( $uri, 7 );
    } elseif ( 0 === stripos( $uri, 'https://' ) ) {
        $protocol = 'https://';
        $uri = substr( $uri, 8 );
    } else {
        $protocol = '';
    }
    
    if ( strpos( $uri, '?' ) !== false ) {
        list( $base, $query ) = explode( '?', $uri, 2 );
        $base .= '?';
    } elseif ( $protocol || strpos( $uri, '=' ) === false ) {
        $base = $uri . '?';
        $query = '';
    } else {
        $base = '';
        $query = $uri;
    }

    wa_parse_str( $query, $qs );
    if ( is_array( $args[0] ) ) {
        foreach ( $args[0] as $k => $v ) {
            $qs[ $k ] = $v;
        }
    } else {
        $qs[ $args[0] ] = $args[1];
    }

    foreach ( $qs as $k => $v ) {
        if ($v === false) {
            unset($qs[$k]);
        }
    }

    $ret = build_query( $qs );
    $ret = trim( $ret, '?' );
    $ret = preg_replace( '#=(&|$)#', '$1', $ret );
    $ret = $protocol . $base . $ret . $frag;
    $ret = rtrim( $ret, '?' );
    return $ret;
}

/**
 * 
 * @param type $data
 * @return type
 */
function build_query( $data ) {
    return _http_build_query( $data, null, '&', '', false );
}

/**
 * 
 * @param type $file
 * @param type $default_headers
 * @param type $context
 * 
 * @return string
 */
function get_file_data( $file, $default_headers, $context = '' ) {
    // We don't need to write to the file, so just open for reading.
    $fp = fopen( $file, 'r' );
 
    // Pull only the first 8kiB of the file in.
    $file_data = fread( $fp, 8192 );
 
    // PHP will close file handle, but we are good citizens.
    fclose( $fp );
 
    // Make sure we catch CR-only line endings.
    $file_data = str_replace( "\r", "\n", $file_data );
    $all_headers = $default_headers;
 
    foreach ( $all_headers as $field => $regex ) {
        if (preg_match('/^[ \t\/*#@]*' . preg_quote($regex, '/') . ':(.*)$/mi', $file_data, $match) && $match[1]) {
            $all_headers[$field] = trim(preg_replace("/\s*(?:\*\/|\?>).*/", '', $match[1]));
        } else {
            $all_headers[$field] = '';
        }
    }
 
    return $all_headers;
}

/**
 * Tests if an input is valid PHP serialized string.
 *
 * Checks if a string is serialized using quick string manipulation
 * to throw out obviously incorrect strings. Unserialize is then run
 * on the string to perform the final verification.
 *
 * Valid serialized forms are the following:
 * <ul>
 * <li>boolean: <code>b:1;</code></li>
 * <li>integer: <code>i:1;</code></li>
 * <li>double: <code>d:0.2;</code></li>
 * <li>string: <code>s:4:"test";</code></li>
 * <li>array: <code>a:3:{i:0;i:1;i:1;i:2;i:2;i:3;}</code></li>
 * <li>object: <code>O:8:"stdClass":0:{}</code></li>
 * <li>null: <code>N;</code></li>
 * </ul>
 *
 * @author		Chris Smith <code+php@chris.cs278.org>
 * @copyright	Copyright (c) 2009 Chris Smith (http://www.cs278.org/)
 * @license		http://sam.zoy.org/wtfpl/ WTFPL
 * @param		string	$value	Value to test for serialized form
 * @param		mixed	$result	Result of unserialize() of the $value
 * @return		boolean			True if $value is serialized data, otherwise false
 */
function is_serialized($value, &$result = null)
{
	// Bit of a give away this one
	if (!is_string($value))
	{
		return false;
	}
	// Serialized false, return true. unserialize() returns false on an
	// invalid string or it could return false if the string is serialized
	// false, eliminate that possibility.
	if ($value === 'b:0;')
	{
		$result = false;
		return true;
	}
	$length	= strlen($value);
	$end	= '';
	switch ($value[0])
	{
		case 's':
			if ($value[$length - 2] !== '"')
			{
				return false;
			}
		case 'b':
		case 'i':
		case 'd':
			// This looks odd but it is quicker than isset()ing
			$end .= ';';
		case 'a':
		case 'O':
			$end .= '}';
			if ($value[1] !== ':')
			{
				return false;
			}
			switch ($value[2])
			{
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:
				break;
				default:
					return false;
			}
		case 'N':
			$end .= ';';
			if ($value[$length - 1] !== $end[0])
			{
				return false;
			}
		break;
		default:
			return false;
	}
	if (($result = @unserialize($value)) === false)
	{
		$result = null;
		return false;
	}
	return true;
}

/**
 * Determines if SSL is used.
 * 
 * @return boolean
 */
function is_ssl() {
    if ( isset( $_SERVER['HTTPS'] ) ) {
        if ( 'on' == strtolower( $_SERVER['HTTPS'] ) ) {
            return true;
        }
 
        if ( '1' == $_SERVER['HTTPS'] ) {
            return true;
        }
    } elseif ( isset($_SERVER['SERVER_PORT'] ) && ( '443' == $_SERVER['SERVER_PORT'] ) ) {
        return true;
    }
    return false;
}

/**
 * Serialize data, if needed.
 * 
 * @param string|array|object Data that might be serialized.
 * 
 * @return mixed A scalar data
 */
function maybe_serialize( $data ) {
    
    if (is_array($data) || is_object($data)) {
        return serialize($data);
    }

    if (is_serialized($data)) {
        return serialize($data);
    }

    return $data;
}

/**
 * Unserialize value only if it was serialized.
 * 
 * @param string $original Maybe unserialized original, if is needed.
 * 
 * @return mixed Unserialized data can be any type.
 */
function maybe_unserialize( $original ) {
    if ( is_serialized( $original ) ) // don't attempt to unserialize data that wasn't serialized going in
        return @unserialize( $original );
    return $original;
}

/**
 * 
 * @param string $file
 * @param array $allowed_files
 * 
 * @return int
 */
function validate_file( $file, $allowed_files = array() ) {
    // `../` on its own is not allowed:
    if ( '../' === $file ) {
        return 1;
    }
    
    return 0;
}


/**
 * Call a function if exists.
 * 
 * @param string $callback 
 * 
 * @return mixed
 */
function sec_call_func() {
    if ( func_num_args() < 1 ) {
        trigger_error( __('Need to parse a paramter'), E_USER_ERROR );
        return;
    } 
    // Get all the paramters
    $param_arr = func_get_args();
    $callback = array_shift($param_arr);
    // Verify if the function exists
    if ( !function_exists( $callback ) ) {
        trigger_error( sprintf( __('The function <code>%s</code> does`t exists.'), $callback ), E_NOTICE );
        return;
    }
    return call_user_func_array( $callback, $param_arr);
}

/**
 * Guess the URL for the site.
 * 
 * @return string The guessed URL.
 */
function wa_guess_url() {
    if ( defined( 'WA_SITE_URL' ) ) {
        $url = WA_SITE_URL;
    } else {
        $abspath_fix = str_replace( '\\', '/', ABSPATH );
        $script_filename_dir = dirname( $_SERVER['SCRIPT_FILENAME'] );
        if ( $script_filename_dir . '/' == $abspath_fix ) {
            // Strip off any file/query params in the path
            $path = preg_replace( '#/[^/]*$#i', '', $_SERVER['PHP_SELF'] );
 
        } else {
            
            if ( false !== strpos( $_SERVER['SCRIPT_FILENAME'], $abspath_fix ) ) {
                // Request is hitting a file inside ABSPATH
                $directory = str_replace( ABSPATH, '', $script_filename_dir );
                // Strip off the sub directory, and any file/query params
                $path = preg_replace( '#/' . preg_quote( $directory, '#' ) . '/[^/]*$#i', '' , $_SERVER['REQUEST_URI'] );
            } elseif ( false !== strpos( $abspath_fix, $script_filename_dir ) ) {
                // Request is hitting a file above ABSPATH
                $subdirectory = substr( $abspath_fix, strpos( $abspath_fix, $script_filename_dir ) + strlen( $script_filename_dir ) );
                // Strip off any file/query params from the path, appending the sub directory to the installation
                $path = preg_replace( '#/[^/]*$#i', '' , $_SERVER['REQUEST_URI'] ) . $subdirectory;
            } else {
                $path = $_SERVER['REQUEST_URI'];
            }
            
        }
        
        $schema = is_ssl() ? 'https://' : 'http://'; // set_url_scheme() is not defined yet
        $url = $schema . $_SERVER['HTTP_HOST'] . $path;
    }
    return $url;
}

function wa_normalize_path( $path ) {
    $path = str_replace( '\\', '/', $path );
    $path = preg_replace( '|(?<=.)/+|', '/', $path );
    if ( ':' === substr( $path, 1, 1 ) ) {
        $path = ucfirst( $path );
    }
    return $path;
}

/**
 * 
 * @param mixed $args
 * @param array $defaults
 * 
 * @return array
 */
function wa_parse_args( $args, $defaults = '' ) {
    if ( is_object( $args ) ) {
        $r = get_object_vars( $args );
    } elseif ( is_array( $args ) ) {
        $r = & $args;
    } else {
        wa_parse_str( $args, $r );
    }

    if ( is_array( $defaults ) ) {
        return array_merge( $defaults, $r );
    }
    
    return $r;
}

/**
 * 
 * @param int $total
 * @param int $value
 * 
 * @return float
 */
function wa_calc_percent( $total, $value ) {
    return number_format( ( $value * 100 ) / $total, 2);
}
