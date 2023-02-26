import { useState } from "react";
import { Container } from "./styles";

import { MobileButton } from "../mobileButton";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibilityToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <Container isMenuVisible={isMenuVisible}>
      <nav>
        <h1 className="portfolioName">Portfólio</h1>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre mim</a>
          </li>
          <li>
            <a href="#">Experiência</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
        </ul>
        <MobileButton handleMenuVisibilityToggle={handleMenuVisibilityToggle} />
      </nav>
    </Container>
  );
};
