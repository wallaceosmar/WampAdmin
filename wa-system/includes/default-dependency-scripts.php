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

// 
/* @var $scripts \WA\Template\Scripts */
$scripts->add( 'need', false, array( 'bootstrap', 'wampadmin' ));
    
// WampAdmin
$scripts->add( 'wampadmin', 'wa-content/js/wampadmin.js', array( 'select2', 'datatable' ));
    
// Bootstrap
$scripts->add( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js', array( 'jQuery', 'popper' ), '4.0.0');
$scripts->add( 'jQuery', 'https://code.jquery.com/jquery-3.2.1.min.js' );
$scripts->add( 'popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
    
// DataTable
$scripts->add( 'datatable', 'https://cdn.datatables.net/v/bs4/dt-1.10.16/datatables.min.js', array( 'jQuery' ));
    
// Select2
$scripts->add( 'select2', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js', array( 'jQuery' ));