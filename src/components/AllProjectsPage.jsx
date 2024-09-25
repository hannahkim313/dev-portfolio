import Header from './Header';
import Footer from './Footer';

const AllProjectsPage = () => (
  <>
    <Header />
    <main>
      <h1>Projects I've Created</h1>
      <p>
        With a focus on design and front-end development while exploring
        back-end technologies and databases.
      </p>
      <article>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          aliquid repudiandae quae labore animi cupiditate.
        </p>
        {/* TODO: add screenshot of project */}
      </article>
      {/* TODO: add more projects */}
    </main>
    <Footer />
  </>
);

export default AllProjectsPage;
