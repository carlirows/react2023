import React from 'react'
import ReactDOM from 'react-dom/client'
import {AuthProvider} from './auth'
// import {HeroesApp} from './HeroesApp'
import {
  RouterProvider,
} from "react-router-dom";
import './styles.css'
import {router} from './router/AppRouter'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>      
  </React.StrictMode>,
)
