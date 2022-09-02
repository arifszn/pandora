<?php

return [
    'version' => '1.0.0',

    'pagination' => [
        'items_per_page' => 10,
    ],

    'api_doc' => [
        'display_swagger_ui' => (bool) env('DISPLAY_SWAGGER_UI', true),
        'display_redoc' => (bool) env('DISPLAY_REDOC', true),
    ],
];
