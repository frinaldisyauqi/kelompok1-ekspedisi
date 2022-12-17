import React from "react";
import { Link } from "react-router-dom";

function HeaderAdmin() {
    return (
        <header className="header fixed-top d-flex align-items-center" id="header">
        <div className="container d-flex align-items-center justify-content-between"><a className="logo d-flex align-items-center me-auto me-lg-0" href="/"><img src="images/logo.png" alt=""/>
            <h1>Express<span>.</span></h1></a>
          <nav className="navbar" id="navbar">
            <ul>
              <li><Link to={'/shippingorder'} className="mx-5">Shipping Order</Link></li>
              <li><Link to={'/pengiriman'} className="mx-5">Pengiriman</Link></li>
            </ul>
          </nav><a className="btn-sign-in px-5" data-bs-toggle="modal" data-bs-target="#loginModal">Sign In</a><i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i><i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    )
}

export default HeaderAdmin