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
    <a href="https://arifszn.github.io/pandora"><b>View Docs</b></a>
    ·
    <a href="https://github.com/arifszn/pandora/issues"><b>Report Bug</b></a>
    ·
    <a href="https://github.com/arifszn/pandora/discussions"><b>Request Feature</b></a>
  </p>
</p>

<p align="center">
  <a href="https://arifszn.github.io/pandora">
    <img src="https://raw.githubusercontent.com/arifszn/pandora/main/doc/static/img/assets/redoc.png" alt="Preview" width="60%"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.github.io/assets/img/drop-shadow.png" width="50%" alt="Shadow"/></a>
</p>

Welcome to **Pandora**, a powerful and customizable API starter kit for building your next REST API backend.

With Pandora, you can quickly set up a robust and fully-featured API, complete with documentation, testing, and a variety of functionalities.

Some of the features of Pandora include:

-   **API documentation:** With Redoc and Swagger UI, you can easily document and test your API endpoints.
-   **Docker-ready:** Pandora comes with a pre-configured Docker setup, making it easy to get started with your development.
-   **OpenAPI specification:** The API is built using the OpenAPI specification, ensuring compatibility with a wide range of tools and platforms.
-   **Service repository pattern:** The architecture is built using the service repository pattern, making it easy to manage and scale your codebase.
-   **Testing:** The starter kit includes a comprehensive set of tests to ensure your API is working as expected.
-   **Multi-auth:** Pandora includes support for multiple authentication methods, including admin and user auth.
-   **CI/CD:** The starter kit is configured for continuous integration and deployment, making it easy to keep your codebase up-to-date.

<!-- ## Overview

-   [API Documentation](https://arifszn.github.io/pandora/docs/api-documentation)
    -   [Redoc](https://arifszn.github.io/pandora/docs/api-documentation/redoc)
    -   [Swagger UI](https://arifszn.github.io/pandora/docs/api-documentation/swagger-ui)
-   [Dockerized](https://arifszn.github.io/pandora/docs/installation#with-docker-sail)
-   [OpenAPI Specification](https://arifszn.github.io/pandora/docs/features/openapi-specification)
-   [Service Repository Pattern](https://arifszn.github.io/pandora/docs/features/service-repository-pattern)
-   [Testing](https://arifszn.github.io/pandora/docs/features/testing)
-   [API Resource](https://arifszn.github.io/pandora/docs/features/api-resource)
-   [Code Style & Lint](https://arifszn.github.io/pandora/docs/features/code-style-and-lint)
-   [CI/CD](https://arifszn.github.io/pandora/docs/features/ci-cd)
-   [Log Viewer](https://arifszn.github.io/pandora/docs/features/log-viewer)

## Functionalities

-   [Multi Auth](https://arifszn.github.io/pandora/docs/functionalities/authentication) -->

<!-- -   REST API
-   Multi auth
-   Social Login
-   OpenAPI Specification
-   Swagger UI
-   Lint
-   PHPUnit Tests
-   Resource
-   Service Repository pattern
-   Optional Firebase Authentication -->

## Installation

**Prerequisite**

-   PHP 8.2

To setup Pandora, first clone the project and change the directory.

```sh
git clone https://github.com/arifszn/pandora.git
cd pandora
```

Then follow the process using either **[Docker](#with-docker-sail)** or **[Without Docker](#without-docker)** and you will have a fully running Laravel installation with Sanctum, all configured.

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
        laravelsail/php82-composer:latest \
        composer install --ignore-platform-reqs
    ```

3. Run the containers:

    ```shell
    ./vendor/bin/sail up -d
    ```

4. Generate application key:

    ```shell
    ./vendor/bin/sail artisan key:generate
    ```

5. Run database migration with seeder:

    ```shell
    ./vendor/bin/sail artisan migrate --seed
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

4. Run database migration with seeder:

    ```shell
    php artisan migrate --seed
    ```

5. Start the local server:

    ```shell
    php artisan serve
    ```

## Documentation

**The API documentation:**

-   [Redoc](https://arifszn.github.io/pandora/docs/api-documentation/redoc)
-   [Swagger UI](https://arifszn.github.io/pandora/docs/api-documentation/swagger-ui)

Complete documentation for Pandora can be found [**here**](https://arifszn.github.io/pandora).

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
