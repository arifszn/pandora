<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Favicon -->
        <link rel="shortcut icon" type="image/x-icon" href="{{asset('favicon.ico')}}">
        <title>{{Config::get('app.name')}}</title>
        
        @viteReactRefresh
        @vite('resources/js/admin/main.tsx')
    </head>
    <body class="antialiased">
        <div id="root"></div>
    </body>
</html>