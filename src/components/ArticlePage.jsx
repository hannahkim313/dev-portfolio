import DOMPurify from 'dompurify';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import formatDate from '../utils/formatDate';
import styles from '../styles/article-page.module.css';

const ArticlePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  const location = useLocation();
  const { id } = location.state || {};

  const url = `/api/articles/${id}`;
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
  }, [data]);

  useEffect(() => {
    if (fetchError) {
      setLoading(false);
      setError(fetchError);
      setShouldFetch(false);
    }
  }, [fetchError]);

  return (
    <main>
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
          {
            <div
              className={styles.articleContentContainer}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.article.content),
              }}
            ></div>
          }
        </article>
      )}
    </main>
  );
};

export default ArticlePage;
