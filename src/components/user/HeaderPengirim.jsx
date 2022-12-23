import React from "react";
import { Link } from "react-router-dom";

function HeaderPengirim() {
  const navigate = useNavigate();
  const signOut = useSignOut();
  const auth = useAuthUser();

  const Logout =  () => {
      try {
          signOut();
          navigate("/");
      } catch (error) {
          console.log(error);
      }
  }
    return (
        <header className="header fixed-top d-flex align-items-center" id="header">
        <div className="container d-flex align-items-center justify-content-between">
          <Link className="logo d-flex align-items-center me-auto me-lg-0" to={"/"}>
            <img src="images/logo.png" alt=""/>
            <h1>Express<span>.</span></h1>
          </Link>
          <nav className="navbar" id="navbar">
            <ul>
              <li><Link to={'/user/history'} className="mx-5">History</Link></li>
              <li><Link to={'/user/tambahresi'} className="mx-5">Tambah Resi</Link></li>
            </ul>
          </nav>
          <div className="dropdown">
            <a className="logo" href="#">
                <img src="/images/profile-pictures/default.jpg" alt="" />
            </a>
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{auth().nama}</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={Logout}>Logout</a></li>
            </ul>
          </div>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    )
}

export default HeaderPengirim