import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import CekResi from "./CekResi";
import Admin from "./Admin";
import CekOngkir from "./CekOngkir";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Login />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resi" element={<CekResi />} />
          <Route path="/ongkir" element={<CekOngkir />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
