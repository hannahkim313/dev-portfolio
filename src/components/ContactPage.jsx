import Layout from './Layout';
import styles from '../styles/contact-page.module.css';

const ContactPage = () => (
  <Layout>
    <section className={`mb-sm ${styles.introSection}`}>
      <h1>Get In Touch</h1>
      <p className={styles.introSummary}>
        Have a project in mind or just want to say hello? Send a message and
        I'll get back to you as soon as I can.
      </p>
    </section>
    <div className={`contentEnd ${styles.ctaContainer}`}>
      <a className="cta" href="mailto:devhkim.contact@gmail.com">
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
  </Layout>
);

export default ContactPage;
