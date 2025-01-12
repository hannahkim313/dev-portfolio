import { Link } from 'react-router-dom';
import authorImgSrc from '../assets/portrait-transparent.png';
import githubImgSrc from '../assets/github.svg';
import mailImgSrc from '../assets/mail.png';
import linkedInImgSrc from '../assets/linkedIn.png';
import styles from '../styles/footer.module.css';

const Footer = () => (
  <footer>
    <div className={styles.authorSection}>
      <img
        className={styles.authorImg}
        src={authorImgSrc}
        alt="Digital illustration of Hannah Kim"
      />
      <p className={styles.authorInfo}>
        <span>Hannah Kim</span>
        <span>Creative Front-End Developer</span>
      </p>
    </div>
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
            <Link to="/contact">Get In Touch</Link>
          </li>
        </ul>
      </nav>
      <div>
        <h3 className="hidden">Get In Touch</h3>
        <ul className={`${styles.navList} ${styles.socials}`}>
          <li>
            <a
              href="mailto:devhkim.contact@gmail.com"
              aria-label="Send an email to Hannah Kim"
            >
              <img src={mailImgSrc} alt="Mail icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/hannahkim313"
              aria-label="Github profile"
              target="_blank"
            >
              <img src={githubImgSrc} alt="Github icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/hannah-n-kim"
              aria-label="LinkedIn profile"
              target="_blank"
            >
              <img src={linkedInImgSrc} alt="LinkedIn icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p className={styles.copyright}>
      &copy; {new Date().getFullYear()} Hannah Kim. All rights reserved.
    </p>
  </footer>
);

export default Footer;
