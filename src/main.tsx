import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root';
import App from './App';



import './index.css';


const router = createBrowserRouter([
  
      {
        path: '/',
        element: <Root />
      },
      
      {
        path: '/app',
        element: <App />
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
