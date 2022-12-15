import React from "react";

function CekOngkir() {
    return (
      <section id="book-a-table" className="book-a-table h-100">
        <div className="container" data-aos="fade-up">
          <div className="section-header mt-5">
            <h1>Cek Ongkir</h1>
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
                <div className="row gy-0 mb-2">
                  <div className="col-lg-2">
                    <p className="d-flex align-items-center h-100 fw-bold">
                      Asal
                    </p>
                  </div>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      name="asal"
                      className="form-control rounded"
                      id="asal"
                      placeholder="Pilih Asal"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="row gy-0 my-2">
                  <div className="col-lg-2">
                    <p className="d-flex align-items-center h-100 fw-bold">
                      Tujuan
                    </p>
                  </div>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      name="tujuan"
                      className="form-control rounded"
                      id="tujuan"
                      placeholder="Pilih Tujuan"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="row gy-0 my-2">
                  <div className="col-lg-2">
                    <p className="d-flex align-items-center h-100 fw-bold">
                      Berat
                    </p>
                  </div>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      name="berat"
                      className="form-control rounded"
                      id="berat"
                      placeholder="Kg"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="d-flex justify-content-end text-center my-2">
                  <button className="rounded py-2" type="submit">Cek Harga</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CekOngkir