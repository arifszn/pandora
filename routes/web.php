<?php

use App\Http\Controllers\PandoraController;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;

Route::get('/', [PandoraController::class, 'index']);

if (Config::get('app.debug')) {
    Route::get('/logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');
}

if (Config::get('pandora.api_doc.display_swagger_ui')) {
    Route::get('/swagger-ui', function () {
        return view('swagger.index');
    });
}

if (Config::get('pandora.api_doc.display_redoc')) {
    Route::get('/redoc', function () {
        return view('openapi-spec.redoc');
    });
}

if (Config::get('pandora.api_doc.display_swagger_ui')) {
    Route::get('/swagger-ui', function () {
        return view('openapi-spec.swagger');
    });
}
