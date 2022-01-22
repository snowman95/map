import React from "react";
import defaultImage from "images/build/1x.png";
import styled from "styled-components";

const Image = styled.img`
  ${({ theme }) => theme.styles.fullSize};
  ${({ theme }) => theme.styles.bgCenter};
  ${({ theme }) => theme.styles.clickIgnore};
  height: 220px;
`;

const BuildImage = () => {
  return <Image src={defaultImage} alt="buildImage" />;
};
export default BuildImage;
