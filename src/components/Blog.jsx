import { useEffect, useState } from 'react';
import useFetchAPI from '../hooks/useFetchAPI';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

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

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Hannah Kim's Developer Blog</h1>
        <h2>Articles</h2>
        {loading && <p>Loading articles...</p>}
        {error && <p>{error}</p>}
        {data && data.data.articles.length === 0 && (
          <>
            <strong>No Articles Yet!</strong>
            <p>
              It looks like there aren't any articles published at the moment.
              In the meantime, feel free to check back later as I work hard to
              bring you insightful content soon. Thank you for your patience!
            </p>
          </>
        )}
        {data &&
          data.data.articles.length > 0 &&
          data.data.articles.map((article) => {
            return (
              <Link to={`/blog/articles/${article.url}`} key={article.id}>
                <article>
                  <p>{formatDate(article.createdAt)}</p>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </article>
              </Link>
            );
          })}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
