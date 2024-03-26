import React from 'react';
import { RootLayout, Account, CustomerDetails, Orders, Products, Signin } from './pages';
import { loader as productLoader } from './pages/Products/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, element: <Products />, loader: productLoader
      },
      { path: 'orders', element: <Orders /> },
      { path: 'customerdetails', element: <CustomerDetails /> },
      { path: 'account', element: <Account /> }
    ]
  },
  {
    path: '/signin',
    element: <Signin />
  }
])

const App: React.FC = () => {

  return <RouterProvider router={router} />

};

export default App;