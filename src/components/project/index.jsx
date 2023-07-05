import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";
import { Button } from "../button";
import imgLink from "../../assets/link.svg";
import imgGitHub from "../../assets/github.svg";

export const Project = ({
  title,
  description,
  imageProject,
  techs,
  link,
  github,
}) => {
  const {
    gradients: { violet, blue, pink, purple },
  } = useContext(ThemeContext);

  return (
    <Container>
      <img className="image " src={imageProject} alt="" />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="techs">{techs}</p>

      <div className="buttons">
        <Button
          name="Visualizar"
          icon={imgLink}
          link={link}
          primaryColor={violet}
          secondColor={blue}
          download={false}
          outside={true}
          deg={10}
        />

        <Button
          name="Repositório"
          link={github}
          icon={imgGitHub}
          description="GitHub icon"
          primaryColor={pink}
          secondColor={purple}
          download={false}
          outside={true}
          deg={160}
        />
      </div>
    </Container>
  );
};
