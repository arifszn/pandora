<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="{{Config::get('app.name')}} - Documentation" />
    <title>{{Config::get('app.name')}} - Documentation</title>
    <link rel="icon" href={{asset('favicon.ico')}} />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700" rel="stylesheet">
</head>

<body>
    <redoc spec-url='{{asset("openapi.yaml")}}'></redoc>
    <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"> </script>
</body>

</html>