import React from "react";

function SetOngkir() {
    return (
    <section className="hero d-flex align-items-center section-bg" id="hero">
        <div class="my-5 container col-6">
            <form class="row g-3">
                <div class="d-grid gap-2 d-md-flex justify-content-center">
                    <button class="btn btn-primary" type="button">Jarak Jauh</button>
                    <button class="btn btn" type="button">Jarak Dekat</button>
                </div>
                <div class="class=col-auto">
                    <label for="inputResi" class="visually-hidden">Biaya</label>
                    <input type="text" class="form-control" id="inputResi" maxlength="8" placeholder="Biaya/KG" />
                </div>
                <div class="col-auto">
                    <button type="button" class="btn btn mb-3" >Batal</button>
                    <button type="button" class="btn btn-primary mb-3" >Tambah</button>
                </div>
            </form>
        </div>
    </section>
    )
}

export default SetOngkir