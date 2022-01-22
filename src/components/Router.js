import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import Map from "./Map/Map";
import Sidebar from "./Sidebar/Sidebar";

const FlexBox = styled.div`
  display: flex;
  height: 100vh;
`;

const Router = () => (
  <BrowserRouter>
    <>
      <FlexBox>
        <Routes>
          <Route path="/property/:id" element={<Sidebar />} />
          <Route
            path="*"
            element={<Navigate replace to="/property/1168010600110020000" />}
          />
        </Routes>
        <Map />
      </FlexBox>
    </>
  </BrowserRouter>
);

export default Router;
