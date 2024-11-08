import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import AllProjectsPage from './AllProjectsPage';
import ProjectPage from './ProjectPage';
import Blog from './Blog';
import ArticlePage from './ArticlePage';
import AboutPage from './AboutPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: 'projects',
          element: <AllProjectsPage />,
        },
        {
          path: 'projects/:projectTitle',
          element: <ProjectPage />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'blog/articles/:articleTitle',
          element: <ArticlePage />,
        },
        {
          path: 'about',
          element: <AboutPage />,
        },
        {
          path: '*',
          element: (
            <ErrorPage
              errorMessage={
                "Oops! Looks like the page you're looking for doesn't exist."
              }
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
