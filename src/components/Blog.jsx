import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import formatDate from '../utils/formatDate';

const Blog = () => {
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
      <h1>Hannah Kim's Developer Blog</h1>
      <h2>Articles</h2>
      {loading && <p>Loading articles...</p>}
      {error && <p>{error}</p>}
      {data && data.articles.length === 0 && (
        <>
          <strong>No Articles Yet!</strong>
          <p>
            It looks like there aren't any articles published at the moment. In
            the meantime, feel free to check back later as I work hard to bring
            you insightful content soon. Thank you for your patience!
          </p>
        </>
      )}
      {data &&
        data.articles.length > 0 &&
        data.articles.map((article) => {
          return (
            <Link
              to={`/blog/articles/${article.url}`}
              state={{ id: article.id }}
              key={article.id}
            >
              <article>
                <p>{formatDate(article.createdAt)}</p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </article>
            </Link>
          );
        })}
    </main>
  );
};

export default Blog;
