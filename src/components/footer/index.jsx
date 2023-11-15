import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { HiCode } from "react-icons/hi";

import { Container } from "./styles";

export const Footer = () => {
  const { primaryColor } = useContext(ThemeContext);

  return (
    <Container>
      <div className="content">
        <p>@ 2023 - Robson Carvalho</p>
        <div>
          <p>Portfolio</p>
          <HiCode size={25} fill={primaryColor} />
        </div>
      </div>
    </Container>
  );
};
