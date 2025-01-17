import apiImgSrc from '../assets/api-main.png';
import inventoryMateImgSrc from '../assets/inventory-mate-main.png';
import urbanThreadImgSrc from '../assets/urban-thread-main.png';
import memoryCardImgSrc from '../assets/memory-card-main.png';
import battleshipImgSrc from '../assets/battleship-main.png';

const projects = [
  {
    title: 'Personal Blog API',
    date: 'Nov 2024',
    description: `A full-stack blog platform built with Prisma, PostgreSQL,
      and Node/Express.js. This project features role-based authentication,
      a secure comments system, and effective article management. Users can
      view published articles while the author has the ability to create,
      edit, and manage content dynamically.`,
    mainImg: {
      src: apiImgSrc,
      alt: '',
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
    liveLink: null,
    sourceCode: 'https://github.com/hannahkim313/blog-api',
    projectLink: '/projects/blog-api',
    isFeatured: true,
  },
  {
    title: 'InventoryMate: Inventory Management Application',
    date: 'May 2024',
    description: `An inventory management application built with Express
      and MongoDB, featuring site-specific routes, EJS templates for
      dynamic views, and an MVC architecture. This project enables users to
      create, read, update, and delete (CRUD) categories and items within a
      structured interface.`,
    mainImg: {
      src: inventoryMateImgSrc,
      alt: '',
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
    liveLink: 'https://scented-rowan-star.glitch.me/catalog',
    sourceCode: 'https://github.com/hannahkim313/inventory-app',
    projectLink: '/projects/inventory-management-application',
    isFeatured: false,
  },
  {
    title: 'Urban Thread: Mock E-Commerce Store',
    date: 'July 2024',
    description: `A responsive e-commerce application powered by the
      FakeStore API, allowing users to browse products and manage items in
      their cart. This project emphasizes a user-friendly design and
      delivers a seamless shopping experience similar to that of real-world
      e-commerce brands.`,
    mainImg: {
      src: urbanThreadImgSrc,
      alt: '',
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
      `Components are styled with CSS Modules to enable modular and scoped
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
    liveLink: 'https://shopping-cart-c0j.pages.dev/',
    sourceCode: 'https://github.com/hannahkim313/shopping-cart',
    projectLink: '/projects/mock-e-commerce-store',
    isFeatured: true,
  },
  {
    title: 'Memory Game: Interactive Memory Challenge',
    date: 'Dec 2023',
    description: `An interactive memory card game developed with React to
      challenge players' memory and recall abilities. This project utilizes
      hooks for managing state and side effects while fetching card data
      from the Nintendo Amiibo API, creating a smooth user experience as
      players attempt to match pairs of cards.`,
    mainImg: {
      src: memoryCardImgSrc,
      alt: '',
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
    liveLink: 'https://memory-card-ehz.pages.dev/',
    sourceCode: 'https://github.com/hannahkim313/memory-card',
    projectLink: '/projects/memory-card-game',
    isFeatured: false,
  },
  {
    title: 'Battleship Game',
    date: 'Nov 2023',
    description: `A web-based recreation of the classic Battleship game
      designed with a simple user interface and interactive gameplay. This
      project showcases algorithmic thinking, grid-based logic, and
      player-vs-AI functionality for an engaging user experience.`,
    mainImg: {
      src: battleshipImgSrc,
      alt: '',
    },
    features: [
      `Pure JavaScript application created to strengthen programming
      fundamentals without frameworks, focusing on core logic and
      DOM manipulation.`,
      `Modular design to separate app logic from DOM manipulation and uses
      factory functions for Ship, Gameboard, and Player objects to maintain
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
    liveLink: 'https://hannahkim313.github.io/battleship/',
    sourceCode: 'https://github.com/hannahkim313/battleship',
    projectLink: '/projects/battleship',
    isFeatured: true,
  },
];

export default projects;
