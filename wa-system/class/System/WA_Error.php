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

namespace WA\System;

/**
 * Description of WA_Error
 *
 * @author wallaceosmar <wallace.osmar@hotmail.com>
 */
class WA_Error {
    
    /**
     *
     * @var array 
     */
    private $error_data;
    
    /**
     *
     * @var array 
     */
    private $errors;
    
    /**
     * Initialize the error.
     * 
     * @param string|int $code
     * @param string $message
     * @param mixed $data
     * 
     * @return void
     */
    public function __construct( $code = '', $message = '', $data = '' ) {
        if (empty($code)) {
            return;
        }

        $this->errors[$code][] = $message;
 
        if (!empty($data)) {
            $this->error_data[$code] = $data;
        }
    }
    
}
