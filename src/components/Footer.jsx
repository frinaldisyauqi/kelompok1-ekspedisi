import React from "react";

function Footer() {
    return (
        <footer className="footer" id="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex"><i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>Jl. Cikutra <br/>Bandung, Jawa Barat - Indonesia<br/></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex"><i className="bi bi-telephone icon"></i>
              <div>
                <h4>Call Center</h4>
                <p><strong>Phone:</strong> +62 5589 55488 55<br/><strong>Email:</strong> info@j2fexpress.com<br/></p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links d-flex"><i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                    <strong>Mon-Sun:</strong> 08 AM - 22 PM
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex"><a className="twitter" href="#"><i className="bi bi-twitter"></i></a><a className="facebook" href="#"><i className="bi bi-facebook"></i></a><a className="instagram" href="#"><i className="bi bi-instagram"></i></a><a className="linkedin" href="#"><i className="bi bi-linkedin"></i></a></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">© Copyright 2022 <strong><span>J2F Express</span></strong>. All Rights Reserved</div>
        </div>
      </footer>
    )
}

export default Footer