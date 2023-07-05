import { Container } from "./styles";
import { MobileButton } from "../mobileButton";

export const Header = ({ isMenuVisible, handleMenuVisibilityToggle }) => {
  return (
    <Container isMenuVisible={isMenuVisible}>
      <nav>
        <h1 className="portfolioName">Portfólio</h1>

        <ul className="menu">
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#home">Home</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#about">Sobre mim</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#experience">Experiência</a>
          </li>
          <li onClick={handleMenuVisibilityToggle}>
            <a href="#project">Projetos</a>
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
