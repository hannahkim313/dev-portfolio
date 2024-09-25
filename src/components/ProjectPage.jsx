import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ProjectPage = () => (
  <>
    <Header />
    <aside>
      <div>
        <h3>Live Link</h3>
        <a href="">View Demo</a>
        <h3>Source Code</h3>
        <a href="">View Source Code</a>
      </div>
      <div>
        <h3>Technologies Used</h3>
        {/* TODO: add a list */}
      </div>
      <div>
        <h3>Key Takeaways</h3>
        {/* TODO: add list */}
      </div>
    </aside>
    <main>
      <h1>Title</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eum
        sapiente in minus laudantium aspernatur?
      </p>
      {/* TODO: add screenshot of project */}
      <h2>Features Overview</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quis
        recusandae tempora laboriosam asperiores dolores! Doloribus dolores at
        veniam. Non nobis, nemo provident reiciendis alias atque, pariatur
        recusandae unde cum nostrum incidunt quaerat. Repudiandae nostrum nemo
        illum recusandae numquam, eligendi quibusdam! Officiis vitae nulla hic
        laboriosam saepe cupiditate consectetur fugit!
      </p>
      <h2>Development Cycle</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae
        id, doloribus itaque explicabo ea rem corporis nostrum totam voluptate
        eius error enim dolorum ab, consequatur nisi est porro aut commodi.
        Esse, voluptate quaerat. Obcaecati sapiente rem quidem eveniet
        temporibus. Ratione inventore voluptatum fugit praesentium ullam ad
        numquam, eum odit?
      </p>
      <hr />
      <p>Like what you see? Let's collaborate and bring your ideas to life.</p>
      <Link to="/contact">Let's Connect</Link>
    </main>
    <Footer />
  </>
);

export default ProjectPage;
