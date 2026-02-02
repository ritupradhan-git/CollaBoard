import Landing from '../pages/landing/Landing';
import Register from '../pages/auth/register/Register';
import Login from '../pages/auth/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Canvas from '../canvas/Canvas';
import React from 'react';

const routes = {
  public: [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ],
  app: [
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/canvas',
      element: <Canvas />,
    },
    //   {
    //     path: "*",
    //     element: <NotFound />,
    //   },
  ],
};

export default routes;
