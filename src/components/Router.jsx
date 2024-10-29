import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import AllProjectsPage from './AllProjectsPage';
import ProjectPage from './ProjectPage';
import Blog from './Blog';

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
      path: '/blog/articles',
      element: <Blog />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
