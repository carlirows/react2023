import React from 'react'
import ReactDOM from 'react-dom/client'
import {  RouterProvider  } from "react-router-dom";
import { router } from './router/AppRouter.jsx'
import './styles.css'
import { AppTheme } from './theme/AppTheme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  </React.StrictMode>,
)
