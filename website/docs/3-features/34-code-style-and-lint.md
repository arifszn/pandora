---
title: Code Style & Lint
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Pandora uses **[Laravel Pint](https://github.com/laravel/pint)** for it's code style and lint. Laravel Pint is an opinionated PHP code style fixer for minimalists. Pint is built on top of PHP-CS-Fixer and makes it simple to ensure that your code style stays clean and consistent. For more details, visit the [Laravel website](https://laravel.com/docs/9.x/pint).

<p className="text--center">
  <img src={useBaseUrl('img/assets/laravel-pint.png')} alt="Log Viewer"/>
</p>

## Run Code Style Fixer

You can instruct Pint to fix code style issues by invoking the lint command:

```sh
composer lint
```

## Configuring Presets

You can configure the presets, rules, or inspected folders in the `pint.json` file.

```json
{
  "preset": "psr12"
}
```

Pint's currently supported presets are: `laravel`, `psr12`, and `symfony`.
