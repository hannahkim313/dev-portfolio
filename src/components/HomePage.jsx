import { Link, Outlet, useLocation } from 'react-router-dom';
import authorImgSrc from '../assets/portrait-transparent.png';
import apiImgSrc from '../assets/api-main.png';
import urbanThreadImgSrc from '../assets/urban-thread-main.png';
import battleshipImgSrc from '../assets/battleship-main.png';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';

  const mainContent = (
    <main>
      <img src={authorImgSrc} alt="Digital illustration of Hannah" />
      <h1>Hi, I'm Hannah - Creative Front-End Developer</h1>
      <p>
        Building beautiful, responsive websites with a focus on user experience.
      </p>
      <h2>Featured Projects</h2>
      <Link to="/projects/blog-api">
        <article>
          <h3>My Personal Blog API</h3>
          <p>
            A full-stack blog platform built with Prisma, PostgreSQL, and
            Node/Express.js. This project features role-based authentication, a
            secure comments system, and effective article management. Users can
            view published articles while the author has the ability to create,
            edit, and manage content dynamically.
          </p>
          <img
            src={apiImgSrc}
            alt="Screenshot of the main configuration file displaying the API's overall structure."
          />
        </article>
      </Link>
      <Link to="/projects/mock-e-commerce-store">
        <article>
          <h3>Urban Thread: Mock E-Commerce Store</h3>
          <p>
            A responsive e-commerce application powered by the FakeStore API,
            allowing users to browse products and manage items in their cart.
            This project emphasizes a user-friendly design and delivers a
            seamless shopping experience similar to that of real-world
            e-commerce brands.
          </p>
          <img
            src={urbanThreadImgSrc}
            alt="Screenshot of the home page of Urban Thread featuring a navigation header, promotional banner, and 3 images of models representing the (fake) brand."
          />
        </article>
      </Link>
      <Link to="/projects/battleship">
        <article>
          <h3>Battleship Game</h3>
          <p>
            A web-based recreation of the classic Battleship game designed with
            a simple user interface and interactive gameplay. This project
            showcases algorithmic thinking, grid-based logic, and player-vs-AI
            functionality for an engaging user experience.
          </p>
          <img
            src={battleshipImgSrc}
            alt="Screenshot of the gameplay featuring the player and opponent's game boards with hits and misses."
          />
        </article>
      </Link>
      <Link to="/contact">Get in Touch</Link>
      <Link to="/projects">See All Projects</Link>
    </main>
  );

  return (
    <>
      <Header />
      {isHome ? mainContent : <Outlet />}
      <Footer />
    </>
  );
};

export default HomePage;
