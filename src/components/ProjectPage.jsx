import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/project-page.module.css';

const ProjectPage = () => {
  const location = useLocation();

  const state = location.state;

  return (
    <main>
      <section className={`mb-sm ${styles.introSection}`}>
        <h1>{state.title}</h1>
        <div className="textContainer-sm">
          <p>Date Completed: {state.date}</p>
          <br />
          <p>{state.description}</p>
        </div>
        <div className={styles.projectThumbnailContainer}>
          <img
            className={styles.projectThumbnail}
            src={state.mainImg.src}
            alt={state.mainImg.alt}
          />
        </div>
      </section>
      <section className={styles.projectDetailsSection}>
        <h2 className="hidden mb-xs">Project Details</h2>
        <div className={`mb-xs ${styles.projectCtaContainer}`}>
          {state.liveLink && (
            <a
              className={`cta ${styles.ctaCustom}`}
              href={state.liveLink}
              target="_blank"
            >
              View Demo
            </a>
          )}
          <a
            className={`cta ${styles.ctaCustom}`}
            href={state.sourceCode}
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
        <div className="mb-xs textContainer-lg">
          <h3 className={`mb-xs ${styles.techStackTitle}`}>Technology Stack</h3>
          <ul className={styles.techStackList}>
            {state.techStack.map((tech) => (
              <li className={styles.techStackItem} key={uuidv4()}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.keyFeaturesSection}>
        <h2 className="mb-xs">Key Features</h2>
        <ul className="textContainer-sm">
          {state.features.map((feature) => (
            <Fragment key={uuidv4()}>
              <li className={styles.keyFeatureItem}>{feature}</li>
              <br />
            </Fragment>
          ))}
        </ul>
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
    </main>
  );
};

export default ProjectPage;
