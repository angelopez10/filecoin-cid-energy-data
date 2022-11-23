const colors = {
  white: "#FFF",
  black: "#000",
  primary: "#1ade7f",
  accent: "#253331",
  darkGray: "#343434",
  font: {
    light: "slategray",
    dark: "black",
    med: "#363636",
    default: "black",
  },
};

const fonts = {
  europa: "'Europa', sans-serif",
  code: '"Fira Mono",monospace',
  rubik: "'Rubik',sans-serif",
  brandonGrotesque: "'Brandon-Grotesque', sans-serif",
};

const breakPoints = {
  superSmall: "415px",
  small: "600px",
  medium: "835px",
  large: "1024px",
  superLarge: "1200px",
  extraLarge: "1440px",
};

export const AppTheme = {
  colors,
  fonts,
  breakPoints,
};

export type ThemeType = typeof AppTheme;
