import { v4 as uuidv4 } from 'uuid';
import { Link, Outlet, useLocation } from 'react-router-dom';
import purpleFlowerImgSrc from '../assets/flower-purple.png';
import redFlowerImgSrc from '../assets/flower-red.png';
import whiteFlowerImgSrc from '../assets/flower-white.png';
import authorImgSrc from '../assets/portrait-transparent.png';
import projects from '../data/projectsData';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/home-page.module.css';
import ProjectCard from './ProjectCard';

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
      <section className={styles.serviceCardsContainer}>
        <h2 className="hidden">What I Offer</h2>
        <article className={styles.serviceCard}>
          <img
            className={styles.serviceIcon}
            src={purpleFlowerImgSrc}
            alt="Decorative purple flower illustration by Hannah Kim"
          />
          <div className={styles.serviceDetails}>
            <h3 className={styles.serviceTitle}>Front-End Development</h3>
            <p>
              Building responsive, interactive websites using modern front-end
              technologies for optimal user experiences.
            </p>
          </div>
        </article>
        <article className={styles.serviceCard}>
          <img
            className={styles.serviceIcon}
            src={whiteFlowerImgSrc}
            alt="Decorative white flower illustration by Hannah Kim"
          />
          <div className={styles.serviceDetails}>
            <h3 className={styles.serviceTitle}>Web Design</h3>
            <p>
              Creating visually appealing and user-friendly web designs that
              reflect brand identity.
            </p>
          </div>
        </article>
        <article className={styles.serviceCard}>
          <img
            className={styles.serviceIcon}
            src={redFlowerImgSrc}
            alt="Decorative red flower illustration by Hannah Kim"
          />
          <div className={styles.serviceDetails}>
            <h3 className={styles.serviceTitle}>Website Optimization</h3>
            <p>
              Optimizing websites for speed, accessibility, and performance
              across all devices.
            </p>
          </div>
        </article>
      </section>
      <hr className="divider" />
      <section className={styles.featuredProjects}>
        <h2 className={styles.featuredProjectsTitle}>Featured Projects</h2>
        <div className={styles.projectsContainer}>
          {projects
            .filter((project) => project.isFeatured)
            .map((projectData) => (
              <ProjectCard key={uuidv4()} data={projectData} />
            ))}
        </div>
      </section>
      <div className={styles.ctaContainer}>
        <Link className="cta" to="/contact">
          Get In Touch
        </Link>
        <Link
          className={`cta-secondary ${styles.ctaSecondaryCustom}`}
          to="/projects"
        >
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
