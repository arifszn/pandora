<?php

use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'profile'], function () {
    Route::get('/', [ProfileController::class, 'me']);
});
