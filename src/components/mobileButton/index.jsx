import { Container } from "./styles";

export const MobileButton = ({ isMenuVisible, handleMenuVisibilityToggle }) => {
  return (
    <Container
      isMenuVisible={isMenuVisible}
      onClick={handleMenuVisibilityToggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </Container>
  );
};
