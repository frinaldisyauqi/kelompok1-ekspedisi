import React from "react";
import HeaderPengirim from "./HeaderPengirim";

function History() {
  return (
    <div>
      <HeaderPengirim />
      <section className="hero d-flex align-items-center section-bg" id="hero">
        <div className="mb-3 container col-6">
          <h1>No Resi : </h1>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <p className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                  Tanggal, Hari
                </button>
              </p>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                  <ul>
                    <li>
                      Test
                    </li>
                    <li>
                      Test
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History