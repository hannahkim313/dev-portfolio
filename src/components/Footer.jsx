import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <a href="https://github.com/hannahkim313">GitHub</a>
        </li>
        <li>
          <a href="mailto:devhkim13@gmail.com">Email</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hannah-n-kim">LinkedIn</a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog/articles">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <p>&copy; 2024 Hannah Kim. All rights reserved.</p>
  </footer>
);

export default Footer;
