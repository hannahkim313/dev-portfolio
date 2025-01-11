import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import errorImgSrc from '../assets/error.png';
import styles from '../styles/error-page.module.css';

const ErrorPage = ({ errorMessage }) => (
  <>
    <Helmet>
      <title>
        Oops! Something Went Wrong | Hannah Kim - Front-End Developer
      </title>
      <meta
        name="description"
        content="Something went wrong. Please try again or return to the homepage."
      />
      <meta
        property="og:title"
        content="Oops! Something Went Wrong | Hannah Kim - Front-End Developer"
      />
      <meta
        property="og:description"
        content="Something went wrong. Please try again or return to the homepage."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Oops! Something Went Wrong | Hannah Kim - Front-End Developer"
      />
      <meta
        name="twitter:description"
        content="Something went wrong. Please try again or return to the homepage."
      />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
    </Helmet>
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
