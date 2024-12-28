import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';
import ProjectCard from './ProjectCard';
import styles from '../styles/all-projects.module.css';

const AllProjectsPage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.introSection}>
        <h1>Projects I've Created</h1>
        <p>
          With a focus on design and front-end development while exploring
          back-end technologies and databases.
        </p>
      </section>
      <div className={styles.projectsContainer}>
        {projects.map((projectData) => (
          <ProjectCard key={uuidv4()} data={projectData} />
        ))}
      </div>
      <p className={styles.githubCta}>
        Check out all my projects on{' '}
        <a className="cta-secondary" href="https://github.com/hannahkim313">
          GitHub
        </a>
        .
      </p>
      <div className={styles.contactCta}>
        <p>
          Like what you see? Let's collaborate and bring your ideas to life.
        </p>
        <Link className="cta" to="/contact">
          Let's Connect
        </Link>
      </div>
    </main>
  );
};

export default AllProjectsPage;
