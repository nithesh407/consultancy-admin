import React from 'react';
import { RootLayout, Account, CustomerDetails, Orders, Products } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Products /> },
      { path: 'orders', element: <Orders /> },
      { path: 'customerdetails', element: <CustomerDetails /> },
      { path: 'account', element: <Account /> }
    ]
  }
])

const App: React.FC = () => {

  return <RouterProvider router={router} />

};

export default App;