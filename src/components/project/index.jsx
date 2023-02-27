import { Container } from "./styles";

import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { Button } from "../button";
import imgLink from "../../assets/link.svg";

export const Project = ({ title, description, imageProject, techs, link }) => {
  const {
    gradients: { violet, blue },
  } = useContext(ThemeContext);
  return (
    <Container>
      <img className="image " src={imageProject} alt="" />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <p className="techs">{techs}</p>
      <Button
        name="Visualizar"
        icon={imgLink}
        link={link}
        primaryColor={violet}
        secondColor={blue}
        download={false}
        outside={true}
        deg={20}
      />
    </Container>
  );
};
