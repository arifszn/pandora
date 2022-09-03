---
title: CI/CD
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Continuous integration (CI) and continuous delivery (CD), also known as CI/CD, embodies a culture, operating principles, and a set of practices that application development teams use to deliver code changes more frequently and reliably.

Pandora uses **[GitHub Actions](https://docs.github.com/en/actions)** for validating and testing Pull Request.

Here's an overview of the used workflow so that any newcomer can be familiar with CI/CD.

# Workflow File

The workflow file is situated in the `.github/workflows/test.yml` file. Whenever a pull request is created, the workflow runs the pipeline to validate the pull request running Lint test, PHPUnit test. You can extend or modify it according to your need.

The test result can be viewed in the pull request or in the [`Actions`](https://github.com/arifszn/pandora/actions) tab.

<p className="text--center">
  <img src={useBaseUrl('img/assets/github-actions.png')} alt="Github Actions" className="shadow--md"/>
</p>

**test.yml**

```yml
name: 'Test'

on:
  pull_request:
    branches:
      - main

    paths-ignore:
      - website/**

  workflow_dispatch:

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: true
      matrix:
        php: [8.1]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup PHP ${{ matrix.php }}
        uses: shivammathur/setup-php@v2
        with:
          php-version: ${{ matrix.php }}

      - name: Get Composer Cache Directory
        id: composer-cache
        run: |
          echo "::set-output name=dir::$(composer config cache-files-dir)"

      - name: Restore cache
        uses: actions/cache@v3
        with:
          path: ${{ steps.composer-cache.outputs.dir }}
          key: ${{ runner.os }}-composer-${{ hashFiles('**/composer.lock') }}
          restore-keys: |
            ${{ runner.os }}-composer-

      - name: Install dependencies
        run: composer install --no-progress --prefer-dist --optimize-autoloader

      - name: Prepare Laravel application
        run: |
          cp .env.example .env
          php artisan key:generate

      - name: Run Laravel lint test
        run: composer lint:test

      - name: Create sqlite
        run: touch database/testing.sqlite

      - name: Run Testsuite
        run: vendor/bin/phpunit
        env:
          DB_CONNECTION: sqlite
          DB_DATABASE: database/testing.sqlite
```

For more info, visit the **[GitHub Actions docs](https://docs.github.com/en/actions)**.
