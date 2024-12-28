import { Link } from 'react-router-dom';
import styles from '../styles/about-page.module.css';

const AboutPage = () => (
  <main className={styles.main}>
    <section className={styles.introSection}>
      <h1 className={styles.introHeading}>About Hannah Kim</h1>
      <p>
        I'm a self-taught software engineer with a background in illustration.
        Motivated by my passion for enhancing user experience through accessible
        and innovative design, I am excited to create web applications that
        combine aesthetics with practicality.
      </p>
    </section>
    <section className={styles.skillsSection}>
      <h2>Skills and Technologies</h2>
      <article className={styles.textContainer}>
        <h3>Front-End Development</h3>
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
      <article className={styles.textContainer}>
        <h3>Back-End Development</h3>
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
            className={`cta-secondary ${styles.ctaSecondaryBold}`}
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
    <section className={styles.goalsSection}>
      <h2>Current Goals</h2>
      <div className={styles.textContainer}>
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
    <div className={styles.ctaContainer}>
      <Link className="cta" to="/contact">
        Get In Touch
      </Link>
      <Link
        className={`cta-secondary ${styles.ctaSecondarySmaller}`}
        to="/projects"
      >
        See All Projects
      </Link>
    </div>
  </main>
);

export default AboutPage;
