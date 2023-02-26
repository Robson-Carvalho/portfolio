import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
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
      </nav>
    </Container>
  );
};
