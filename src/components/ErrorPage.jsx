import { Link } from 'react-router-dom';
import errorImgSrc from '../assets/error.png';

const ErrorPage = ({ errorMessage }) => (
  <main>
    <section>
      <h1>Something went wrong!</h1>
      <img
        src={errorImgSrc}
        alt="A digital illustration of a wooden sign that states 'Dead end.'"
      />
      <p>{errorMessage}</p>
      <Link to="/">Back to home</Link>
    </section>
  </main>
);

export default ErrorPage;
