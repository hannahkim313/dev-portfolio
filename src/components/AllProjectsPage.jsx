import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import projects from '../data/projectsData';
import ProjectCard from './ProjectCard';
import styles from '../styles/all-projects-page.module.css';

const AllProjectsPage = () => (
  <>
    <Helmet>
      <title>Portfolio | Hannah Kim - Front-End Developer</title>
      <meta
        name="description"
        content="Browse the portfolio of Hannah Kim, showcasing a collection of front-end projects, including web applications, UI designs, and more. See the skills and technologies behind each project."
      />
      <meta
        property="og:title"
        content="Portfolio | Hannah Kim - Front-End Developer"
      />
      <meta
        property="og:description"
        content="Browse the portfolio of Hannah Kim, showcasing a collection of front-end projects, including web applications, UI designs, and more. See the skills and technologies behind each project."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
      <meta property="og:url" content="https://hannahkim.dev/projects/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Portfolio | Hannah Kim - Front-End Developer"
      />
      <meta
        name="twitter:description"
        content="Browse the portfolio of Hannah Kim, showcasing a collection of front-end projects, including web applications, UI designs, and more. See the skills and technologies behind each project."
      />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
    </Helmet>
    <section className={`mb-sm ${styles.introSection}`}>
      <h1>Projects I've Created</h1>
      <p className={styles.introSummary}>
        With a focus on design and front-end development while exploring
        back-end technologies and databases.
      </p>
    </section>
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
        <ProjectCard key={uuidv4()} data={project} />
      ))}
    </div>
    <p className={styles.githubCta}>
      Check out all my projects on{' '}
      <a className="ctaSecondary" href="https://github.com/hannahkim313">
        GitHub
      </a>
      .
    </p>
    <div className={`contentEnd ${styles.contactCta}`}>
      <p>Like what you see? Let's collaborate and bring your ideas to life.</p>
      <Link className="cta" to="/contact">
        Let's Connect
      </Link>
    </div>
  </>
);

export default AllProjectsPage;
