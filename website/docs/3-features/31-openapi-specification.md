---
title: OpenAPI Specification
---

The **OpenAPI Specification**, previously known as the Swagger Specification, defines a standard, language-agnostic interface to RESTful APIs that allows humans and computers to describe, understand, produce, consume, and visualize RESTful web services without access to source code, documentation, or through network traffic inspection.

OpenAPI Specification is an industry standard and can be used as a source of truth when developing a solution.

Pandora uses OpenAPI Specification to document all the endpoints, responses, or request parameters. To generate the specification, Pandora uses **[swagger-php](https://github.com/zircote/swagger-php)**.

## Writing the Specification

You can define the specification by either adding **[`Attributes`](http://zircote.github.io/swagger-php/guide/attributes.html)** or **[`Annotations`](http://zircote.github.io/swagger-php/guide/annotations.html)**.

### Attributes Example

```php
use OpenApi\Attributes as OAT;

#[OAT\Get(
    path: '/api/users',
    responses: [
        new OAT\Response(response: 200, description: 'AOK'),
        new OAT\Response(response: 401, description: 'Not allowed'),
    ]
)]
public function users() { /* ... */ }
```

### Annotations Example

```php
/**
 * @OA\Get(
 *     path="/api/users",
 *     @OA\Response(response="200", description="AOK"),
 *     @OA\Response(response="401", description="Not allowed")
 * )
 */
public function users() { /* ... */ }
```

## Generating the Specification

To generate the OpenAPI Specification file, run command:

```sh
composer openapi
```

It will generate the `openapi.yaml` file in the public folder which can be viewed in the Swagger UI.
