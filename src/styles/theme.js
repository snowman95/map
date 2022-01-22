const fontSize = {
  lg: "18px",
  md: "16px",
  sm: "14px",
};
const windowSize = {
  sidebar: "375px",
  convertBase: "768px",
};
const colors = {
  cleanWhite: "#efeff4",
  white: "#ffffff",
  grey: "#3c3c43",
  transparent: "rgba(255, 255, 255, 0)",
  black: "#161615",
  lightGrey: "#cccccc",
  green: "#5fe3a1",
  red: "#ff6565",
  lightBlue: "#dae6fa",
  darkBlue: "#687d9f",
  darkGrey: "rgba(0, 0, 0, 0.76)",
  darkYellow: "#e8b36a",
  blue: "#6a91e8",
  lightGreen: "#9dd9a0",
  hotPink: "#faa2a2",
  pink: "#ffcfe7",
};

const compColors = {
  bg: colors.cleanWhite,
  text: colors.grey,
  searchInputBorder: colors.lightGrey,
  landChart: colors.pink,
  buildChartBorder: colors.lightBlue,
  estimatePrice: colors.darkYellow,
  estimateLandValue: colors.blue,
  incomePositive: colors.lightGreen,
  incomeNegative: colors.hotPink,
  estimatePriceDot: colors.red,
  tradeDot: colors.green,
  baseDot: colors.grey,
  tagBox: colors.lightBlue,
  tag: colors.darkBlue,
};

const styles = {
  fullSize: `
  width: 100%;
  height: 100%;
`,
  round: `
  border-radius: 50%;
`,
  relative: `
  position: relative;
`,
  absolute: `
  position: absolute;
`,
  absoluteTop: `
  position: absolute;
  top: 0;
`,
  absoluteBottom: `
  position: absolute;
  bottom: 0;
`,
  fixed: `
  position: fixed;
  top: 0;
  z-index: 1;
`,
  clickIgnore: `
  pointer-events: none;
`,
  reverse: `
  transform: scaleX(-1);
  will-change: transform;
`,
  rotate: `
  transform: rotate(90deg);
  will-change: transform;
`,
  // Effect ***********************************
  underlineEffect: `
  border-bottom: 3px solid ${colors.carrot}};
`,
  shadow: `
  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)
`,
  interactive: `
  &:active,
  &:hover {
    opacity: 0.6;
  }
`,
  // button ***********************************
  cleanButton: `
  border : none;
  background-color:transparent;
  padding: 0px;
  margin: 0px;
`,
  // Text ***********************************
  textCenter: `
  text-align: center;
`,
  underline: `
  text-decoration: underline;
`,
  preWrap: `
  white-space: pre-wrap;
`,
  notOverflow: `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`,
  ellipsisLine: `
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`,
  // Input ***********************************
  verticalScrollBar: `
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.1);
    opacity:0.5;
    border-radius: 10px;
    height: 17%;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
  
`,
  wrap: `
  overflow-wrap: break-word;
`,
  cleanInput: `
  border: none;
  outline: none;
  &::placeholder {
    opacity: 0.5;
  }
  &:focus::placeholder {
    color: transparent;
  }
`,
  // flex ***********************************
  flexCenter: `
  display:flex;
  justify-content: center;
  align-items: center;
`,
  flexColumn: `
  display:flex;
  flex-direction : column;
`,
  spaceBetween: `
  display:flex;
  justify-content: space-between;
  align-items: center;
`,
  flexWrap: `
  display:flex;
  flex-wrap: wrap;
`,
  // background ***********************************
  bgCenter: `
  background-size: cover;
  background-position: center center;
`,
  // Animation
  rotation: `
  from {
    transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`,
};

const theme = {
  styles,
  colors,
  compColors,
  fontSize,
  windowSize,
};

export default theme;
