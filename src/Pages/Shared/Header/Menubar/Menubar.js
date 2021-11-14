import React from "react";
import "./Menubar.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import logo from "../../../../assets/logo.1.png"
const Menubar = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="nav ">
      <Container>
        <Navbar.Brand>
          <img src={logo} className="w-75"alt="" />
        </Navbar.Brand>
        <Navbar.Toggle id="toggle" aria-controls="responsive-navbar-nav">
          <i className="fas fa-sliders-h"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-item" to="/home">
              Home
            </Link>
           
            <Link className="nav-item" to="/collections">
              Collections
            </Link>
            {user.email && (
              <Link className="nav-item" to="/dashboard">
                dashboard
              </Link>
            )}
             {user.email && (
              <span
                style={{ color: "rgb(197, 179, 20)", fontWeight: "900", fontSize: "17px" }}
              >
                {user?.displayName}
              </span>
            )}
            
            {user?.email ? 
               <button className="ms-3 btn  login-btn text-uppercase" onClick={logout} >Logout</button>:
             <Link className="login-btn text-decoration-none ms-3" to="/login">
                LOGIN
              </Link>
            }

            <i className="fas fa-shopping-cart mt-2 ms-2 fs-5"></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
