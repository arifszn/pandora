import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const FeatureList = [
  {
    title: 'REST API',
    description: (
      <>
        REST stands for Representational State Transfer. Pandora follows the
        best REST API standards conventions.
      </>
    ),
  },
  {
    title: 'OpenAPI Specification',
    description: (
      <>
        Pandora comes with an easy way of writing a complete OpenAPI
        Specification, previously known as the Swagger Specification.
      </>
    ),
  },
  {
    title: 'Powered by Laravel',
    description: (
      <>
        Extend or customize your project by reusing Laravel. Pandora runs on
        Laravel 9.
      </>
    ),
  },
  // {
  //   title: 'API authentication',
  //   description: (
  //     <>
  //       TO DO
  //     </>
  //   ),
  // },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content-center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

Feature.propTypes = {
  title: PropTypes.string,
  description: PropTypes.node,
};
