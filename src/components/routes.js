import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Pagenotfound from "./404";

const routes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<Pagenotfound />} />
      <Route exact path="/books" element={<Pagenotfound />} />
      <Route exact path="/blog" element={<Pagenotfound />} />
      <Route exact path="/author" element={<Pagenotfound />} />
      <Route exact path="/events" element={<Pagenotfound />} />
      <Route exact path="/pages" element={<Pagenotfound />} />
      <Route exact path="/contact" element={<Pagenotfound />} />
    </Routes>
  );
};

export default routes;
