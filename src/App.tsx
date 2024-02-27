import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/scenes/home';
import Root from '@/scenes/root';
import Details from '@/scenes/details';
import Error from '@/scenes/error';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
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

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
