<?php

use App\Http\Controllers\User\ProfileController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'profile'], function () {
    Route::get('/', [ProfileController::class, 'me']);
});
