---
title: Service Repository Pattern
---

import useBaseUrl from '@docusaurus/useBaseUrl';

The Service Repository pattern breaks up the business layer of the app into two distinct layers. It relies on dependency injection to work properly.

- The upper layer is the Services. These classes will have Repositories injected to them and can query multiple Repository classes and combine their data to form new, more complex business objects. Further, they introduce a layer of abstraction between the web application and the Repositories so that they can change more independently.

- The lower layer is the Repositories. These classes handle getting data into and out of our data store, with the important caveat that each Repository only works against a single Model class. So, if your models are Dogs, Cats, and Rats, you would have a Repository for each, the DogRepository would not call anything in the CatRepository, and so on.

Pandora uses Service Repository pattern for all the API operations.

<p className="text--center">
  <img
    src={useBaseUrl('img/assets/service-repository-pattern.svg')}
    alt="Service Repository pattern flow"
  />
</p>
