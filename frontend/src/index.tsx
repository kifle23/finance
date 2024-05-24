import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { searchCompanies } from './api';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(searchCompanies('tsla'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);

