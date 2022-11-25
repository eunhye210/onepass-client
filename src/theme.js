const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subTitle: pixelToRem(25),
  text: pixelToRem(18),
};

const colors = {
  black: "#000000",
  blue: "#021691",
  white: "#FFFFFF",
  red: "#FF4433",
};

const display = {
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexRowCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flex: `
    display: flex;
    align-items: center;
  `,
};

const common = {
  mainButton: `
    border: none;
    border-radius: 5px;
    background: ${"#021691"};
    font-size: 18px;
    color: ${"#FFFFFF"};
    cursor: pointer;
  `,
  mainInput: `
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid #021691;
    border-radius: 10px;
    font-size: 1em;
  `,
};

const theme = {
  fontSizes,
  colors,
  display,
  common,
};

export default theme;
