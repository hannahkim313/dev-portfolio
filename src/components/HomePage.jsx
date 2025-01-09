import { v4 as uuidv4 } from 'uuid';
import { Link, useLocation } from 'react-router-dom';
import purpleFlowerImgSrc from '../assets/flower-purple.png';
import redFlowerImgSrc from '../assets/flower-red.png';
import whiteFlowerImgSrc from '../assets/flower-white.png';
import authorImgSrc from '../assets/portrait-transparent.png';
import projects from '../data/projectsData';
import ProjectCard from './ProjectCard';
import styles from '../styles/home-page.module.css';

const HomePage = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const services = [
    {
      imgSrc: purpleFlowerImgSrc,
      imgAlt: 'Decorative purple flower illustration by Hannah Kim',
      title: 'Front-End Development',
      description: `Building responsive, interactive websites using modern
        front-end technologies for optimal user experiences.`,
    },
    {
      imgSrc: whiteFlowerImgSrc,
      imgAlt: 'Decorative white flower illustration by Hannah Kim',
      title: 'Web Design',
      description: `Creating visually appealing and user-friendly web designs
        that reflect brand identity.`,
    },
    {
      imgSrc: redFlowerImgSrc,
      imgAlt: 'Decorative red flower illustration by Hannah Kim',
      title: 'Website Optimization',
      description: `Optimizing websites for speed, accessibility, and
        performance across all devices.`,
    },
  ];

  return (
    <>
      <section className={`mb-sm ${styles.authorSection}`}>
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
        {services.map((service) => (
          <article key={uuidv4()} className={styles.serviceCard}>
            <img
              className={styles.serviceIcon}
              src={service.imgSrc}
              alt={service.imgAlt}
            />
            <div className={styles.serviceDetails}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </section>
      <hr className="divider" />
      <section className={styles.featuredProjects}>
        <h2 className={`mb-xs ${styles.featuredProjectsTitle}`}>
          Featured Projects
        </h2>
        <div className={styles.projectsContainer}>
          {projects
            .filter((project) => project.isFeatured)
            .map((projectData) => (
              <ProjectCard key={uuidv4()} data={projectData} />
            ))}
        </div>
      </section>
      <div className={`contentEnd ${styles.ctaContainer}`}>
        <Link className="cta" to="/contact">
          Get In Touch
        </Link>
        <Link
          className={`ctaSecondary ${styles.ctaSecondaryCustom}`}
          to="/projects"
        >
          See All Projects
        </Link>
      </div>
    </>
  );
};

export default HomePage;
