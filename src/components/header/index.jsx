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
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#">Home</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#">Sobre mim</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#">Experiência</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#">Projetos</a>
          </li>
        </ul>
        <MobileButton
          isMenuVisible={isMenuVisible}
          handleMenuVisibilityToggle={handleMenuVisibilityToggle}
        />
      </nav>
    </Container>
  );
};
