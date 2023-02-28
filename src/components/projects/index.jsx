import { Container } from "./styles";

import { Project } from "../project";

const projects = [
  {
    title: "Todo List",
    description:
      "Todo List visa listar as coisas que precisam ser feitas. É uma forma de organizar atividades que não podem ser esquecidas e que não fazem parte da nossa rotina. É diferente de uma agenda, onde as atividades têm dia e hora para acontecer.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-todo-list.png?raw=true",
    link: "https://todo-list-three-chi.vercel.app/",
  },
  {
    title: "Home You",
    description:
      "A Home You é uma landing page de uma agência especializada na venda de imóveis que promovem o maior conforto para seus clientes.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-homeyou.png?raw=true",
    link: "https://homeyou-six.vercel.app/",
  },
  {
    title: "Tech Blog",
    description:
      "Tech Blog é um blog sobre tecnologia estático, porém adicionei uma funcionalidade de busca, onde o usuário pode pesquisar uma palavra na barra de pesquisa e somente os posts relacionandos com a palavra em questão serão exibidos.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-techblog.png?raw=true",
    link: "https://tech-blog-fawn-xi.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <Container id="project">
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
