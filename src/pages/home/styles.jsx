import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.dark};
  height: 100vh;

  ${({ isMenuVisible }) =>
    isMenuVisible &&
    css`
      overflow-y: hidden;
    `}
`;
