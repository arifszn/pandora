<br/>

<p align="center">
  <h1 align="center">Pandora</h1>
  <h4 align="center">📦 REST API starter kit powered by Laravel, OpenAPI, Sanctum.</h4>

  <p align="center">
    <a href="https://github.com/arifszn/pandora/actions/workflows/test.yml">
      <img src="https://github.com/arifszn/pandora/actions/workflows/test.yml/badge.svg"/>
    </a>
    <a href="https://codeclimate.com/github/arifszn/pandora/maintainability">
        <img src="https://api.codeclimate.com/v1/badges/b7e6bf481e4061f3352a/maintainability" />
    </a>
    <a href="https://www.php.net">
        <img src="https://img.shields.io/badge/php-%3E%3D8.1-%23777BB4" />
    </a>
    <a href="https://laravel.com">
        <img src="https://img.shields.io/badge/laravel-9.x-%23EC4E3D" />
    </a>
    <a href="https://github.com/arifszn/pandora/issues">
      <img src="https://img.shields.io/github/issues/arifszn/pandora"/>
    </a>
    <a href="https://github.com/arifszn/pandora/stargazers">
      <img src="https://img.shields.io/github/stars/arifszn/pandora"/>
    </a>
    <a href="https://github.com/arifszn/pandora/blob/main/CONTRIBUTING.md">
      <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
    </a>
    <a href="https://github.com/arifszn/pandora/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/arifszn/pandora"/>
    </a>
    <a href="https://www.buymeacoffee.com/arifszn">
      <img src="https://img.shields.io/badge/sponsor-buy%20me%20a%20coffee-yellow?logo=buymeacoffee"/>
    </a>
    <a href="https://twitter.com/intent/tweet?url=https://github.com/arifszn/pandora&hashtags=php,opensource,laravel,webdev,api">
      <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Farifszn%2Fpandora"/>
    </a>
  </p>

  <p align="center">
    <a href="https://arifszn.github.io/pandora">View Docs</a>
    ·
    <a href="https://github.com/arifszn/pandora/issues">Report Bug</a>
    ·
    <a href="https://github.com/arifszn/pandora/discussions">Request Feature</a>
  </p>
</p>

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

To setup Pandora, follow the process using either **[Docker](#with-docker-sail)** or **[Without Docker](#without-docker)** and you will have a fully running Laravel installation with Sanctum, all configured.

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

## Documentation

Complete documentation for Pandora can be found [here](https://arifszn.github.io/pandora).


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
