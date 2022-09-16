<?php

use Illuminate\Support\Facades\Route;

Route::get('/profile', 'UserController@index')->middleware('auth:user');
