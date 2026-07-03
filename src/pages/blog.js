import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './blog.module.css';

const tags = ['welcome', 'ashesh'];

export default function Blog() {
  return (
    <Layout title="Blog" description="zRan Online blog">
      <main className={styles.page}>
        <div className={styles.wrap}>
          <aside className={styles.sidebar}>
            <h2>Recent posts</h2>
            <h3>2026</h3>
            <a href="#welcome">Welcome</a>
          </aside>

          <article className={styles.post} id="welcome">
            <h1>Welcome</h1>
            <p className={styles.meta}>June 28, 2026 · One min read</p>

            <div className={styles.byline}>
              <img className={styles.avatar} src="/zRan-EP7-Docs/img/AsheshProfile.jpg" alt="Ashesh Development" />
              <div>
                <Link className={styles.name} to="https://www.facebook.com/dev.Ashesh">
                  Ashesh Development
                </Link>
                <p>r/ whooosh</p>
              </div>
            </div>

            <p>Welcome to the zRan Online public documentation.</p>

            <p>
              <strong>
                This space will collect player guides, support notes, known issues, and community references.
              </strong>
            </p>

            <p>You are always welcome to join the discussion and help improve the public knowledge base.</p>

            <p>
              Facebook:{' '}
              <Link to="https://www.facebook.com/dev.Ashesh">
                Link
              </Link>
            </p>

            <div className={styles.tags}>
              <strong>Tags:</strong>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        </div>
      </main>
    </Layout>
  );
}
