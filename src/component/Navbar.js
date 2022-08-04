import { NavLink } from "react-router-dom";
import logo from "../assets/movieLogo.png"
import "./navbar.scss"
export const Navbar = () => {
  return (
    <>
    <div className="head-logo">

    <img className="logo" src={logo} alt="logo"/><span className="kd">kd</span><span className="m">M</span><span className="movies">ovies</span>
    </div>
      <nav className="navbar fixed-top navbar-expand-lg">
        
        <div className="container-fluid">
            
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active " aria-current="page" to="/Home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/TvSerial">Tv Serial</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="search-inp form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
