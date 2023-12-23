import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./../style/Navbar.css";
import { Link } from "react-router-dom";

function Navbarr() {
  return (
    <div className="Navbar">
      {/*Navbar1 */}
      <div className="Navbar1">
        <div className="Navbar1-ls">
          {/*  Dropdown2*/}

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <p>$USD</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">EGP</Dropdown.Item>
              <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/*  Dropdown2*/}

          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <p>English</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Arabic</Dropdown.Item>
              <Dropdown.Item href="#/action-2">French</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="Navbar1-rs">
          <p>My Account</p>
          <p>Wishlist</p>
          <p>My Cart</p>
          <p>Check out</p>
          <p>Log In</p>
        </div>
      </div>

      <hr className="Line" />

      {/*Navbar2 */}
      <div className="Navbar2">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand className="Shoping">Shoping Bag</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" Navbar2-data">
                <div className="search">
                  <Dropdown className="search-dropdown">
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      Dropdown Button
                    </Dropdown.Toggle>
                  </Dropdown>
                  <input type="search" />

                  <FaMagnifyingGlass className="magnifity" />
                </div>

                <div className="Navbar2-cener-icons">
                  <CiShoppingCart />
                  <CiHeart />
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <hr className="Line" />

      {/*Navbar3 */}

      <div className="Navbar3">
        <Navbar expand="lg" className="">
          <Container>
          <Navbar.Brand className="Shoping"><span className="Home">Home</span></Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="Navbar3-data">
                <Link className="link" to="home">
                  <p>Closes</p>
                </Link>
                <Link className="link" to="home">
                  <p>Electronics</p>
                </Link>
                <Link className="link" to="home">
                  <p>Blog</p>
                </Link>
                <Link className="link" to="home">
                  <p>watches</p>
                </Link>
                <Link className="link" to="home">
                  <p>pages</p>
                </Link>
                <Link className="link" to="home">
                  <p>contact</p>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navbarr;
