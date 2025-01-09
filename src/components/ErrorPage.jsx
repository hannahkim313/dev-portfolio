import { Link } from 'react-router-dom';
import errorImgSrc from '../assets/error.png';
import styles from '../styles/error-page.module.css';

const ErrorPage = ({ errorMessage }) => (
  <>
    <section className={styles.contentContainer}>
      <h1 className="">Something Went Wrong!</h1>
      <img
        className={styles.errorImg}
        src={errorImgSrc}
        alt="A digital illustration of a wooden sign that states 'Dead end.'"
      />
      <p>{errorMessage}</p>
      <Link className="cta contentEnd" to="/">
        Back to Home
      </Link>
    </section>
  </>
);

export default ErrorPage;
