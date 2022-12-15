import React from "react";

function Footer() {
    return (
        <footer class="footer" id="footer">
        <div class="container">
          <div class="row gy-3">
            <div class="col-lg-3 col-md-6 d-flex"><i class="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>Jl. Cikutra <br/>Bandung, Jawa Barat - Indonesia<br/></p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 footer-links d-flex"><i class="bi bi-telephone icon"></i>
              <div>
                <h4>Call Center</h4>
                <p><strong>Phone:</strong> +62 5589 55488 55<br/><strong>Email:</strong> info@j2fexpress.com<br/></p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 footer-links d-flex"><i class="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                    <strong>Mon-Sun:</strong> 08 AM - 22 PM
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div class="social-links d-flex"><a class="twitter" href="#"><i class="bi bi-twitter"></i></a><a class="facebook" href="#"><i class="bi bi-facebook"></i></a><a class="instagram" href="#"><i class="bi bi-instagram"></i></a><a class="linkedin" href="#"><i class="bi bi-linkedin"></i></a></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">© Copyright 2022 <strong><span>J2F Express</span></strong>. All Rights Reserved</div>
        </div>
      </footer>
    )
}

export default Footer