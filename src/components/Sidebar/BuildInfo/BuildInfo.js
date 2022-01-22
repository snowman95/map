import React from "react";
import styled from "styled-components";
import BuildImage from "./BuildImage/BuildImage";
import Charts from "./Charts/Charts";
import Details from "./Details/Details";

const SlideBox = styled.div`
  ${({ theme }) => theme.styles.verticalScrollBar};
`;

const BuildInfo = ({ chartData, detailData }) => {
  return (
    <SlideBox>
      <BuildImage data={detailData} />
      <Charts data={chartData} />
      <Details data={detailData} />
    </SlideBox>
  );
};
export default BuildInfo;
