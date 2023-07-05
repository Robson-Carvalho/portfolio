import { projects } from "../../data/projects";

import { Container } from "./styles";
import { Project } from "../project";

export const Projects = () => {
  return (
    <Container id="project">
      <div className="content" data-aos="fade-up">
        <h3>PROJETOS</h3>

        <div className="projects">
          {projects.map(
            ({ id, title, description, techs, imageProject, link, github }) => (
              <Project
                key={id}
                title={title}
                description={description}
                techs={techs}
                imageProject={imageProject}
                link={link}
                github={github}
              />
            )
          )}
        </div>
      </div>
    </Container>
  );
};
