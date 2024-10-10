import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchAPI from '../hooks/useFetchAPI';
import { setToken } from '../utils/tokenService';
import Header from './Header';
import Footer from './Footer';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);
  const navigate = useNavigate();

  const url = '/blog/auth/login';
  const method = 'POST';
  const body = { username, password };

  const { data, fetchError } = useFetchAPI(
    shouldFetch ? url : null,
    method,
    shouldFetch ? body : null
  );

  useEffect(() => {
    if (data) {
      setLoading(false);
      setError(null);
      setShouldFetch(false);
      setToken(data.token);
      navigate('/blog/articles');
    }
  }, [data, navigate]);

  useEffect(() => {
    if (fetchError) {
      setLoading(false);
      setShouldFetch(false);

      if (fetchError === 'Incorrect username') {
        setError('The username does not exist.');
      } else if (fetchError === 'Incorrect password') {
        setError('The password is incorrect.');
      } else if (fetchError === 'Missing credentials') {
        if (!username && !password) {
          setError('Username and password are required.');
        } else if (!username) {
          setError('Username is required.');
        } else if (!password) {
          setError('Password is required.');
        }
      } else {
        setError('An unknown error occurred. Please try again later.');
      }
    }
  }, [fetchError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    setShouldFetch(true);
    setError(null);
  };

  return (
    <>
      <Header />
      <main>
        <form action="" method="post" onSubmit={handleSubmit}>
          <h1>Welcome Back! Please Log In</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
          <button type="submit" disabled={loading}>
            Log in
          </button>
          <p>
            Don't have an account yet?{' '}
            <a href="/blog/auth/register">Sign up here</a>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
