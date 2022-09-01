---
title: Swagger UI
hide_title: true
hide_table_of_contents: true
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

<SwaggerUI 
    url="https://raw.githubusercontent.com/arifszn/pandora/main/public/openapi.yaml"
    persistAuthorization={true}
    displayOperationId={true}
    filter={true}
/>
