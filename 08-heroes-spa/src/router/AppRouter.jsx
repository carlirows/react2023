import { createBrowserRouter } from "react-router-dom";
import { HeroesApp } from "../HeroesApp";
import { ErrorPage } from "../error-page";
import { LoginPage } from "../auth/pages/LoginPage";
import { MarvelPage, DcPage } from "../heroes";
import { HeroPage } from "../heroes/pages/HeroPage";
import { SearchHero } from "../heroes/pages/SearchHero";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <HeroesApp />,
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
            path: '/hero',
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
      element: <LoginPage />,
    },
  ]);
