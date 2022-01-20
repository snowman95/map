import icon from "images/hexagon/3x.png";
import styled, { keyframes } from "styled-components";

export const Spinner = () => {
  const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;
  const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 500;
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  `;
  const Icon = styled.img`
    position: relative;
    background-color: transparent;
    border: none;
    left: 50%;
    top: 50%;
    margin: -90px 0 0 -90px;
    overflow: hidden;
    cursor: inherit;
    z-index: 1;
    animation: ${rotation} 2.5s linear infinite;
    pointer-events: none;
  `;

  return (
    <Container>
      <Icon src={icon} alt="icon" />
    </Container>
  );
};
