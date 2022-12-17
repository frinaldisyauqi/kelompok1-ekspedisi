import React from "react";

function CekResi() {
    return (
    <section id="book-a-table" className="book-a-table h-100">
      <div className="container" data-aos="fade-up">
        <div className="section-header mt-5">
          <h1>Cek Resi</h1>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center" >
            <form 
              action=""
              method="post"
              role="form"
              className="php-email-form col-lg-8"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="row gy-0">
                <div className="col-lg-2">
                  <p className="d-flex align-items-center justify-content-center h-100 fw-bold">
                    No. Resi
                  </p>
                </div>
                <div className="col-lg-10">
                  <input
                    type="text"
                    name="resi"
                    className="form-control rounded"
                    id="name"
                    placeholder="Masukkan No. Resi"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end text-center my-2">
                <button className="rounded py-2" type="submit">Lacak</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}

export default CekResi