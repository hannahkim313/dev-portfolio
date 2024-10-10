import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import { getToken, removeToken } from '../utils/tokenService';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldLogout, setShouldLogout] = useState(false);

  const token = getToken();
  const navigate = useNavigate();

  const url = '/blog/auth/logout';
  const method = 'POST';
  const body = {};
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, fetchError } = useFetchAPI(
    shouldLogout ? url : null,
    method,
    body,
    shouldLogout ? options : null
  );

  useEffect(() => {
    if (token === 'undefined') {
      return;
    }

    const decodedToken = jwtDecode(token);

    if (decodedToken.exp) {
      const currentTime = Date.now() / 1000;
      const timeUntilExp = decodedToken.exp - currentTime;

      if (timeUntilExp <= 0) {
        handleLogout();
      } else {
        const timeoutId = setTimeout(() => {
          handleLogout();
        }, timeUntilExp * 1000);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [token]);

  useEffect(() => {
    if (data) {
      setLoading(false);
      setError(null);
      setShouldLogout(false);
      removeToken();
      navigate('/blog/auth/login');
    }
  }, [data, navigate]);

  useEffect(() => {
    if (fetchError) {
      setLoading(false);
      setError(fetchError);
      setShouldLogout(false);
    }
  }, [fetchError]);

  const handleLogout = () => {
    setLoading(true);
    setError(null);
    setShouldLogout(true);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Hannah Kim's Developer Blog</h1>
        <nav>
          <Link to="/blog/articles">All Posts</Link>
          <div>
            {error && <p>{error}</p>}
            {token && (
              <button type="button" onClick={handleLogout} disabled={loading}>
                Log out
              </button>
            )}
            {!token && <Link to="/blog/auth/login">Log In</Link>}
            {!token && <Link to="/blog/auth/register">Sign Up</Link>}
          </div>
        </nav>
        <h2>Articles</h2>
        {/* TODO: fetch articles */}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
