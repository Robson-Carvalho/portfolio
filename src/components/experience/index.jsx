import { useState } from "react";
import { Container } from "./styles";

import { experiences } from "../../data/experiences";

export const Experience = () => {
  const [experiencedClass, setExperiencedClass] = useState(".op1");
  const [experiencePosition, setExperiencePosition] = useState(0);

  const handleExperienceToggle = ({ target: { className } }) => {
    let newClass = `.${className}`;

    setExperiencedClass(newClass);

    className === "op1" ? setExperiencePosition(0) : setExperiencePosition(1);
  };

  return (
    <Container experienceSelecting={experiencedClass} id="experience">
      <div className="container" data-aos="fade-right">
        <h3>EXPERIÊNCIA</h3>

        <div className="content">
          <div className="select">
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
