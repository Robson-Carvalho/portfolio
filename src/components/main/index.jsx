import { useContext } from "react";
import { ThemeContext } from "styled-components";

import looperBG from "../../assets/looperBg.svg";
import imgLinkedin from "../../assets/linkedin.svg";
import imgGithub from "../../assets/github.svg";
import imgEmail from "../../assets/mail.svg";
import imgDownload from "../../assets/download-cloud.svg";
import CV from "../../assets/CV.pdf";
import profile from "../../assets/profile.jpg";

import { Container, Home, About } from "./styles";
import { Experience } from "../experience";
import { Projects } from "../projects";

import { Button } from "../button";

export const Main = () => {
  const {
    gradients: { pink, purple, violet, blue },
  } = useContext(ThemeContext);

  return (
    <Container>
      <Home id="home">
        <div className="content">
          <div className="texts">
            <span>Olá, eu sou Robson! 👋</span>
            <h2>Desenvolvedor FullStack</h2>
            <span>na Mímeses. </span>
          </div>

          <div className="links">
            <Button
              name="LinkedIn"
              link="https://www.linkedin.com/in/robson-carvalho-souza/"
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

      <About id="about">
        <div className="container">
          <img src={profile} className="profile" alt="profile" />

          <div className="content">
            <h3>SOBRE MIM</h3>
            <p>Cruz das Almas, Brasil</p>
            <span>
              Tenho o objetivo de atuar como Desenvolvedor Front-End na produção
              de software e suas extensões, assim como na solução de problemas.
              Estou Especializando-se em JavaScript, TypeScript, ReactJS, Redux
              e Style-Components. Além disso, tenho conhecimento da base do
              JavaScript como Event Loop, Web API, CallStack, CallBack Queue e
              Garbage Collection.
            </span>

            <div className="links">
              <Button
                name="Currículo"
                link={CV}
                icon={imgDownload}
                description="Download icon"
                primaryColor={pink}
                secondColor={purple}
                download={true}
                outside={true}
                deg={160}
              />

              <Button
                name="E-mail"
                link="mailto:robsoncarvalho.tech@gmail.com"
                icon={imgEmail}
                description="Email icon"
                primaryColor={violet}
                secondColor={blue}
                download={false}
                outside={true}
                deg={20}
              />
            </div>
          </div>
        </div>
      </About>

      <Experience />

      <Projects />
    </Container>
  );
};
