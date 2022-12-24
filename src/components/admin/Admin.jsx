import React from 'react';
import HeaderAdmin from "./HeaderAdmin";
import {useAuthUser} from 'react-auth-kit'

function Admin() {
  const auth = useAuthUser();
  return (
    <div>
      <HeaderAdmin/>
    <section className="hero d-flex align-items-center section-bg" id="hero">
      <div className="container">
        <div className="row justify-content-between gy-5">
          <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
            <h2 data-aos="fade-up">
              Hello {auth().nama} !
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Mengirim barang menggunakan J2F. akan mempermudah mu karena
              memiliki pelayanan bintang lima
            </p>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a
                className="btn-sign-in"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Kirim Paket Sekarang</a>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
            <img
              className="img-fluid"
              src="images/main-kurir.png"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    )
}

export default Admin