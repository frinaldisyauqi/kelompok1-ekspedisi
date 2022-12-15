import React from "react";
import HeaderPengirim from "./HeaderPengirim";

function Tambahresi() {
    return (
        <div>
            <HeaderPengirim />
            <section className="hero d-flex align-items-center section-bg" id="hero">
                <div class="my-5 container col-6">
                    <form class="row g-3">
                        <strong class="text-danger">Tambah Resi </strong>
                        <div class="class=col-auto">
                            <label for="inputResi" class="visually-hidden">Tambah Resi</label>
                            <input type="text" class="form-control" id="inputResi" maxlength="8" placeholder="Tambah Resi"></input>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3" >Tambah</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Tambahresi