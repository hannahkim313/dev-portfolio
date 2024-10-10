import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div>
      <a href="https://github.com/hannahkim313">GitHub</a>
      <a href="mailto:devhkim13@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/hannah-n-kim">LinkedIn</a>
    </div>
    <div>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
      <Link to="/blog/articles">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <p>&copy; 2024 Hannah Kim. All rights reserved.</p>
  </footer>
);

export default Footer;
