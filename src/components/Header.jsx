import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <p>Hannah Kim | Creative Front-End Developer</p>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
  </header>
);

export default Header;
