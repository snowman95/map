import Sidebar from "components/Sidebar/Sidebar";
import styled from "styled-components";
import Map from "../Map/Map";

const FlexBox = styled.div`
  display: flex;
  height: 100vh;
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
