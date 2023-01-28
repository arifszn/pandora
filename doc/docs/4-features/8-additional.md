---
title: Additional
---

Pandora offers some additional features.

## Ensure JSON response

When you make a request to any Laravel API, if you don't provide the header `Accept: application/json`, you will not get JSON response for the errors.

Pandora automatically adds the `Accept: application/json` header when you request to the API routes. So that you will always get JSON response even if you don't set the header implicitly.
