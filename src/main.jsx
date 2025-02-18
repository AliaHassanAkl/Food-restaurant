import React, { StrictMode } from 'react'
import  ReactDOM from 'react-dom'
import  createRoot  from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom';
import Layout from './componants/Layout/Layout.jsx';
import Home from './componants/Home/Home.jsx';
import Notfound from './componants/Notfound/Notfound.jsx'
import About from './componants/Home/About.jsx'
import Explore from './componants/Explore/Explore.jsx'

const router= createBrowserRouter([
  {
    path:'/',element:<Layout/>,
    children:[
      { path: "/", element: <Navigate to="/home" replace /> },
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'explore',element:<Explore/>}
    ],
    errorElement:<Notfound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router }/>
  </React.StrictMode>
)

