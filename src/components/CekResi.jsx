import React from "react";

function CekResi() {
    return (
    <section id="book-a-table" className="book-a-table section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header mt-5">
          <h1>Cek Resi</h1>
          {/* <p>Cek Resi</p> */}
        </div>

        <div className="row g-0">
          <div className="col-lg-12 d-flex align-items-center">
            <form
              action=""
              method="post"
              role="form"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row justify-content-between gy-4">
                <div className="col-lg-4 col-md-6 w-100">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Masukkan No. Resi"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your booking request was sent. We will call back or send an
                  Email to confirm your reservation. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Lacak</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CekResi