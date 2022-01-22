import icon from "images/hexagon/3x.png";
import styled, { keyframes } from "styled-components";
import theme from "styles/theme";

const rotation = keyframes`${theme.styles.rotation}`;

const Container = styled.div`
  ${({ theme }) => theme.styles.fullSize};
  ${({ theme }) => theme.styles.absolute};
  ${({ theme }) => theme.styles.clickIgnore};
  z-index: 500;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Icon = styled.img`
  position: relative;
  background-color: transparent;
  border: none;
  left: 50%;
  top: 50%;
  margin: -90px 0 0 -90px;
  z-index: 1;
  animation: ${rotation} 2.5s linear infinite;
  ${({ theme }) => theme.styles.clickIgnore};
`;

export const Spinner = () => {
  return (
    <Container>
      <Icon src={icon} alt="icon" />
    </Container>
  );
};
