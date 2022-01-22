import React from "react";
import styled from "styled-components";
import theme from "styles/theme";
import Accordion from "./Accordion";

const FlexBox = styled.div`
  display: flex;
`;
const ColFlexBox = styled.div`
  width: 100%;
  ${({ theme }) => theme.styles.flexColumn};
  grid-gap: 3px;
`;
const Dummy = styled.div`
  ${({ theme }) => theme.styles.fullSize};
`;

const Details = ({ data }) => {
  return (
    <FlexBox>
      <ColFlexBox>
        <Accordion name="토지" value={data.landArea}>
          <Dummy />
        </Accordion>
        <Accordion name="건물" value={data.buildArea}>
          <Dummy />
        </Accordion>
        <Accordion
          color={theme.compColors.estimatePriceDot}
          name="추정가"
          value={data.estBuildPrice}
        >
          <Dummy />
        </Accordion>
        <Accordion name="수익률" value={data.incomePos}>
          <Dummy />
        </Accordion>
      </ColFlexBox>
    </FlexBox>
  );
};
export default Details;
