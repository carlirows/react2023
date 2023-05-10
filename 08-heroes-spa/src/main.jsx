import React from 'react'
import ReactDOM from 'react-dom/client'
// import {HeroesApp} from './HeroesApp'
import {
  RouterProvider,
} from "react-router-dom";
import './styles.css'
import {router} from './router/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)