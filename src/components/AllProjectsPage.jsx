import { Link } from 'react-router-dom';
import apiImgSrc from '../assets/api-main.png';
import apiCarousel1 from '../assets/api-carousel-1.png';
import apiCarousel2 from '../assets/api-carousel-2.png';
import apiCarousel3 from '../assets/api-carousel-3.png';
import apiCarousel4 from '../assets/api-carousel-4.png';
import apiCarousel5 from '../assets/api-carousel-5.png';
import inventoryMateImgSrc from '../assets/inventory-mate-main.png';
import inventoryMateCarousel1 from '../assets/inventory-mate-carousel-1.png';
import inventoryMateCarousel2 from '../assets/inventory-mate-carousel-2.png';
import inventoryMateCarousel3 from '../assets/inventory-mate-carousel-3.png';
import inventoryMateCarousel4 from '../assets/inventory-mate-carousel-4.png';
import inventoryMateCarousel5 from '../assets/inventory-mate-carousel-5.png';
import urbanThreadImgSrc from '../assets/urban-thread-main.png';
import urbanThreadCarousel1 from '../assets/urban-thread-carousel-1.png';
import urbanThreadCarousel2 from '../assets/urban-thread-carousel-2.png';
import urbanThreadCarousel3 from '../assets/urban-thread-carousel-3.png';
import memoryCardImgSrc from '../assets/memory-card-main.png';
import memoryCardCarousel1 from '../assets/memory-card-carousel-1.png';
import memoryCardCarousel2 from '../assets/memory-card-carousel-2.png';
import memoryCardCarousel3 from '../assets/memory-card-carousel-3.png';
import battleshipImgSrc from '../assets/battleship-main.png';
import battleshipCarousel1 from '../assets/battleship-carousel-1.png';
import battleshipCarousel2 from '../assets/battleship-carousel-2.png';

