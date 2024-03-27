import React, { useEffect } from 'react';
import { RootLayout, Account, CustomerDetails, Orders, Products, Signin } from './pages';
import { loader as productLoader } from './pages/Products/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { handleLogin } from './lib';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: productLoader,
      },
      { path: 'orders', element: <Orders /> },
      { path: 'customerdetails', element: <CustomerDetails /> }
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
]);

const App: React.FC = () => {
  useEffect(() => {
    handleLogin()
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
