import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/scenes/home';
import Root from '@/scenes/root';
import Details from '@/scenes/details';
import Error from '@/scenes/error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: ':countryId',
          element: <Details />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
