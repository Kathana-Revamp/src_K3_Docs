import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

const features = [
  {
    title: 'Player Guides',
    description:
      'Start with setup, launcher flow, characters, equipment, skills, maps, parties, guilds, and PvP basics.',
  },
  {
    title: 'Source-Backed Features',
    description:
      'Explore observed systems such as Battle Pass, Codex, pets, vehicles, rankings, item systems, and event PvP.',
  },
  {
    title: 'Support Center',
    description:
      'Find troubleshooting notes, known issues, reporting guidance, and the information needed for useful bug reports.',
  },
];

function FeatureCard({title, description}) {
  return (
    <article className={styles.featureCard}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <Layout
      title="zRan Online"
      description="Public player documentation for zRan Online">
      <main>
        <section className={styles.hero}>
          <div className="container">
            <p className={styles.kicker}>Public player documentation</p>
            <h1>zRan Online</h1>
            <p className={styles.lead}>
              Player guides, support notes, known issues, and community contribution paths for zRan Online.
            </p>
            <div className={styles.actions}>
              <Link className="button button--primary button--lg" to="/docs/start/getting-started">
                Quick Start
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/blog">
                Blog
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className={clsx('container', styles.featureGrid)}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className={styles.linkGroups}>
          <div className="container">
            <div className={styles.groupGrid}>
              <div>
                <h2>Docs</h2>
                <ul>
                  <li><Link to="/docs/start/getting-started">Getting Started</Link></li>
                  <li><Link to="/docs/gameplay/game-features">Game Features</Link></li>
                  <li><Link to="/docs/gameplay/character-basics">Character Basics</Link></li>
                  <li><Link to="/docs/support/troubleshooting">Troubleshooting</Link></li>
                </ul>
              </div>
              <div>
                <h2>Community</h2>
                <ul>
                  <li><Link to="/docs/support/report-a-bug">Report a Bug</Link></li>
                  <li><Link to="/docs/support/request-a-feature">Request a Feature</Link></li>
                  <li><Link to="/docs/community/rules-safety">Rules and Safety</Link></li>
                </ul>
              </div>
              <div>
                <h2>More</h2>
                <ul>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="https://github.com/Ran-Online-Development/zRan-EP7-Docs">GitHub</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
