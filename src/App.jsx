import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import './App.scss';

import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Login from './pages/login/Login';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Register from './pages/register/Register';
import ErrorPage from './components/error/ErrorPage';

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    );
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/Orders",
          element: <Orders/>
        },
        {
          path: "/add",
          element: <Add/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
