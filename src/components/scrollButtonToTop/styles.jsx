import styled, { css } from "styled-components";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  position: fixed;
  bottom: -10%;
  right: 3%;
  cursor: pointer;
  transition: 0.3s ease-in;
  visibility: hidden;

  ${({ visible }) =>
    visible &&
    css`
      visibility: visible;
      bottom: 3%;
    `}
`;
