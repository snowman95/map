import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.color || "transparent"};
  border: none;
  padding: 0;
  opacity: ${(props) => props.off && "0.3"};
  transition: 0.3s ease;
  cursor: pointer;
  ${(props) => props.rotation && props.theme.styles.rotate}
  ${(props) => props.theme.styles.interactive}
`;
const Image = styled.img`
  object-fit: contain;
`;

const ImageButton = ({ onClick, imgSize, src, ...rest }) => (
  <StyledButton onClick={onClick} {...rest}>
    <Image src={src} alt="img" />
  </StyledButton>
);
export default ImageButton;
