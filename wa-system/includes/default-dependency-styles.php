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

/* @var $styles WA\Template\Styles */
// Need
$styles->add( 'need', null, array( 'style' ) );
    
// WampAdmin default style
$styles->add( 'style', 'wa-content/css/style.css', array(
    'bootstrap', 'fontawesome', 'ionicons', 'technology-icons',
    'datatables', 'select2' ));

// Bootstrap
$styles->add( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');

// FontAwesome
$styles->add( 'fontawesome', 'https://use.fontawesome.com/releases/v5.0.9/css/all.css');

// Ionicons
$styles->add( 'ionicons', 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');

// DataTable
$styles->add( 'datatables', 'https://cdn.datatables.net/v/bs4/dt-1.10.16/datatables.min.css', array( 'bootstrap' ));
    
// Select2
$styles->add( 'select2', 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css' );

// Technology Icons
$styles->add( 'technology-icons', 'wa-content/libs/technology-icons/css/technology-icons.min.css' );