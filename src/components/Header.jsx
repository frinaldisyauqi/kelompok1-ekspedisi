import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [active, setActive] = useState(false);
  const activeClick = event => {
    setActive(current => !current);
  }
  
    return (
        <header className="header fixed-top d-flex align-items-center border-bottom" id="header">
          <div className="container d-flex align-items-center justify-content-between px-0">
            <Link className="logo d-flex align-items-center me-auto me-lg-0" to={'/'}>
              <img src="images/logo.png" alt=""/>
              <h1>Express<span>.</span></h1></Link>
            <nav className="navbar" id="navbar">
              <ul>
                <li><Link to={'/resi'} className={active ? 'mx-5 active' : 'mx-5'} onClick={() => activeClick()}>Cek Resi</Link></li>
                <li><Link to={'/ongkir'} className={active ? 'mx-5 active' : 'mx-5'} onClick={() => activeClick()}>Cek Ongkir</Link></li>
                <li><Link to={'/contact'} className={active ? 'mx-5 active' : 'mx-5'} onClick={() => activeClick()}>Contact</Link></li>
              </ul>
            </nav><a className="btn-sign-in px-5" data-bs-toggle="modal" data-bs-target="#loginModal">Sign In</a><i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i><i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          </div>
        </header>
    )
}

export default Header