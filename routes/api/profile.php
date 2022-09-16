<?php

use App\Http\Controllers\V1\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'profile'], function () {
    Route::get('/', [UserController::class, 'me']);
});
