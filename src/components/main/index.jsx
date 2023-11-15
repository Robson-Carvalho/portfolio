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
            <p>Feira de Santana, Bahia, Brasil</p>
            <span>
              Sou um Desenvolvedor Fullstack com especialização em JavaScript,
              TypeScript, ReactJS, Redux e Style-Components. Possuo um sólido
              conhecimento nas bases do JavaScript, incluindo conceitos
              essenciais como o Event Loop, Web API, Call Stack, Callback Queue
              e Garbage Collection.
              <br />
              <br />
              Minha experiência abrange o desenvolvimento abrangente de
              aplicações, desde o front-end até o back-end. Estou comprometido
              em manter-me atualizado com as mais recentes tecnologias e
              práticas de desenvolvimento, garantindo que minha habilidade
              técnica esteja alinhada com as demandas do setor. Ao longo da
              minha carreira, demonstrei habilidades eficazes de resolução de
              problemas, comunicação clara e colaboração em equipes
              multidisciplinares.
              <br />
              <br />
              Estou entusiasmado em enfrentar desafios complexos e contribuir
              para o sucesso de projetos inovadores. Busco oportunidades que me
              permitam continuar aprimorando minhas habilidades técnicas e
              aplicá-las de maneira eficaz para criar soluções robustas e de
              alto desempenho.
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
