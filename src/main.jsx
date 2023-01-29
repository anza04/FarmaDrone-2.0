import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import Login from './routes/login'
import Home from './routes/home'
import Registrati from './routes/registrati'
import Account from './routes/Account'
import Catalogo from './routes/catalogo'
import Assistenza from './routes/assistenza'
//import ErrorPage from './error-page'
import { BrowserRouter as Router, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root />,
    //errorElement: <ErrorPage/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "catalogo",
    element: <Catalogo/>
  },
  {
    path: "account",
    element: <Account/>
  },
  {
    path: "assistenza",
    element: <Assistenza/>
  },
  {
    path: "registrati",
    element: <Registrati/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

