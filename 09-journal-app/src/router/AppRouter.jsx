import {
    createBrowserRouter,
    Navigate,
    // RouterProvider
  } from "react-router-dom";
// import { AppJournal } from "../AppJournal";
import { JournalPage } from "../journal/pages/JournalPage";
// import { router as authRouter } from "../auth/routes/AuthRoutes";
import { LoginPage, RegisterPage } from "../auth/pages";


  export const router = createBrowserRouter([
    {
        path: '/',
        element: <JournalPage />,
        children: [



          ],
    },
    {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/*",
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "/auth/login",
        element: <LoginPage />,
      },

  ]);
  