import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import formatDate from '../utils/formatDate';
import styles from '../styles/blog.module.css';

const BlogPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  const url = '/api/articles';
  const body = {};

  const { data, fetchError } = useFetchAPI(
    shouldFetch ? url : null,
    'GET',
    shouldFetch ? body : null
  );

  useEffect(() => {
    if (data) {
      setLoading(false);
      setError(null);
      setShouldFetch(false);
    }

    if (fetchError) {
      setLoading(false);
      setError(fetchError);
      setShouldFetch(false);
    }
  }, [data, fetchError]);

  return (
    <>
      <section className={`mb-sm ${styles.introSection}`}>
        <h1>Personal Developer Blog</h1>
        <p>
          Insights on web development, current and future projects, and my
          journey as a developer.
        </p>
      </section>
      <section className={styles.articlesSection}>
        <h2 className={`mb-xs ${styles.articlesHeading}`}>Articles</h2>
        {loading && <p>Loading articles...</p>}
        {error && <p>{error}</p>}
        {data && Array.isArray(data.articles) && data.articles.length === 0 && (
          <div className={styles.noArticlesContainer}>
            <p className={styles.noArticlesHeading}>No Articles Yet!</p>
            <p>
              It looks like there aren't any articles published at the moment.
              In the meantime, feel free to check back later as I work hard to
              bring you insightful content soon. Thank you for your patience!
            </p>
          </div>
        )}
        {data &&
          Array.isArray(data.articles) &&
          data.articles.length > 0 &&
          data.articles.map((article) => {
            return (
              <article className={styles.articleCard} key={article.id}>
                <p>{formatDate(article.createdAt)}</p>
                <Link
                  className="ctaSecondary"
                  to={`/blog/articles/${article.url}`}
                  state={{ id: article.id }}
                >
                  <h3 className="mb-xs">{article.title}</h3>
                </Link>
                <p>{article.description}</p>
              </article>
            );
          })}
      </section>
    </>
  );
};

export default BlogPage;
