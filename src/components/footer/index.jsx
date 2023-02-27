import { Container } from "./styles";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { HiCode } from "react-icons/hi";

export const Footer = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <Container>
      <div className="content">
        <p>@ 2023 - Robson Carvalho</p>
        <div>
          <p>Powered by</p>
          <HiCode size={25} fill={primaryColor} />
        </div>
      </div>
    </Container>
  );
};
