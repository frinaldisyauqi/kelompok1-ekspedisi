import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Login />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resi" element={<Main />} />
          <Route path="/ongkir" element={<Main />} />
          <Route path="/contact" element={<Main />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
