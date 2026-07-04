import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title} Docs</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/start/getting-started">
            Player Guide - 5min ⏱️
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: '1rem' }}
            to="/docs/developer/architecture-overview">
            Developer Docs ⚙️
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({title, description, Svg, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Placeholder for SVG icon, using an emoji for now as fallback if Svg is not provided */}
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{Svg}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link to={link} className="button button--outline button--primary button--sm">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

const FeatureList = [
  {
    title: 'For Players',
    Svg: '🎮',
    description: (
      <>
        Learn the basics of character creation, class progression, and mastering the combat systems in Genesis M.
      </>
    ),
    link: '/docs/start/getting-started'
  },
  {
    title: 'For Developers',
    Svg: '💻',
    description: (
      <>
        Explore the modular architecture of the Kathana 3 Dev Kit, including the DBSRV, TMSRV, and the Next.js Web App.
      </>
    ),
    link: '/docs/developer/architecture-overview'
  },
  {
    title: 'Community & Support',
    Svg: '🤝',
    description: (
      <>
        Join discussions, report bugs, and read our guidelines to help build a safe and fun environment for everyone.
      </>
    ),
    link: '/docs/support/troubleshooting'
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Official documentation for Genesis M players and developers.">
      <HomepageHeader />
      <main>
        {FeatureList && FeatureList.length > 0 && (
          <section className={styles.features}>
            <div className="container" style={{ padding: '4rem 0' }}>
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
