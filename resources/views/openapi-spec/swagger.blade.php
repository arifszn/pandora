<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="{{Config::get('app.name')}} - Documentation" />
    <title>{{Config::get('app.name')}} - Documentation</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css" />
    <link rel="icon" href={{asset('favicon.ico')}} />
</head>

<body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
    <script>
        window.onload = () => {
            window.ui = SwaggerUIBundle({
                url: '{{asset("openapi.yaml")}}',
                dom_id: '#swagger-ui',
                persistAuthorization: true,
                displayOperationId: true,
                filter: true,
            });
        };
    </script>
</body>

</html>