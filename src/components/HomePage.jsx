import { Link, Outlet, useLocation } from 'react-router-dom';
import authorImgSrc from '../assets/portrait-transparent.png';
import apiImgSrc from '../assets/api-main.png';
import urbanThreadImgSrc from '../assets/urban-thread-main.png';
import battleshipImgSrc from '../assets/battleship-main.png';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/home-page.module.css';

const HomePage = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const mainContent = (
    <main className={styles.main}>
      <section className={styles.authorSection}>
        <img
          className={styles.authorImg}
          src={authorImgSrc}
          alt="Digital illustration of Hannah Kim"
        />
        <div className={styles.authorDetails}>
          <h1 className={styles.authorTitle}>Hi, I'm Hannah</h1>
          <p className={styles.authorSummary}>
            I'm a creative front-end developer who builds beautiful, responsive
            websites with a focus on user experience.
          </p>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className={styles.featuredProjects}>
        <h2 className={styles.featuredProjectsTitle}>Featured Projects</h2>
        <div className={styles.projectsContainer}>
          <article className={styles.projectCard}>
            <Link to="/projects/blog-api">
              <div className={styles.projectThumbnailContainer}>
                <img
                  className={styles.projectThumbnail}
                  src={apiImgSrc}
                  alt="Screenshot of the Blog API's main configuration file."
                />
              </div>
            </Link>
            <Link to="/projects/blog-api">
              <h3>My Personal Blog API</h3>
            </Link>
            <p>
              A full-stack blog platform built with Prisma, PostgreSQL, and
              Node/Express.js. This project features role-based authentication,
              a secure comments system, and effective article management. Users
              can view published articles while the author has the ability to
              create, edit, and manage content dynamically.
            </p>
          </article>
          <article className={styles.projectCard}>
            <Link to="/projects/mock-e-commerce-store">
              <div className={styles.projectThumbnailContainer}>
                <img
                  className={styles.projectThumbnail}
                  src={urbanThreadImgSrc}
                  alt="Screenshot of Urban Thread's home page."
                />
              </div>
            </Link>
            <Link to="/projects/mock-e-commerce-store">
              <h3>Urban Thread: Mock E-Commerce Store</h3>
            </Link>
            <p>
              A responsive e-commerce application powered by the FakeStore API,
              allowing users to browse products and manage items in their cart.
              This project emphasizes a user-friendly design and delivers a
              seamless shopping experience similar to that of real-world
              e-commerce brands.
            </p>
          </article>
          <article className={styles.projectCard}>
            <Link to="/projects/battleship">
              <div className={styles.projectThumbnailContainer}>
                <img
                  className={styles.projectThumbnail}
                  src={battleshipImgSrc}
                  alt="Screenshot of a gameplay of Battleship."
                />
              </div>
            </Link>
            <Link to="/projects/battleship">
              <h3>Battleship Game</h3>
            </Link>
            <p>
              A web-based recreation of the classic Battleship game designed
              with a simple user interface and interactive gameplay. This
              project showcases algorithmic thinking, grid-based logic, and
              player-vs-AI functionality for an engaging user experience.
            </p>
          </article>
        </div>
      </section>
      <div className={styles.ctaContainer}>
        <Link className="cta" to="/contact">
          Get In Touch
        </Link>
        <Link className="cta-secondary" to="/projects">
          See All Projects
        </Link>
      </div>
    </main>
  );

  return (
    <div className="mainContentContainer">
      <Header />
      {isHome ? mainContent : <Outlet />}
      <Footer />
    </div>
  );
};

export default HomePage;
