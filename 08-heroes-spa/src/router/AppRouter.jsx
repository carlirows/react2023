import { createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { ErrorPage } from "../error-page";
import { LoginPage } from "../auth/pages/LoginPage";
import { MarvelPage, DcPage } from "../heroes";
import { HeroPage } from "../heroes/pages/HeroPage";
import { SearchHero } from "../heroes/pages/SearchHero";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute>
          <HeroesApp />        
        </PrivateRoute>,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/marvel',
            element: <MarvelPage />,
        },
        {
            path: '/dc',
            element: <DcPage/>,
        },
        {
            path: '/hero/:id',
            element: <HeroPage/>,
        },
        {
            path: '/search',
            element: <SearchHero/>,
        }
      ],
    },
    {
      path: "/login",
      element: <PublicRoute>
        <LoginPage />
      </PublicRoute>
      
    },
  ]);
