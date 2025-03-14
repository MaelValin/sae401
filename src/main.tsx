import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import App from './App';
import Login from './routes/login';
import Connexion from './routes/connexion';
import Dashboard from './routes/dashboard';
import Dashmember from './routes/dashmember';
import Actuality from './routes/actuality';
import Postpage from './routes/postpage';


import './index.css';
import { Navigate } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/connexion" replace />
  },
  {
    path: '/app',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/connexion',
    element: <Connexion />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
  path:"/dashmember/:id", 
  element:<Dashmember />

  },
  {
    path: '/actuality',
    element: <Actuality />
  },
  {
    path: '/postpage',
    element: <Postpage />
  },
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  console.error('No root element found');
}
