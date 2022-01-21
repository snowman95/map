import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";

const Router = () => (
  <BrowserRouter>
    <>
      <Routes>
        {/* <Route path="/property" element={<Home />} /> 추후 확장성을 고려하여 작성 */}
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
