import { Container } from "./styles";

import { useState, useEffect } from "react";

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";

import { ScrollButtonToTop } from "../../components/scrollButtonToTop";

import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibilityToggle = () => {
    if (window.screen.width <= 940) setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container isMenuVisible={isMenuVisible}>
      <Header
        isMenuVisible={isMenuVisible}
        handleMenuVisibilityToggle={handleMenuVisibilityToggle}
      />
      <Main />
      <Footer />
      <ScrollButtonToTop />
    </Container>
  );
};
