import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* Layout with navbar/footer */}
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
