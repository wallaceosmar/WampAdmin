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
 * 
 * 
 * @global array $wa_settings_options
 */
function _default_settings_options() {
    global $wa_settings_options;
    
    if ( !isset( $wa_settings_options ) ) {
        $wa_settings_options = array();
    }
    
    // Include the default settings
    $handle_include = include ( ABSPATH . WASYSINC . '/default-wampadmin-settings.php' );
    // Handle if the file return the configuration
    if ( !empty( $handle_include ) ) {
        $wa_settings_options = wa_parse_args($handle_include, $wa_settings_options);
    }
}

/**
 * 
 * 
 * @global array $wa_settings_options
 * 
 * @return array
 */
function get_settings_options () {
    global $wa_settings_options;
    
    if ( ! isset( $wa_settings_options ) ) {
        _default_settings_options();
    }
    
    return $wa_settings_options;
}

/**
 * 
 * @global array $wa_settings_options
 * 
 * @param string $slugname
 * @param string $title
 * @param string $form_type
 * @param array $attr
 * @param string|array $values
 * @param string $description
 * 
 * @return false;
 */
function register_wampadmin_setting( $slugname, $title, $attr = array(), $values = '', $form_type = 'input', $description = '' ) {
    global $wa_settings_options;
    
    $slugname = trim( $slugname );
    if ( empty( $slugname ) ) {
        return false;
    }
    
    if ( in_array( $form_type, array( 'input', 'select', 'textarea' )) ) {
        $form_type = 'input';
    }
    
    if ( !empty( $values ) ) {
        $attr = wa_parse_args( array(
            'value' => $values
        ), $attr );
    }
    
    if ( !isset( $attr['placeholder'] ) ) {
        $attr['placeholder'] = $title;
    }
    
    $new_settings = array(
        'name' => $title,
        'form' => $form_type,
        'attr' => $attr,
        'description' => $description
    );
    
    $wa_settings_options[ $slugname ] = $new_settings;
}

/**
 * 
 * 
 * @global array $wa_settings_options
 * 
 * @param string $slugname
 * 
 * @return bool
 */
function unregister_wampadmin_settings( $slugname ) {
    global $wa_settings_options, $unregistered_settings_options;
    
    unset( $wa_settings_options[ $slugname ] );
    $unregistered_settings_options[] = $unregistered_settings_options;
    
    /**
     * 
     */
    return delete_option( $slugname );
}

