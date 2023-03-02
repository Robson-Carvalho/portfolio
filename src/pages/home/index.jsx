import { Container } from "./styles";

import { useEffect } from "react";

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";

import { ScrollButtonToTop } from "../../components/scrollButtonToTop";

import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>
      <Header />
      <Main />
      <Footer />
      <ScrollButtonToTop />
    </Container>
  );
};
