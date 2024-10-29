import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
  // TODO: fetch articles
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
        {/* TODO: map out fetched articles */}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
