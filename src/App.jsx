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

  body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
  background: #121212;        /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
  background-color: #00d2df;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid #151515;  /* creates padding around scroll thumb */
}
`;

const cssVariables = {
  primaryColor: "#00d2df",
  dark: "#121212",
  dark_200: "#151515",
  gray_light: "#c4c4c4 ",
  light: "#fff",
  gradients: {
    pink: "#D24074",
    purple: "#6518B4",
    violet: "#9358F7",
    blue: "#10D7E2",
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
