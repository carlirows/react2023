import { Outlet } from "react-router-dom"
import { Navbar } from "./ui/components/NavBar"
// import { AuthProvider } from "./auth"

export const HeroesApp = () => {
  return (
    <>
        <Navbar />
          <div className="container">
            <Outlet/>
          </div>
    </>
  )
}