const AllProjectsPage = () => (
  <main>
    <h1>Projects I've Created</h1>
    <p>
      With a focus on design and front-end development while exploring back-end
      technologies and databases.
    </p>
    <Link
      to="/projects/blog-api"
      state={{
        title: 'My Personal Blog API',
        date: 'Nov 2024',
        description: `A full-stack blog platform built with Prisma, PostgreSQL,
          and Node/Express.js. This project features role-based authentication,
          a secure comments system, and effective article management. Users can
          view published articles while the author has the ability to create,
          edit, and manage content dynamically.`,
        mainImg: {
          apiImgSrc,
          alt: `Screenshot of the main configuration file displaying the API's 
            overall structure.`,
        },
        features: [
          `User authentication and authorization are handled through login and
            registration functionalities, with role-based assignment for access 
            control.`,
          `Data is managed using PostgreSQL and Prisma, simplifying database
            queries for efficient data handling.`,
          `Security is enhanced by validating and sanitizing input data to
            prevent errors and malicious input.`,
          `Error handling is centralized through middleware, ensuring consistent
            error responses and user-friendly messages.`,
          `Routing is structured with separate routes for authentication,
            articles, and comments, keeping the API organized and
            maintainable.`,
        ],
        techStack: [
          'Node.js and Express',
          'PostgreSQL',
          'Prisma',
          'React',
          'Postman',
          'Render',
          'Neon',
        ],
        carousel: {
          1: {
            apiCarousel1,
            alt: `Screenshot of the authentication and authorization route
              structure.`,
          },
          2: {
            apiCarousel2,
            alt: `Screenshot of the user verification process using
              jsonwebtoken.`,
          },
          3: {
            apiCarousel3,
            alt: `Screenshot of the user authentication configuration using
              Passport.js and jsonwebtoken.`,
          },
          4: {
            apiCarousel4,
            alt: 'Screenshot of the validation and sanitization process.',
          },
          5: {
            apiCarousel5,
            alt: `Screenshot of the authentication and authorization controller
              functions that handle requests.`,
          },
        },
        liveLink: null,
        sourceCode: 'https://github.com/hannahkim313/blog-api',
      }}
    >
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
          alt={`Screenshot of the main configuration file displaying the API's
            overall structure.`}
        />
      </article>
    </Link>
    <Link
      to="/projects/inventory-management-application"
      state={{
        title: 'InventoryMate: A Simple Inventory Management Application',
        date: 'May 2024',
        description: `An inventory management application built with Express
          and MongoDB, which features site-specific routes, EJS templates for
          dynamic views, and an MVC architecture to ensure a clear separation of
          logic. This project enables users to create, read, update, and delete
          (CRUD) categories and items within a structured interface.`,
        mainImg: {
          inventoryMateImgSrc,
          alt: `Screenshot of the home page of InventoryMate featuring a
            navigational sidebar and an overview of the application in the main
            content.`,
        },
        features: [
          `Inventory data management uses MongoDB with Mongoose to handle
            categories and items within the database.`,
          `The application is structured using the MVC pattern, organizing logic
            into models, views, and controllers for clear separation of
            concerns.`,
          `Routes are set up to return specific resources and views, making
            navigation intuitive for users and the application easier to
            maintain.`,
          `CRUD functionality is fully implemented, allowing users to create,
            read, update, and delete categories and items.`,
          `Forms are designed with EJS templates for dynamic data handling
            of form submissions.`,
          `User inputs are validated and sanitized with centralized error
            handling for consistent management,`,
        ],
        techStack: ['Node.js and Express', 'MongoDB', 'Mongoose', 'Glitch'],
        carousel: {
          1: {
            inventoryMateCarousel1,
            alt: 'Screenshot of all items in the application.',
          },
          2: {
            inventoryMateCarousel2,
            alt: 'Screenshot of a specific item detail page.',
          },
          3: {
            inventoryMateCarousel3,
            alt: 'Screenshot of the form to update an item.',
          },
          4: {
            inventoryMateCarousel4,
            alt: `Screenshot of the painting category with all its items
              listed.`,
          },
          5: {
            inventoryMateCarousel5,
            alt: 'Screenshot of the form to update a category.',
          },
        },
        liveLink: 'https://scented-rowan-star.glitch.me/catalog',
        sourceCode: 'https://github.com/hannahkim313/inventory-app',
      }}
    >
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
    </Link>
    <Link
      to="/projects/mock-e-commerce-store"
      state={{
        title: 'Urban Thread: Mock E-Commerce Store',
        date: 'July 2024',
        description: `A responsive e-commerce application powered by the
          FakeStore API, allowing users to browse products and manage items in
          their cart. This project emphasizes a user-friendly design and
          delivers a seamless shopping experience similar to that of real-world
          e-commerce brands.`,
        mainImg: {
          urbanThreadImgSrc,
          alt: `Screenshot of the home page of Urban Thread featuring a
            navigation header, promotional banner, and 3 images of models
            representing the (fake) brand.`,
        },
        features: [
          `Product data is dynamically fetched from the FakeStore API,
            simulating a realistic shopping experience for users with product
            details and categories.`,
          `Client-side routing is handled with React Router, allowing users to
            navigate between product listings, individual product pages,
            and the shopping cart.`,
          `State management ensures that the shopping cart and product
            selections persist as users explore the store.`,
          `Components are styles with CSS Modules to enable modular and scoped
            styling for a cleaner codebase.`,
          `PropTypes are used for type-checking component props, helping to
            prevent runtime errors.`,
          `Testing is conducted with Jest and Vitest to ensure the stability of
            components and interactions.`,
        ],
        techStack: [
          'React',
          'React Router',
          'FakeStore API',
          'Jest and Vitest',
          'CSS Modules',
          'PropTypes',
        ],
        carousel: {
          1: {
            urbanThreadCarousel1,
            alt: "Screenshot of all products in the men's clothing category",
          },
          2: {
            urbanThreadCarousel2,
            alt: `Screenshot of a product detail page, featuring the product
              title, average 5-star rating, total number of reviews, price,
              product description, and options to add the product to the bag
              or add to the favorites.`,
          },
          3: {
            urbanThreadCarousel3,
            alt: `Screenshot of the shopping cart, displaying all products
              in the cart with their quantity and price as well as the order
              summary with the order total.`,
          },
        },
        liveLink: 'https://shopping-cart-c0j.pages.dev/',
        sourceCode: 'https://github.com/hannahkim313/shopping-cart',
      }}
    >
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
          alt={`Screenshot of the home page of Urban Thread featuring a
            navigation header, promotional banner, and 3 images of models
            representing the (fake) brand.`}
        />
      </article>
    </Link>
    <Link
      to="/projects/memory-card-game"
      state={{
        title: 'Memory Card Game: Interactive Memory Challenge',
        date: 'Dec 2023',
        description: `An interactive memory card game developed with React to
          challenge players' memory and recall abilities. This project utilizes
          hooks for managing state and side effects while fetching card data
          from the Nintendo Amiibo API, creating a smooth user experience as
          players attempt to match pairs of cards.`,
        mainImg: {
          memoryCardImgSrc,
          alt: `Screenshot of the home page of the memory card game featuring a
            scoreboard at the top and 8 cards with images of different Animal
            Crossing characters laid out below it.`,
        },
        features: [
          `Card images are dynamically fetched from the Nintendo Amiibo API,
            handling side effects appropriately.`,
          `Current and high scores are tracked through state management,
            allowing players to monitor their progress and aim for higher
            scores.`,
          `Game logic is powered by a simple algorithm that shuffles cards each
            round, offering a challenge every time the game is played.`,
        ],
        techStack: ['React', 'JavaScript', 'npm'],
        carousel: {
          1: {
            memoryCardCarousel1,
            alt: 'Screenshot of a successful round.',
          },
          2: {
            memoryCardCarousel2,
            alt: 'Screenshot of the game when a player loses.',
          },
          3: {
            memoryCardCarousel3,
            alt: 'Screenshot of the game when a player wins.',
          },
        },
        liveLink: 'https://memory-card-ehz.pages.dev/',
        sourceCode: 'https://github.com/hannahkim313/memory-card',
      }}
    >
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
          alt={`Screenshot of the home page of the memory card game featuring a
            scoreboard at the top and 8 cards with images of different Animal
            Crossing characters laid out below it.`}
        />
      </article>
    </Link>
    <Link
      to="/projects/battleship"
      state={{
        title: 'Battleship Game',
        date: 'Nov 2023',
        description: `A web-based recreation of the classic Battleship game
          designed with a simple user interface and interactive gameplay. This
          project showcases algorithmic thinking, grid-based logic, and
          player-vs-AI functionality for an engaging user experience.`,
        mainImg: {
          battleshipImgSrc,
          alt: `Screenshot of the gameplay featuring the player and opponent's
            game boards with hits and misses.`,
        },
        features: [
          `Pure JavaScript application created to strengthen programming
            fundamentals without frameworks, focusing on core logic and
            DOM manipulation.`,
          `Modular design to separate app logic from DOM manipulation and uses
            factory functions for Ship, Gameboard, and Ship objects to maintain
            clean and organized code.`,
          `Interactive gameplay driven by event listeners that allow players to
            place ships, adjust positions, and attack the opponent's board, with
            color indicators (red for hits, blue for misses, and grey for
            ships) to provide visual feedback.`,
          `Single-player mode featuring a computer opponent that makes random
            moves, adding a challenge for solo gameplay.`,
          `Test-Driven Development with Jest, ensuring reliable game mechanics
            and smooth interactions through unit testing.`,
        ],
        techStack: [
          'JavaScript',
          'Factory Design Pattern',
          'Jest',
          'Webpack',
          'HTML/CSS',
        ],
        carousel: {
          1: {
            battleshipCarousel1,
            alt: 'Screenshot of the ship placement phase.',
          },
          2: {
            battleshipCarousel2,
            alt: `Screenshot of the gameplay between the player and the
              opponent, displaying both gameboards with hits, misses, and ships
              displayed on each board.`,
          },
        },
        liveLink: 'https://hannahkim313.github.io/battleship/',
        sourceCode: 'https://github.com/hannahkim313/battleship',
      }}
    >
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
          alt={`Screenshot of the gameplay featuring the player and opponent's
            game boards with hits and misses.`}
        />
      </article>
    </Link>
    <p>
      Check out all my projects on
      <a href="https://github.com/hannahkim313">GitHub</a>
    </p>
    <p>Like what you see? Let's collaborate and bring your ideas to life.</p>
    <Link to="/contact">Let's Connect</Link>
  </main>
);

export default AllProjectsPage;
