import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component{
    render(){
        return(
            <div>
                <header class="sticky-top top-0">
    <div class="container-lg ">
      <div class="row">
        <nav class="navbar navbar-expand-lg">
          <div class="logo">
            <img src="img/logo.png" class="navbar-brand ms-xl-5" width="290px" height="120px" alt="" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynav"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="mynav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><Link to="/" class="nav-link text-black">Home</Link></li>
              <li class="nav-item"><Link to='/about' class="nav-link text-black">About Us</Link></li>
              <li class="nav-item dropdown ">
                <a href="" class="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">
                  Services
                </a>
                <div class="dropdown-menu " data-bs-toggle="dropdown ">
                  <Link to="/Quantative" class="dropdown-item ">Quantative</Link>
                  <Link to="/Qualatative" class="dropdown-item ">Qualatative</Link>
                  <Link to="/Others" class="dropdown-item ">Other Services</Link>
                </div>
              </li>
              <li class="nav-item"><Link to="/Industry" class="nav-link text-black">Industry</Link></li>
              <li class="nav-item"><Link to='/coverage' class="nav-link text-black ">Coverage</Link></li>
              <li class="nav-item"><Link to='/Contact' class="nav-link text-black">Contact Us</Link></li>
            </ul>
            <Link to="/Panel" class="btn btn-success  me-2">Join Our Panel</Link>

          </div>
     

        </nav>
      </div>

    </div>
  </header>
            </div>
        )
    }
};

export default Header;