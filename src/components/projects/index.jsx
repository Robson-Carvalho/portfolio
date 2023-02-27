import { Container } from "./styles";

import { Project } from "../project";

const projects = [
  {
    title: "Todo List",
    description:
      "Todo List visa listar as coisas que precisam ser feitas. É uma forma de organizar atividades que não podem ser esquecidas e que não fazem parte da nossa rotina. É diferente de uma agenda, onde as atividades têm dia e hora para acontecer.",
    techs: "ReactJS e styled-components",
    imageProject: "",
    link: "https://github.com/Robson-Carvalho/todo-list",
  },
];

export const Projects = () => {
  return (
    <Container>
      <div className="content">
        <h3>PROJETOS</h3>
        <div className="projects">
          {projects.map(({ title, description, techs, imageProject, link }) => (
            <Project
              title={title}
              description={description}
              techs={techs}
              imageProject={imageProject}
              link={link}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
