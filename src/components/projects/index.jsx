import { Container } from "./styles";

import { Project } from "../project";

const projects = [
  {
    id: crypto.randomUUID(),
    title: "Suplementos",
    description:
      "Suplementos é uma página de landing page sobre os benefícios e a venda de suplementos.",
    techs: "HTML, CSS e JavaScript",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-suplementos.png?raw=true",
    link: "https://supplement-store-eta.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "FoodJP",
    description:
      "Este projeto é uma landing page do FoodJP, um restaurante de comida oriental que procura dar a conhecer os melhores e mais populares pratos orientais.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-foodjp.png?raw=true",
    link: "https://foodjp-robson-carvalho.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "Todo List",
    description:
      "Todo List visa listar as coisas que precisam ser feitas. É uma forma de organizar atividades que não podem ser esquecidas e que não fazem parte da nossa rotina. É diferente de uma agenda, onde as atividades têm dia e hora para acontecer.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-todo-list.png?raw=true",
    link: "https://todo-list-three-chi.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "Home You",
    description:
      "A Home You é uma landing page de uma agência especializada na venda de imóveis que promovem o maior conforto para seus clientes.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-homeyou.png?raw=true",
    link: "https://homeyou-six.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "Tech Blog",
    description:
      "Tech Blog é um blog sobre tecnologia estático, porém adicionei uma funcionalidade de busca, onde o usuário pode pesquisar uma palavra na barra de pesquisa e somente os posts relacionandos com a palavra em questão serão exibidos.",
    techs: "ReactJS e styled-components",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-techblog.png?raw=true",
    link: "https://tech-blog-fawn-xi.vercel.app/",
  },
  {
    id: crypto.randomUUID(),
    title: "My Links",
    description:
      "My Links foi um projeto proposto pelo evento DevLinks da Rocketseat, que consiste em aprimorar nossos conhecimentos básicos em html, css e javascript, sendo um local para compartilhar os links mais importantes.",
    techs: "HTML, CSS e JavaScript",
    imageProject:
      "https://github.com/Robson-Carvalho/portfolio/blob/main/.github/image-project-mylinks.png?raw=true",
    link: "https://robson-carvalho-links.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <Container id="project">
      <div className="content" data-aos="fade-up">
        <h3>PROJETOS</h3>
        <div className="projects">
          {projects.map(
            ({ id, title, description, techs, imageProject, link }) => (
              <Project
                key={id}
                title={title}
                description={description}
                techs={techs}
                imageProject={imageProject}
                link={link}
              />
            )
          )}
        </div>
      </div>
    </Container>
  );
};
