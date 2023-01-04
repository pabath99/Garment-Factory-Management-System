import React from 'react';

function JobHeader() {

    return(
    <nav className="navbar navbar-dark fixed-top" style={{ backgroundColor: "#283342" }} >
   <div className="container-fluid">
    
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#">
    <p style={{ fontFamily: "cera pro" }}>Lakshika Garments PVT </p>
    </a>
    <div
      className="offcanvas offcanvas-end"
      style={{ backgroundColor: "#283342" }}
      tabIndex={-1}
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div className="offcanvas-header">
        <h3 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{ color: "white" }}>
          Welcome!
        </h3>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">


      <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
        </form>

        <br></br>
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/Jdash">
              Dashboard
            </a>
          </li>
          
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Orders
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <a className="dropdown-item" href="#">
                  Sample Details
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Main Order Details
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/workplan">
              Work Plan
            </a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/progress">
              Work Progress
            </a>
          </li>
          
        </ul>
        <br></br><br></br><br></br>
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel" style={{ color: "white" }}>
          Sign out
        </h5>
      </div>
    </div>
  </div>
</nav>


    )

}

export default JobHeader;