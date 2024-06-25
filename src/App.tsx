import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from "./pages/Info";
import Map from "./pages/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:giscode?" element={<Info />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
