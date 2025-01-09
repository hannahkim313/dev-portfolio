import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';
import Layout from './Layout';
import ProjectCard from './ProjectCard';
import styles from '../styles/all-projects-page.module.css';

const AllProjectsPage = () => (
  <Layout>
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
  </Layout>
);

export default AllProjectsPage;
