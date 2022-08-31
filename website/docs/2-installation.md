---
id: installation
title: Installation
---

**Prerequisite**

- PHP 8.1

To setup Pandora, first clone the project and change the directory.

```sh
git clone https://github.com/arifszn/pandora.git
cd pandora
```

Then follow the process using either **[Docker](#with-docker-sail)** or **[Without Docker](#without-docker)** and you will have a fully running Laravel installation with Sanctum, all configured.

## With Docker (Sail)

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

## Without Docker

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
