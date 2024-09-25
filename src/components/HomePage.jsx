import authorImgSrc from '../assets/portrait-transparent.png';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <Header />
    <main>
      <img src={authorImgSrc} alt="Digital illustration of Hannah" />
      <h1>Hi, I'm Hannah - Creative Front-End Developer</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam
        veritatis eaque itaque necessitatibus nam!
      </p>
      <h2>Featured Projects</h2>
      <article>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          veritatis impedit cum earum aliquam veniam? Autem, doloremque vel
          reiciendis dignissimos molestias commodi corrupti inventore nostrum?
        </p>
        {/* TODO: add screenshot of project */}
      </article>
      <article>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          veritatis impedit cum earum aliquam veniam? Autem, doloremque vel
          reiciendis dignissimos molestias commodi corrupti inventore nostrum?
        </p>
        {/* TODO: add screenshot of project */}
      </article>
      <article>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          veritatis impedit cum earum aliquam veniam? Autem, doloremque vel
          reiciendis dignissimos molestias commodi corrupti inventore nostrum?
        </p>
        {/* TODO: add screenshot of project */}
      </article>
      <Link to="/contact">Get in Touch</Link>
      <Link to="/projects">See all projects</Link>
    </main>
    <Footer />
  </>
);

export default HomePage;
