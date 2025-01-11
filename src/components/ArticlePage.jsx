import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useFetchAPI from '../hooks/useFetchAPI';
import formatDate from '../utils/formatDate';
import styles from '../styles/article-page.module.css';

const ArticlePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  const location = useLocation();
  const id = location.state?.id;

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('/error');
    }
  }, [id, navigate]);

  const url = `${import.meta.env.VITE_API_URL}/api/articles/${id}`;

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
      {data && (
        <Helmet>
          <title>{data.article.title} | Hannah Kim - Front-End Developer</title>
          <meta
            name="description"
            content={data.article.description.trim().replace(/\s+/g, ' ')}
          />
          <meta
            property="og:title"
            content={`${data.article.title} | Hannah Kim - Front-End Developer`}
          />
          <meta
            property="og:description"
            content={data.article.description.trim().replace(/\s+/g, ' ')}
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/g29CGChX/social-card.png"
          />
          <meta property="og:type" content="article" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content={`${data.article.title} | Hannah Kim - Front-End Developer`}
          />
          <meta
            name="twitter:description"
            content={data.article.description.trim().replace(/\s+/g, ' ')}
          />
          <meta
            name="twitter:image"
            content="https://i.postimg.cc/g29CGChX/social-card.png"
          />
        </Helmet>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <article className={`contentEnd ${styles.articleContainer}`}>
          <section className={`mb-sm ${styles.introSection}`}>
            <div className={styles.introHeading}>
              <p>{formatDate(data.article.createdAt)}</p>
              <h1>{data.article.title}</h1>
            </div>
            <p>{data.article.description}</p>
          </section>
          <div
            className={styles.articleContentContainer}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.article.content),
            }}
          />
        </article>
      )}
    </>
  );
};

export default ArticlePage;
