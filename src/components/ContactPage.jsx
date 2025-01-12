import { Helmet } from 'react-helmet-async';
import styles from '../styles/contact-page.module.css';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact | Hannah Kim - Front-End Developer</title>
      <meta
        name="description"
        content="Get in touch with Hannah Kim, a front-end developer. Reach out for inquiries, project collaborations, or a general message."
      />
      <meta
        property="og:title"
        content="Contact | Hannah Kim - Front-End Developer"
      />
      <meta
        property="og:description"
        content="Get in touch with Hannah Kim, a front-end developer. Reach out for inquiries, project collaborations, or a general message."
      />
      <meta
        property="og:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
      <meta property="og:url" content="https://hannahkim.dev/contact/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Contact | Hannah Kim - Front-End Developer"
      />
      <meta
        name="twitter:description"
        content="Get in touch with Hannah Kim, a front-end developer. Reach out for inquiries, project collaborations, or a general message."
      />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/g29CGChX/social-card.png"
      />
    </Helmet>
    <section className={`mb-sm ${styles.introSection}`}>
      <h1>Get In Touch</h1>
      <p className={styles.introSummary}>
        Have a project in mind or just want to say hello? Send a message and
        I'll get back to you as soon as I can.
      </p>
    </section>
    <div className={`contentEnd ${styles.ctaContainer}`}>
      <a className="cta" href="mailto:hello@hannahkim.dev">
        Email Me
      </a>
      <ul className={styles.contactLinks}>
        <li>
          <a
            className="ctaSecondary"
            href="https://github.com/hannahkim313"
            target="_blank"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="ctaSecondary"
            href="https://www.linkedin.com/in/hannah-n-kim"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </>
);

export default ContactPage;
