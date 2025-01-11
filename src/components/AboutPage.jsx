import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from '../styles/about-page.module.css';

const AboutPage = () => (
  <>
    <Helmet>
      <title>About | Hannah Kim - Front-End Developer</title>
      <meta
        name="description"
        content="Learn more about Hannah Kim, a front-end developer with a focus on creating intuitive, user-friendly websites."
      />
      <meta
        property="og:title"
        content="About | Hannah Kim - Front-End Developer"
      />
      <meta
        property="og:description"
        content="Learn more about Hannah Kim, a front-end developer with a focus on creating intuitive, user-friendly websites."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
      <meta property="og:url" content="https://hannahkim.dev/about/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="About | Hannah Kim - Front-End Developer"
      />
      <meta
        name="twitter:description"
        content="Learn more about Hannah Kim, a front-end developer with a focus on creating intuitive, user-friendly websites."
      />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
    </Helmet>
    <section className={`mb-sm ${styles.introSection}`}>
      <h1 className={styles.introHeading}>About Hannah Kim</h1>
      <p>
        I'm a self-taught software engineer with a background in illustration.
        Motivated by my passion for enhancing user experience through accessible
        and innovative design, I am excited to create web applications that
        combine aesthetics with practicality.
      </p>
    </section>
    <section className={`textContainer-lg ${styles.skillsSection}`}>
      <h2 className="mb-xs">Skills and Technologies</h2>
      <article className="textContainer-sm">
        <h3 className="mb-xs">Front-End Development</h3>
        <p>
          As a front-end developer, I work with HTML, CSS, and JavaScript to
          build responsive applications. My familiarity with React allows me to
          create reusable components, improving both maintainability and
          scalability.
        </p>
        <br />
        <p>
          Because most front-end systems interact with server-side technologies,
          I'm also experienced in working with APIs using React and Axios to
          safely handle requests and manage responses. To ensure quality and
          reliability, I use Jest to thoroughly test my code.
        </p>
      </article>
      <article className="textContainer-sm">
        <h3 className="mb-xs">Back-End Development</h3>
        <p>
          In order to broaden my skills and gain a well-rounded understanding of
          front-end responsibilities, I've also explored back-end technologies
          like Node.js and Express, along with database tools such as
          PostgreSQL, Prisma, MongoDB, and Mongoose.
        </p>
        <br />
        <p>
          Although my primary focus is front-end development, building and
          integrating my own{' '}
          <Link
            className="ctaSecondary ctaSecondaryBold"
            to="/projects/blog-api"
          >
            blog API
          </Link>{' '}
          into this website has given me valuable hands-on experience with the
          full software lifecycle. I believe that understanding each stage of
          development contributes to creating reliable, scalable applications.
        </p>
      </article>
    </section>
    <section className={`textContainer-lg ${styles.goalsSection}`}>
      <h2 className="mb-xs">Current Goals</h2>
      <div className="textContainer-sm">
        <p>
          Most of my past projects focus on these foundational tools and
          technologies, which have given me a solid understanding of programming
          fundamentals. Now, I can quickly learn new languages and frameworks,
          making me adaptable to various professional settings.
        </p>
        <br />
        <p>
          As I continue to work on full-stack projects and expand my knowledge
          in
          <br />
          different technologies, my ultimate goal is to build impactful web
          applications that grow with businesses and prioritize user experience.
        </p>
        <br />
        <p>
          If you're interested in collaborating or want to learn more about my
          work, feel free to reach out!
        </p>
      </div>
    </section>
    <div className={`contentEnd ${styles.ctaContainer}`}>
      <Link className="cta" to="/contact">
        Get In Touch
      </Link>
      <Link
        className={`ctaSecondary ${styles.ctaSecondarySmaller}`}
        to="/projects"
      >
        See All Projects
      </Link>
    </div>
  </>
);

export default AboutPage;
