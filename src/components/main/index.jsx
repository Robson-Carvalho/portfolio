import { Container, Home } from "./styles";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import looperBG from "../../assets/looperBg.svg";
import imgLinkedin from "../../assets/linkedin.svg";
import imgGithub from "../../assets/github.svg";

import { Button } from "../button";

export const Main = () => {
  const {
    gradients: { pink, purple, violet, blue },
  } = useContext(ThemeContext);

  return (
    <Container>
      <Home>
        <div className="content">
          <div className="texts">
            <span>OLÁ, EU SOU</span>
            <h2>ROBSON CARVALHO</h2>
            <span>DESENVOLVEDOR FRONT-END.</span>
          </div>
          <div className="links">
            <Button
              name="LinkedIn"
              link="https://www.linkedin.com/in/devrobsoncarvalho/"
              icon={imgLinkedin}
              description="Linkedin icon"
              primaryColor={violet}
              secondColor={blue}
              download={false}
              outside={true}
              deg={20}
            />
            <Button
              name="GitHub"
              link="https://github.com/Robson-Carvalho"
              icon={imgGithub}
              description="GitHub icon"
              primaryColor={pink}
              secondColor={purple}
              download={false}
              outside={true}
              deg={160}
            />
          </div>
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
