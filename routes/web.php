<?php

use App\Http\Controllers\PandoraController;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;

Route::get('/', [PandoraController::class, 'index']);

if (Config::get('app.debug')) {
    Route::get('/logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
}
