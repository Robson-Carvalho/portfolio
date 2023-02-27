import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset } from "./styles/global.style";

import { Home } from "./pages/home";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    scroll-behavior: smooth;
  }
  body{
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
  }
  body, *{
    box-sizing: border-box;
  }
`;

const cssVariables = {
  primaryColor: "#00d2df",
  dark: "#121212",
  dark_200: "#151515",
  gray_light: "#c4c4c4 ",
  light: "#fff",
  gradient_pink: {
    primaryColor: "#D24074",
    secondColor: "#6518B4",
  },
  gradient_purple: {
    primaryColor: "#9358F7",
    secondColor: "#10D7E2",
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={cssVariables}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
