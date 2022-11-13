const pixelToRem = (size) => `${size / 16}rem`;

const fontSizes = {
  title: pixelToRem(60),
  subTitle: pixelToRem(25),
  text: pixelToRem(18),
};

const colors = {
  black: "#000000",
  blue: "#021691",
  white: "#FFFFFF"
};

const display = {
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
  flexRowCenter: `
    display: flex;
    justify-content: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  display,
};

export default theme;
