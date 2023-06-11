import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { toast } from "react-toastify";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("LogOut successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              🛍️ IndoZon
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/signup" className="nav-link">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <NavLink
                    onClick={handleLogOut}
                    to="/login"
                    className="nav-link"
                  >
                    Logut
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  🛒 Cart <sup>(0)</sup>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
