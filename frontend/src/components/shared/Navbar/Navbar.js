import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const handleLogout = () => {
      // Remove token from local storage
      localStorage.removeItem('token');
      // Refresh page to update UI
      window.location.reload();
    }

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <nav className="navbar  navbar-expand-lg navbar-light shadow-5-strong">
      <div className="container-fluid">
        <Link className="navbar-brand " to="/">
          <h1
            style={{ fontWeight: "bold", color: "rgba(240, 248, 255, 0.726)" }}
          >
            EXAM PORTAL
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          {loggedIn ? (
            <>
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-center"
                style={{ bsScrollHeight: "300px", marginLeft: "10px" }}
              >
                <li className="nav-item">
                  <Link
                    style={{ margin: "3px" }}
                    className=" btn btn-outline-info text-white"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    style={{ margin: "3px" }}
                    className=" btn btn-outline-info text-white"
                    to="./Exam"
                  >
                    e-Exam
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    style={{ margin: "3px" }}
                    className=" btn btn-outline-info text-white "
                    to="/Openforum"
                  >
                    Open Forum
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    style={{ margin: "3px" }}
                    className=" btn btn-outline-info text-white"
                    to="/Profile"
                  >
                    My Wall
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ margin: "3px" }}
                    className=" btn btn-outline-info text-white"
                    to="/Repository"
                  >
                    e-Repository
                  </Link>
                </li>
              </ul>
              <Link
              to="/"
                style={{ width: "9%" }}
                className="btn btn-primary btn-lg "
                id=""
                onClick={handleLogout}
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll justify-content-center"
                style={{ bsScrollHeight: "300px", marginLeft: "10px" }}
              >
                <li className="nav-item">
                  <Link
                    style={{ margin: "3px" }}
                    className="btn btn-outline-info text-white"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <Link
                  style={{ margin: "3px" }}
                  className="btn btn-primary btn-lg "
                  to="/Login"
                  id=""
                >
                  Login
                </Link>
                <Link
                  style={{ margin: "3px" }}
                  className="btn btn-primary btn-lg "
                  to="/Signup"
                  id=""
                >
                  Register
                </Link>
              </form>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
