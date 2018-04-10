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
 * Removes option by name. Prevents removal of protected WampAdmin options.
 * 
 * @global \WA\System\WA_Options $wa_options
 * 
 * @param string $option Name of option to remove.
 * 
 * @return boolean True, if option is successfully deleted. False on failure.
 */
function delete_option ( $option ) {
    global $wa_options;
    
    $option = trim( $option );
    if ( empty( $option ) ) {
        return false;
    }
    
    wa_protect_special_option($option);
    
    // Verify if the value exists
    if ( !$wa_options->has( $option ) ) {
        return false;
    }
    
    /**
     * Fires before an option is deleted
     */
    do_action( 'delete_option', $option );
    
    $result = $wa_options->del( $option );
    if ( $result ) {
        
        /**
         * Fires after a specific option has been deleted.
         */
        do_action( "deleted_option_{$option}", $option);
        
        /**
         * Fires after an option has been deleted.
         */
        do_action( 'deleted_option', $option);
        
        return true;
    }
    
    return false;
}

/**
 * Retrieves an option value based on an option name.
 * 
 * @global \WA\System\WA_Options $wa_options
 * 
 * @param string $option Name of option to retrieve.
 * @param mixed $default Default value to return if the option does not exist.
 * 
 * @return boolean
 */
function get_option( $option, $default = false ) {
    global $wa_options;
    
    /**
     * Filter the options
     */
    return apply_filters( "get_option_{$option}", $wa_options->get($option, $default), $option);
}


/**
 * 
 * 
 * @global \WA\System\WA_Options $wa_options
 * 
 * @param string $option
 * 
 * @return bool
 */
function has_option( $option ) {
    global $wa_options;
    
    return $wa_options->has( $option );
}

/**
 * Update the value of an option that was already added.
 * 
 * @global \WA\System\WA_Options $wa_options
 * 
 * @param string $option Option name.
 * @param mixed $value Option value. Must be serializable if non-scalar.
 * 
 * @return bool False if value was not updated and true if value was updated.
 */
function update_option( $option, $value ) {
    global $wa_options;
    
    $option = trim($option);
    if ( empty( $option ) ) {
        return false;
    }
    
    if ( is_object($value) ) {
        $value = clone $value;
    }

    // Verify if is a protected option
    wa_protect_special_option($option);
    
    // Get the olders configs
    $older_options = $wa_options->get( $option );
    
    /**
     * 
     * @param bool $update Description
     * @param string $option Description
     * @param mixed $older_value Description
     */
    return apply_filters( "update_option_{$option}", $wa_options->update($option, $value), $option, $older_options);
}

/**
 * Protect WampAdmin special option from being modified.
 * 
 * @param string $option Option name.
 */
function wa_protect_special_option( $option ) {
    if ( '' === $option || 'notoptions' === $option ) {
        die( '' );
    }
}