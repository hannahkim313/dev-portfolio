import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import AllProjectsPage from './AllProjectsPage';
import ProjectPage from './ProjectPage';
import Blog from './Blog';
import ArticlePage from './ArticlePage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/projects',
      element: <AllProjectsPage />,
    },
    {
      path: '/projects/:projectTitle',
      element: <ProjectPage />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/blog/articles/:articleTitle',
      element: <ArticlePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
