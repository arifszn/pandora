<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// auth
Route::post('/signup', [AuthController::class, 'signup']);
