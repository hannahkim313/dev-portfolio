import { Link } from 'react-router-dom';
import styles from '../styles/project-card.module.css';

const ProjectCard = ({ data }) => (
  <article className={styles.projectCard}>
    <Link to={data.projectLink} state={data}>
      <div className={styles.projectThumbnailContainer}>
        <img
          className={styles.projectThumbnail}
          src={data.mainImg.src}
          alt={data.mainImg.alt}
        />
      </div>
    </Link>
    <div className={styles.projectDetails}>
      <Link className="ctaSecondary" to={data.projectLink} state={data}>
        <h2 className="mb-xs">{data.title}</h2>
      </Link>
      <p>{data.description}</p>
    </div>
  </article>
);

export default ProjectCard;
