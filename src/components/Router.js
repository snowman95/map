import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";

const Router = () => (
  <BrowserRouter>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </>
  </BrowserRouter>
);

export default Router;
