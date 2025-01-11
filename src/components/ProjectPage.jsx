import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import projects from '../data/projectsData';
import styles from '../styles/project-page.module.css';

const ProjectPage = () => {
  const { projectTitle } = useParams();

  const project = projects.find(
    (data) => data.projectLink === `/projects/${projectTitle}`
  );

  return (
    <>
      <Helmet>
        <title>{project.title} | Hannah Kim - Front-End Developer</title>
        <meta
          name="description"
          content={project.description.trim().replace(/\s+/g, ' ')}
        />
        <meta
          property="og:title"
          content={`${project.title} | Hannah Kim - Front-End Developer`}
        />
        <meta
          property="og:description"
          content={project.description.trim().replace(/\s+/g, ' ')}
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/g29CGChX/social-card.png"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${project.title} | Hannah Kim - Front-End Developer`}
        />
        <meta
          name="twitter:description"
          content={project.description.trim().replace(/\s+/g, ' ')}
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/g29CGChX/social-card.png"
        />
      </Helmet>
      <section className={`mb-sm ${styles.introSection}`}>
        <h1>{project.title}</h1>
        <div className="textContainer-sm">
          <p>Date Completed: {project.date}</p>
          <br />
          <p>{project.description}</p>
        </div>
        <div className={styles.projectThumbnailContainer}>
          <img
            className={styles.projectThumbnail}
            src={project.mainImg.src}
            alt={project.mainImg.alt}
          />
        </div>
      </section>
      <section className={styles.projectDetailsSection}>
        <h2 className="hidden mb-xs">Project Details</h2>
        <div className={`mb-xs ${styles.projectCtaContainer}`}>
          {project.liveLink && (
            <a
              className={`cta ${styles.ctaCustom}`}
              href={project.liveLink}
              target="_blank"
            >
              View Demo
            </a>
          )}
          <a
            className={`cta ${styles.ctaCustom}`}
            href={project.sourceCode}
            target="_blank"
          >
            View on GitHub
          </a>
        </div>
        <div className="mb-xs textContainer-lg">
          <h3 className={`mb-xs ${styles.techStackTitle}`}>Technology Stack</h3>
          <ul className={styles.techStackList}>
            {project.techStack.map((tech) => (
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
          {project.features.map((feature) => (
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
    </>
  );
};

export default ProjectPage;
