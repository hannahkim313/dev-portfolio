import { Link } from 'react-router-dom';
import errorImgSrc from '../assets/404.png';

const ErrorPage = () => (
  <main>
    <section>
      <h1>404</h1>
      <img src={errorImgSrc} alt="404: Page not found" />
      <p>Uh-oh! Looks like you hit a dead end.</p>
      <Link to="/">Back to home</Link>
    </section>
  </main>
);

export default ErrorPage;
