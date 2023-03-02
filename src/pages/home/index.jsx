import { Container } from "./styles";

import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Footer } from "../../components/footer";

import { ScrollButtonToTop } from "../../components/scrollButtonToTop";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
      <ScrollButtonToTop />
    </Container>
  );
};
