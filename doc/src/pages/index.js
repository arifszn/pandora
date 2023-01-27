import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className="text--center">
          <img
            alt={siteConfig.title}
            className={styles.logo}
            src={useBaseUrl('img/logo.svg')}
          />
        </div>
        <h1 className="hero__title">
          <span className={styles.heroKeywords}>{siteConfig.title}</span>
        </h1>
        <p className={`hero__subtitle ${styles.heroSubTitleKeywords}`}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg fadeIn"
            to="/docs/introduction"
          >
            Get Started&nbsp;&nbsp;→
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description={`${siteConfig.customFields.description}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
