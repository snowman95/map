import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing : border-box;
  }
  body{
    font-family: noto-sans-cjk-kr, sans-serif;
      /* font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
  }
  span{
    font-size : ${(props) => props.theme.fontSize.lg};
    color :  ${(props) => props.theme.colors.grey};
  }
`;

export default GlobalStyles;
