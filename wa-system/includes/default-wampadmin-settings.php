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

/*
    'file name' => array(
        'example_input' => array(
            'name' => __('Input example'),
            'form' => 'input|select|textarea'
            'attr' => array( 
                'placeholder' => __('Input example'),
                'name' => 'not acepted',
                'value' => 'acepted'
            ),
            'description' => __('This is a example')
        )
    )
*/

return array(
    
    'settings.php' => array(
        
        // Project default path
        'default_project_dir' => array(
            'name' => __('Project Path'),
            'attr' => array(
                'placeholder' => __('Project Path'),
            ),
            'default_value' => WA_PROJECT_ROOT,
            'description' => __('WampAdmin default project path')
        ),

        // Default project name
        'wamp_admin_project_filename' => array(
            'name' => __('Project Filename'),
            'attr' => array(
                'placeholder' => __('Filename')
            ),
            'default_value' => 'wampadmin.conf',
            'description' => __('WampAdmin default project config filename')
        ),
        
    ),
    
    'ajax-upload.php' => array(
        
        // Upload 
        'upload_path_dir' => array(
            'name' => __( 'Upload path' ),
            'default_value' => WA_CONTENT_DIR . '/upload',
            'description' => __( 'Upload directory' )
        ),
        
        // Upload accepted origin
        'upload_accepted_origins' => array(
            'name' => __('Upload Accepted Origin'),
            'form' => 'input:checbox',
            'attr' => array(
                'value' => array(
                    'http://localhost' => 'http://localhost',
                    'https://localhost' => 'https://localhost',
                    'http://127.0.0.1' => 'http://127.0.0.1',
                    'https://127.0.0.1' => 'https://127.0.0.1',
                )
            ),
            'default_value' => array(),
            'description' => __('WampAdmin upload accepted origin')
        ),
        
        // Upload accept file extension
        'upload_accepted_file_extension' => array(
            'name' => __('Upload accepted file extension'),
            'form' => 'input:checbox',
            'attr' => array(
                'value' => array(
                    'png' => '.png',
                    'jpg' => '.jpg',
                    'gif' => '.gif',
                    'zip' => '.zip',
                )
            ),
            'default_value' => array(),
            'description' => __('WampAdmin upload accepted file extension')
        )
    )
    
);