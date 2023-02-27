import { useState } from "react";
import { Container } from "./styles";

const experiences = [
  {
    id: ".op1",
    profession: "Bolsista de Robótica",
    period: "Jan 2022 - Jun 2022",
    company: "IFBaiano",
    description:
      "Minhas atribuições eram ensinar robótica a estudantes do ensino fundamental da rede pública da cidade do campus, por meio da cultura Maker.",
  },
  {
    id: ".op2",
    profession: "Consultor de programação",
    period: "Jul 2022 - Nov 2022",
    company: "IFBaiano",
    description:
      "Minhas atribuições eram ensinar programação aos alunos do terceiro ano do curso técnico de informática do IFBaiano, para que os mesmos descem continuidade ao projeto de ensinar robótica aos alunos da rede pública.",
  },
];

export const Experience = () => {
  const [experiencedClass, setExperiencedClass] = useState(".op1");
  const [experiencePosition, setExperiencePosition] = useState(0);

  const handleExperienceToggle = ({ target: { className } }) => {
    let newClass = `.${className}`;
    setExperiencedClass(newClass);
    if (className === "op1") {
      setExperiencePosition(0);
    } else if (className === "op2") {
      setExperiencePosition(1);
    }
  };

  return (
    <Container experienceSelecting={experiencedClass} id="experience">
      <div className="container">
        <h3>EXPERIÊNCIA</h3>
        <div className="content">
          <div className="select">
            <button className="op1" onClick={handleExperienceToggle}>
              IFBaiano
            </button>
            <button className="op2" onClick={handleExperienceToggle}>
              IFBaiano
            </button>
          </div>
          <div className="experiences">
            <span className="profession">
              {experiences[experiencePosition].profession}
            </span>
            <span className="period">
              {experiences[experiencePosition].period}
            </span>
            <p className="company">{experiences[experiencePosition].company}</p>
            <p className="description">
              {experiences[experiencePosition].description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
