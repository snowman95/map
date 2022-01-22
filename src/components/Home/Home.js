import Map from "components/Map/Map";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <FlexBox>
      <Sidebar />
      <Map />
    </FlexBox>
  );
};
export default Home;
