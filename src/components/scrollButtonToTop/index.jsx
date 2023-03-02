import { Container } from "./styles";

import { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

export const ScrollButtonToTop = () => {
  const [visible, setVisible] = useState(false);
  const { primaryColor } = useContext(ThemeContext);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Container visible={visible}>
      <BsFillArrowUpSquareFill
        size={40}
        fill={primaryColor}
        onClick={scrollToTop}
      />
    </Container>
  );
};
