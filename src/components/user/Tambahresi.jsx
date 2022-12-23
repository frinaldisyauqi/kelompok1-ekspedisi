import React from "react";
import HeaderPengirim from "./HeaderPengirim";

function Tambahresi() {
    return (
        <div>
            <HeaderPengirim />
            <section className="hero d-flex align-items-center section-bg" id="hero">
                <div className="mb-5 container col-6">
                    <form className="row g-3">
                        <h1>Tambah Resi </h1>
                        <div className="className=col-auto">
                            <label for="inputResi" className="visually-hidden">Masukkan No. Resi</label>
                            <input type="text" className="form-control" id="inputResi" maxLength="8" placeHolder="Masukkan No. Resi"></input>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-sign-in rounded mb-3 shadow-none" >Tambah</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Tambahresi