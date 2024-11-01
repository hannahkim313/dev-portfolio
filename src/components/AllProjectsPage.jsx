import { Link } from 'react-router-dom';
import apiImgSrc from '../assets/api-main.png';
import inventoryMateImgSrc from '../assets/inventory-mate-main.png';
import urbanThreadImgSrc from '../assets/urban-thread-main.png';
import memoryCardImgSrc from '../assets/memory-card-main.png';
import battleshipImgSrc from '../assets/battleship-main.png';
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
        <h2>My Personal Blog API</h2>
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
      <article>
        <h2>InventoryMate: Simple Inventory Management Application</h2>
        <p>
          An inventory management application built with Express and MongoDB,
          which features site-specific routes, EJS templates for dynamic views,
          and an MVC architecture to ensure a clear separation of logic. This
          project enables users to create, read, update, and delete (CRUD)
          categories and items within a structured interface.
        </p>
        <img
          src={inventoryMateImgSrc}
          alt="Screenshot of the home page of InventoryMate featuring a navigational sidebar and an overview of the application in the main content."
        />
      </article>
      <article>
        <h2>Urban Thread: Mock E-Commerce Store</h2>
        <p>
          A responsive e-commerce application powered by the FakeStore API,
          allowing users to browse products and manage items in their cart. This
          project emphasizes a user-friendly design and delivers a seamless
          shopping experience similar to that of real-world e-commerce brands.
        </p>
        <img
          src={urbanThreadImgSrc}
          alt="Screenshot of the home page of Urban Thread featuring a navigation header, promotional banner, and 3 images of models representing the (fake) brand."
        />
      </article>
      <article>
        <h2>Memory Card Game: Interactive Memory Challenge</h2>
        <p>
          An interactive memory card game developed with React to challenge
          players' memory and recall abilities. This project utilizes hooks for
          managing state and side effects while fetching card data from the
          Nintendo Amiibo API, creating a smooth user experience as players
          attempt to match pairs of cards.
        </p>
        <img
          src={memoryCardImgSrc}
          alt="Screenshot of the home page of the memory card game featuring a scoreboard at the top and 8 cards with images of different Animal Crossing characters laid out below it."
        />
      </article>
      <article>
        <h2>Battleship Game</h2>
        <p>
          A web-based recreation of the classic Battleship game designed with a
          simple user interface and interactive gameplay. This project showcases
          algorithmic thinking, grid-based logic, and player-vs-AI functionality
          for an engaging user experience.
        </p>
        <img
          src={battleshipImgSrc}
          alt="Screenshot of the gameplay featuring the player and opponent's game boards with hits and misses."
        />
      </article>
      <p>
        Check out all my projects on
        <a href="https://github.com/hannahkim313">GitHub</a>
      </p>
      <p>Like what you see? Let's collaborate and bring your ideas to life.</p>
      <Link to="/contact">Let's Connect</Link>
    </main>
    <Footer />
  </>
);

export default AllProjectsPage;
