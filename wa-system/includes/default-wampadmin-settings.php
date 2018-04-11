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
            'description' => __('WampAdmin default project path')
        ),

        // Default project name
        'wamp_admin_project_filename' => array(
            'name' => __('Project Filename'),
            'attr' => array(
                'placeholder' => __('Filename')
            ),
            'description' => __('WampAdmin default project config filename')
        ),
    )
    
);