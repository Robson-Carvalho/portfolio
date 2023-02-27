import { Container, Home } from "./styles";

import looperBG from "../../assets/looperBg.svg";
import imgLinkedin from "../../assets/linkedin.svg";
import imgGithub from "../../assets/github.svg";

export const Main = () => {
  return (
    <Container>
      <Home>
        <div className="content">
          <div className="texts">
            <span>OLÁ, EU SOU</span>
            <h2>ROBSON SOUZA</h2>
            <span>DESENVOLVEDOR FRONT-END.</span>
          </div>
          <div className="links"></div>
        </div>
        <img
          className="looperBG"
          src={looperBG}
          alt="Desenho futurista geométrico"
        />
      </Home>
    </Container>
  );
};
