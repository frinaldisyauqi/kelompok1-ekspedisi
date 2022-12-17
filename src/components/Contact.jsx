import React from "react";

function Contact() {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header mt-5">
            <h1>Contact Us</h1>
          </div>

          <div className="mb-3">
            <iframe
              className="google-maps"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Cikutra&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-map flex-shrink-0"></i>
                <div>
                  <h3>Our Address</h3>
                  <p>Jl. Cikutra, Bandung, Jawa Barat - Indonesia</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@j2fexpress.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+62 5589 55488 55</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <i className="icon bi bi-clock flex-shrink-0"></i>
                <div>
                  <h3>Opening Hours</h3>
                  <div>
                    <strong>Mon-Sun:</strong> 08 AM - 22 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            action="forms/contact.php"
            method="post"
            role="form"
            className="php-email-form p-3 p-md-4"
          >
            <div className="row">
              <div className="col-xl-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-xl-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    )
}

export default Contact