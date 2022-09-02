---
title: OpenAPI Specification
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The **OpenAPI Specification**, previously known as the Swagger Specification, defines a standard, language-agnostic interface to RESTful APIs that allows humans and computers to describe, understand, produce, consume, and visualize RESTful web services without access to source code, documentation, or through network traffic inspection.

OpenAPI Specification is an industry standard and can be used as a source of truth when developing a solution. You can create the specification file by writing raw YML or by using tools to generate it.

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

**Output file**

```yaml
openapi: 3.0.0
info:
  title: Pandora
  description: "API documentation for Pandora - REST API starter kit powered by Laravel, OpenAPI, Sanctum.\n\n- [GitHub](https://github.com/arifszn/pandora)\n- [MIT License](https://github.com/arifszn/pandora/blob/main/LICENSE)"
  version: 1.0.0
servers:
  - url: 'http://localhost/api'
    description: 'Local API server'
paths:
  /signup:
    post:
      tags:
        - Auth
      summary: 'Signup a user.'
      operationId: AuthController.signup
      requestBody:
        required: true
# ........................................
# ........................................
```

It will generate the `openapi.yaml` file in the public folder which can be [viewed in the UI](#viewing-the-specification).

## Viewing the Specification

You can view the specification with Redoc or Swagger UI.

- Visit **`/redoc`** from your Laravel app to view the OpenAPI Spec with Redoc.
- Visit **`/swagger-ui`** from your Laravel app to view the OpenAPI Spec with Swagger UI.

<p className="text--center">
  <img src={useBaseUrl('img/assets/redoc.png')} alt="Redoc" className="shadow--md"/>
</p>

<p className="text--center">
  <img src={useBaseUrl('img/assets/swagger-ui.png')} alt="Swagger UI" className="shadow--md"/>
</p>

Additionally, you can view the spec in the live documentation too.

- [Redoc](/docs/api-documentation/redoc)
- [Swagger UI](/docs/api-documentation/swagger-ui)

## Using in Postman

If you are used to developing in Postman, you can use the OpenAPI specification in Postman too. You can import the OpenAPI definitions (OpenAPI Specification) into Postman.

- In Postman, select Import to bring up the following screen:

    <p className="text--center">
        <img src={useBaseUrl('img/assets/postman-import.png')} alt="Postman Import" className="shadow--md"/>
    </p>

- Select **Link** and paste the `YAML` file link.

    <p className="text--center">
        <img src={useBaseUrl('img/assets/postman-import-link.png')} alt="Postman Import Link" className="shadow--md"/>
    </p>

- As a final step, select **Import**.

    <p className="text--center">
        <img src={useBaseUrl('img/assets/postman-import-final-step.png')} alt="Postman Import Final Step" className="shadow--md"/>
    </p>
