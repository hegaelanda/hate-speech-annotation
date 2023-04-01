import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Empty from "./empty";
import Layout from "./layout";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Empty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
