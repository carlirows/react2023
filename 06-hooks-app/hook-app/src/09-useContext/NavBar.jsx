import { Link, NavLink } from "react-router-dom";
export const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to={`/`} className="navbar-brand" href="#">UseContext</Link>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">           
          <NavLink
            to={`/`}
            className={`nav-link ${({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }`}
          >
            home
          </NavLink>

          <NavLink
            to={`/login`}
            className={`nav-link ${({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }`}
          >
            login
          </NavLink>

          <NavLink
            to={`/about`}
            className={`nav-link ${({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                ? "pending"
                : ""
            }`}
          >
            about
          </NavLink>

        </ul>
      </div>
    </div>
  </nav>
  )
}
