// import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useSate/CounterApp'
// import { CounterWithCustomHook } from './01-useSate/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
 import {ErrorPage} from './error-page.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LoginPage } from './09-useContext/LoginPage';
import { AboutPage } from './09-useContext/AboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login/",
        element: <LoginPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about/", 
        element: <AboutPage/>,
        errorElement: <ErrorPage />,
      }
    ],  
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
