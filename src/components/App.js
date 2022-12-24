import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RequireAuth, useIsAuthenticated, useAuthUser } from "react-auth-kit";
import NotFound from "./NotFound";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import CekResi from "./CekResi";
import CekOngkir from "./CekOngkir";
import Contact from "./Contact";
import Admin from "./admin/Admin";
import HeaderAdmin from "./admin/HeaderAdmin";
import ShippingOrder from "./admin/ShippingOrder";
import Pengiriman from "./admin/Pengiriman";
import Manager from "./manager/Manager";
import HeaderManager from "./manager/HeaderManager";
import ManageCabang from "./manager/ManageCabang";
import SetOngkir from "./manager/SetOngkir";
import User from "./user/User";
import History from "./user/History";
import Tambahresi from "./user/Tambahresi";
import HeaderPengirim from "./user/HeaderPengirim";

function App() {
  const isAuthenticated = useIsAuthenticated();
  const isAuth = useAuthUser();
  let isRole = "";

  if (isAuthenticated()) {
    isRole = isAuth().roleUser;
  }

  if (isAuthenticated() && isRole === 1) {
    return (
      <BrowserRouter>
        <HeaderManager />
        <Routes>
          <Route path="/" element={<Manager />} />
          <Route path="/managecabang" element={<ManageCabang />} />
          <Route path="/setongkir" element={<SetOngkir />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else if (isAuthenticated() && isRole === 2) {
    return (
      <BrowserRouter>
        <HeaderAdmin />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/shippingorder" element={<ShippingOrder />} />
          <Route path="/pengiriman" element={<Pengiriman />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else if (isAuthenticated() && isRole === 3) {
    return (
      <BrowserRouter>
        <HeaderPengirim />
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/tambahresi" element={<Tambahresi />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Header />
        <Login />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resi" element={<CekResi />} />
          <Route path="/ongkir" element={<CekOngkir />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
export default App;
