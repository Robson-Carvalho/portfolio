import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { cssVariables } from "./styles/cssVariables";

import { Home } from "./pages/index";

export const App = () => {
  return (
    <ThemeProvider theme={cssVariables}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};
