import { Link } from 'react-router-dom';

const AboutPage = () => (
  <main>
    <h1>About Hannah Kim</h1>
    <p>
      I'm a self-taught software engineer with a background in illustration.
      Motivated by my passion for enhancing user experience through accessible
      and innovative design, I am to create web applications that combine
      aesthetics with practicality.
    </p>
    <h2>Skills and Technologies</h2>
    <h3>Front-End Development</h3>
    <p>
      As a front-end developer, I work with HTML, CSS, and JavaScript to build
      responsive applications. My familiarity with React allows me to create
      reusable components, improving both maintainability and scalability.
      Because most front-end systems interact with server-side technologies, I'm
      also experienced in working with APIs using React and Axios to safely
      handle requests and manage responses. To ensure quality and reliability, I
      use Jest to thoroughly test my code.
    </p>
    <h3>Back-End Development</h3>
    <p>
      In order to broaden my skills and gain a well-rounded understanding of
      front-end responsibilities, I've also explored back-end technologies like
      Node.js and Express, along with database tools such as PostgreSQl, Prisma,
      MongoDB, and Mongoose.
    </p>
    <p>
      Although my primary focus is front-end development, building and
      integrating my own <Link to="/projects/blog-api">blog API</Link> into this
      website has given me valuable hands-on experience with the full software
      lifecycle. I believe that understanding each stage of development
      contributes to creating reliable, scalable applications.
    </p>
    <h2>Current Goals</h2>
    <p>
      Most of my past projects focus on these foundational tools and
      technologies, which have given me a solid understanding of programming
      fundamentals. Now, I can quickly learn new languages and frameworks,
      making me adaptable to various professional settings. As I continue to
      work on full-stack projects and expand my knowledge in different
      technologies, my ultimate goal is to build impactful web applications that
      grow with businesses and prioritize user experience.
    </p>
    <p>
      If you're interested in collaborating or want to learn more about my work,
      feel free to reach out!
    </p>
    <Link to="/contact">Get In Touch</Link>
    <Link to="/projects">See All Projects</Link>
  </main>
);

export default AboutPage;
