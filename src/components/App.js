import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import CekResi from "./CekResi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./History";
import Tambahresi from "./Tambahresi";
import ShippingOrder from "./ShippingOrder";
import Pengiriman from "./Pengiriman";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Login />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resi" element={<CekResi />} />
          <Route path="/ongkir" element={<Main />} />
          <Route path="/contact" element={<Main />} />
          <Route path="/history" element={<History />} />
          <Route path="/tambahresi" element={<Tambahresi />} />
          <Route path="/shippingorder" element={<ShippingOrder />} />
          <Route path="/pengiriman" element={<Pengiriman />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
