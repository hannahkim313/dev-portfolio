import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useFetchAPI from '../hooks/useFetchAPI';
import formatDate from '../utils/formatDate';
import styles from '../styles/blog.module.css';

const BlogPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  const url = `${import.meta.env.VITE_API_URL}/api/articles`;

  const { data, fetchError } = useFetchAPI(shouldFetch ? url : null, 'GET');

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
      <Helmet>
        <title>Blog | Hannah Kim - Front-End Developer</title>
        <meta
          name="description"
          content="Explore articles written by Hannah Kim on web development, current and future projects, and the journey to becoming a developer."
        />
        <meta
          property="og:title"
          content="Blog | Hannah Kim - Front-End Developer"
        />
        <meta
          property="og:description"
          content="Explore articles written by Hannah Kim on web development, current and future projects, and the journey to becoming a developer."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/g29CGChX/social-card.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blog | Hannah Kim - Front-End Developer"
        />
        <meta
          name="twitter:description"
          content="Explore articles written by Hannah Kim on web development, current and future projects, and the journey to becoming a developer."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/g29CGChX/social-card.png"
        />
      </Helmet>
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
