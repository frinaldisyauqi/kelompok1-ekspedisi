import React from "react"
import HeaderAdmin from "./HeaderAdmin";

function Pengiriman() {
    return (
        <div>
            <HeaderAdmin />
            <br />
            <br />
            <div class="row my-5 d-flex justify-content-center">
                <div class="col-6 px-5">
                    <form>
                        <strong class="text">Informasi Penerima </strong>
                        <div class="row mb-3">
                            <label for="inputNama2" class="col-sm-2 col-form-label">Nomor Resi</label>
                            <div class="col-8">
                                <input type="text" class="form-control" id="inputNama2" />
                            </div>
                        </div>
                    </form>
                    <div class="row mb-3">
                        <label for="inputNama2" class="col-sm-2 col-form-label">Status Barang</label>
                        <div class="col-8">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Input paket dicabang ini : </option>
                                <option value="1">Paket Keluar dari Cabang ini</option>
                                <option value="2">Paket Menuju Penerima</option>
                                <option value="3">Paket Telah Diterima</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-8 d-flex justify-content-end m-5">
                        <button type="button" class="btn btn mb-3" >Batal</button>
                        <button type="button" class="btn btn-primary mb-3" >Tambah</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pengiriman