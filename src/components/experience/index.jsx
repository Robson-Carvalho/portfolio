import { useState } from "react";
import { Container } from "./styles";

import { experiences } from "../../data/experiences";

export const Experience = () => {
  const [experiencedClass, setExperiencedClass] = useState(".op0");
  const [experiencePosition, setExperiencePosition] = useState(0);

  const handleExperienceToggle = ({ target: { className } }) => {
    let newClass = `.${className}`;

    setExperiencedClass(newClass);

    let position = Number(className.replace("op", ""));

    setExperiencePosition(position);
  };

  return (
    <Container experienceSelecting={experiencedClass} id="experience">
      <div className="container">
        <h3>EXPERIÊNCIAS</h3>

        <div className="content">
          <div className="select">
            <button className="op0" onClick={handleExperienceToggle}>
              Mímeses
            </button>
            <button className="op1" onClick={handleExperienceToggle}>
              IF Baiano
            </button>

            <button className="op2" onClick={handleExperienceToggle}>
              IF Baiano
            </button>
          </div>

          <div className="experiences">
            <span className="profession">
              {experiences[experiencePosition].profession}
            </span>
            <br />
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
