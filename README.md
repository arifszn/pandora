<br/>

<p align="center">
  <h1 align="center">Pandora</h1>

  <h4 align="center">📦 REST API starter kit built with Laravel, OpenAPI, Sanctum.</h4>

**Pandora** is a modern, customized, feature-rich API starter kit to kickstart your next _REST_ API backend.

⚠️ The status of this project is **WIP**.

## Features

-   Dockerized
-   REST API
-   Multi auth
-   Social Login
-   OpenAPI Specification
-   Swagger UI
-   Lint
-   PHPUnit Tests
-   Resource
-   Log viewer
-   Service Repository pattern
-   Optional Firebase Authentication

## Installation

**Prerequisite**

-   PHP 8.1

To setup Pandora, first clone the project and change the directory

```shell
git clone https://github.com/arifszn/pandora.git
cd pandora
```

Then follow the process using either **Docker** or **without Docker**.

### With Docker (Sail)

[Laravel Sail](https://github.com/laravel/sail) is a light-weight command-line interface for interacting with Laravel's default Docker development environment.

1. Copy `.env.example` to `.env`:

    ```shell
    cp .env.example .env
    ```

2. Install the dependencies:

    ```shell
    docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v $(pwd):/var/www/html \
        -w /var/www/html \
        laravelsail/php81-composer:latest \
        composer install --ignore-platform-reqs
    ```

3. Run the containers:

    ```shell
    ./vendor/bin/sail up
    ```

4. Generate application key:

    ```shell
    ./vendor/bin/sail artisan key:generate
    ```

To learn more about Sail, visit the [official Doc](https://laravel.com/docs/9.x/sail).

### Without Docker

1. Copy `.env.example` to `.env`:

    ```shell
    cp .env.example .env
    ```

2. Install the dependencies:

    ```shell
    composer install
    ```

3. Generate application key:

    ```shell
    php artisan key:generate
    ```

4. Start the local server:

    ```shell
    php artisan serve
    ```

## Support

<p>You can show your support by starring this project.</p>
<a href="https://github.com/arifszn/pandora/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/pandora?style=social" alt="Github Star">
</a>

## Contribute

To contribute, see the [contributing guide](https://github.com/arifszn/pandora/blob/main/CONTRIBUTING.md).

## Credits

This starter kit is inspired by the project [Hydra](https://github.com/hasinhayder/hydra).

## License

[MIT License](https://github.com/arifszn/pandora/blob/main/LICENSE)
