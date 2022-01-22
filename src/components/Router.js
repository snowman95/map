import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";

const Router = () => (
  <BrowserRouter>
    <>
      <Routes>
        <Route path="/property/:id" element={<Home />} />
        <Route
          path="*"
          element={<Navigate replace to="/property/1168010600110020000" />}
        />
      </Routes>
    </>
  </BrowserRouter>
);

export default Router;
