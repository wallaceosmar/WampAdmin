<?php

/**
 * @link https://forums.phpfreaks.com/topic/154542-how-to-create-a-plugin-system/
 */

//------------------- Filters -------------------------------------

/**
 * 
 * @global type $filter_table
 * 
 * @param type $tag
 * @param type $function_to_add
 * @param type $priority
 * @param type $accept_args
 * 
 * @return boolean
 */
function add_filter($tag, $function_to_add, $priority = 10, $accept_args = 1 ) {
    global $filter_table;
    
    if ( isset($filter_table[$tag][$priority]) ) {
        foreach($filter_table[$tag][$priority] as $filter) {
            if ( $filter['function'] == $function_to_add ) {
                return false;
            }
        }
    }
    
    $filter_table[$tag][$priority][] = array('function' => $function_to_add, 'accepted_args' => $accept_args);
    
    return true;	
}

/**
 * 
 * @global type $filter_table
 * 
 * @param type $tag
 * @param type $function_to_remove
 * @param type $priority
 * 
 * @return boolean
 */
function remove_filter($tag,  $function_to_remove, $priority = 10) {
    global $filter_table;
    
    $toret = false;
    
    if ( isset($filter_table[$tag][$priority]) ) {
        foreach($filter_table[$tag][$priority] as $filter) {
            if ( $filter['function'] != $function_to_remove ) {
                $new_function_list[] = $filter;
            } else {
                $toret = true;
            }
        }
        $filter_table[$tag][$priority] = $new_function_list;
    }
    
    return $toret;
}

//------------------- Actions -------------------------------------

/**
 * 
 * @global type $filter_table
 * 
 * @param type $tag
 * @param type $arg
 * 
 * @return type
 */
function do_action($tag, $arg = '') {
    global $filter_table;
    
    $args = array();
    if (is_array($arg) && 1 == count($arg) && isset($arg[0]) && is_object($arg[0])) { // array(&$this)
        $args[] = & $arg[0];
    } else {
        $args[] = $arg;
    }
    for ($a = 2; $a < func_num_args(); $a++) {
        $args[] = func_get_arg($a);
    }

    if ( !isset($filter_table[$tag]) ) {
        return;
    } else {
        ksort($filter_table[$tag]);
    }
    
    do {
        foreach( (array) current( $filter_table[$tag] ) as $the_ ) {
            if (!is_null($the_['function'])) {
                call_user_func_array($the_['function'], array_slice($args, 0, (int) $the_['accepted_args']));
            }
        }
    } while( next( $filter_table[ $tag ] ) !== false );
}

function has_action( $name ) {
    global $filter_table;
    
    return isset( $filter_table[$name] );
}

//------------------- Apply Filters -------------------------------------
/**
 * 
 * @global array $filter_table
 * 
 * @param string $tag
 * @param string $string
 * 
 * @return string
 */
function apply_filters($tag, $string) {
    global $filter_table;
    
    $args = array_slice(func_get_args(), 2);

    if ( !isset($filter_table[$tag]) ) {
        return $string;
    } else {
        ksort($filter_table[$tag]);
    }
    
    
    foreach ($filter_table[$tag] as $priority => $functions) {
        if ( !is_null($functions) ) {
            foreach($functions as $function) {
                
                $all_args = array_merge(array($string), $args);
                $func_name = $function['function'];
                $accept_args = $function['accepted_args'];
                
                if ($accept_args == 1) {
                    $the_args = array($string);
                } elseif ($accept_args > 1) {
                    $the_args = array_slice($all_args, 0, $accept_args);
                } elseif ($accept_args == 0) {
                    $the_args = NULL;
                } else {
                    $the_args = $all_args;
                }

                $string = call_user_func_array($func_name, $the_args);
            }
        }
    }
    
    return $string;
}

/**
 * Set the deactivation hook for a plugin.
 * 
 * @param string $file The filename of the plugin including the path.
 * @param string|callback $function The function hooked to the 'activate_PLUGIN' action.
 */
function register_deactivation_hook($file, $function) {
    $file = plugin_basename($file);
    add_action('deactivate_' . $file, $function);
}

/**
 * Set the activation hook for a plugin.
 * 
 * @param string $file The filename of the plugin including the path.
 * @param string|callback $function The function hooked to the 'activate_PLUGIN' action.
 */
function register_activation_hook($file, $function) {
    $file = plugin_basename($file);
    add_action('activate_' . $file, $function);
}