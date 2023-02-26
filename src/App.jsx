import { createGlobalStyle } from "styled-components";
import { reset } from "./styles/global.style";

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

export const App = () => {
  return (
    <>
      <GlobalStyle />
    </>
  );
};
