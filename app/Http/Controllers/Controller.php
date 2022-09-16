<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use OpenApi\Attributes as OAT;

#[
    OAT\Info(
        version: '1.0.0',
        title: 'Pandora',
        description: "## Introduction\n\n API documentation for Pandora - REST API starter kit powered by Laravel, OpenAPI, Sanctum.\n\n- [GitHub](https://github.com/arifszn/pandora)\n- [MIT License](https://github.com/arifszn/pandora/blob/main/LICENSE)",
    ),
    OAT\Server(url: 'http://localhost', description: 'Local API server'),
    OAT\SecurityScheme(
        securityScheme: 'BearerToken',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        type: 'http'
    ),
    OAT\Tag(name: 'auth', description: 'User authentication'),
    OAT\Tag(name: 'adminAuth', description: 'Admin authentication'),
    OAT\Schema(
        schema: 'ValidationError',
        properties: [
            new OAT\Property(property: 'message', type: 'string', example: 'The given data was invalid.'),
            new OAT\Property(
                property: 'errors',
                type: 'object',
                properties: [
                    new OAT\Property(
                        property: 'key 1',
                        type: 'array',
                        items: new OAT\Items(type: 'string', example: 'Error message 1')
                    ),
                    new OAT\Property(
                        property: 'key 2',
                        type: 'array',
                        items: new OAT\Items(type: 'string', example: 'Error message 2')
                    ),
                ]
            ),

        ]
    )
]
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
