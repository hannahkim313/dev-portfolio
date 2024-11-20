import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';
import menuImg from '../assets/menu.svg';
import closeImg from '../assets/close.svg';
import styles from '../styles/header.module.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <h2 className={styles.authorDetails}>
        <span>Hannah Kim</span>
        <span className={styles.authorTitle}>Creative Front-End Developer</span>
      </h2>
      <button
        className={styles.menuButton}
        onClick={handleSidebarToggle}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        <img className={styles.menuImg} src={menuImg} alt="Menu icon" />
      </button>
      <Drawer
        anchor="right"
        open={isSidebarOpen}
        onClose={handleSidebarToggle}
        classes={{ paper: styles.drawerPaper }}
      >
        <button onClick={handleSidebarToggle} aria-label="Close menu">
          <img src={closeImg} alt="Close icon" />
        </button>
        <div className={styles.navListsContainer}>
          <nav>
            <h3 className="hidden">Main Navigation</h3>
            <ul className={styles.navList}>
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
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <hr className={styles.divider} />
          <nav>
            <h3 className="hidden">Get In Touch</h3>
            <ul className={styles.navList}>
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
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
