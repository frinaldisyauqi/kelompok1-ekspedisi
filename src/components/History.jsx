import React from "react";
import HeaderPengirim from "./HeaderPengirim";

function History() {
  return (
    <div>
      <HeaderPengirim />
      <section className="hero d-flex align-items-center section-bg" id="hero">
        <div class="my-5 container col-6">
          <strong class="text-danger">No Resi : </strong>
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                  Tanggal, Hari
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
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