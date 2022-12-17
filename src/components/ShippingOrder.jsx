import React from "react"
import HeaderAdmin from "./HeaderAdmin";

function ShippingOrder() {
    return (
        <div>
            <HeaderAdmin />
            <div>
                <br/>
                <br/>
                <br/>
                <div class="row my-5 border-bottom">
                    <div class="col-6 px-5 border-end">
                        <form>
                            <strong class="text">Informasi Pengirim </strong>
                            <div class="row mb-3">
                                <label for="inputNama" class="col-sm-2 col-form-label">Nama</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputNama" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputNomor" class="col-sm-2 col-form-label">No Telepon</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputNomor" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputKota" class="col-sm-2 col-form-label">Kota</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputKota" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputAlamat" class="col-sm-2 col-form-label">Alamat</label>
                                <div class="col-8">
                                    <textarea type="text" class="form-control" id="inputAlamat"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-6 px-5 border-start">
                        <form>
                            <strong class="text">Informasi Penerima </strong>
                            <div class="row mb-3">
                                <label for="inputNama2" class="col-sm-2 col-form-label">Nama</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputNama2" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputNomor2" class="col-sm-2 col-form-label">No Telepon</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputNomor2" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputKota2" class="col-2 col-form-label">Kota</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputKota2" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputAlamat2" class="col-sm-2 col-form-label">Alamat</label>
                                <div class="col-8">
                                    <textarea type="text" class="form-control" id="inputAlamat2"></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="row my-5 border-bottom border-5">
                    <div class="col-6 px-5">
                        <form>
                            <strong class="text">Informasi Paket </strong>
                            <div class="row mb-3">
                                <label for="inputNama" class="col-sm-2 col-form-label">Nama Barang</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputNama" />
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputNomor" class="col-sm-2 col-form-label">Berat</label>
                                <div class="col-8">
                                    <input type="text" class="form-control" id="inputNomor" />
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-6 px-5">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Pilih jenis pengiriman : </option>
                            <option value="1">Regular</option>
                            <option value="2">Next Day</option>
                        </select>
                    </div>
                </div>
                <div class="d-flex justify-content-end mx-5">
                    <h3>
                        Biaya:
                        <br />
                        Rp. 1000000
                    </h3>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end m-5">
                    <button class="btn btn me-md-2" type="button">Batal</button>
                    <button class="btn btn-primary" type="button">Order</button>
                </div>
            </div>
        </div>
    )
}

export default ShippingOrder