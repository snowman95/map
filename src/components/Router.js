import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "react-dom";
// import Home from "Routes/Home/Home";

const Router = () => (
  <BrowserRouter>
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" render={() => <Redirect to="/" />} />
      </Routes>
    </>
  </BrowserRouter>
);

export default Router;
