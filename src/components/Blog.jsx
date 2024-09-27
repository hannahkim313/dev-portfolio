import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Blog = () => (
  <>
    <Header />
    <main>
      <h1>Hannah Kim's Developer Blog</h1>
      <nav>
        <Link to="/blog/articles">All Posts</Link>
        <div>
          <Link to="/blog/login">Log In</Link>
          <Link to="/blog/register">Sign Up</Link>
        </div>
      </nav>
      <h2>Articles</h2>
    </main>
    <Footer />
  </>
);

export default Blog;
