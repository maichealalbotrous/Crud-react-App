import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import AddUser from './pages/AddUserPage/AddUser';
import { BrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/AddUser",
    element: <AddUser />,
    errorElement: <h1>SORROY.........</h1>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <App />  
    </BrowserRouter>
    </React.StrictMode>
);


