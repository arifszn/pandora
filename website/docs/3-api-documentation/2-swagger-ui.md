---
title: Swagger UI
hide_title: true
hide_table_of_contents: true
---

import SwaggerUI from "swagger-ui-react";
import "../../src/css/swagger-ui.css";

<div class="card">
  <div class="card__body">
    <SwaggerUI url="https://raw.githubusercontent.com/arifszn/pandora/main/public/openapi.yaml" persistAuthorization={true} displayOperationId={true} filter={true} />
  </div>
</div>
