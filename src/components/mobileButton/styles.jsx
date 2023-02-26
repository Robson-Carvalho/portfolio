import styled, { css } from "styled-components";

export const Container = styled.button`
  position: relative;

  background: transparent;
  border: none;
  cursor: pointer;

  display: none;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;

  @media screen and (max-width: 920px) {
    display: flex;
  }

  span {
    display: block;
    width: 32px;
    border: 1px solid ${({ theme }) => theme.light};
    transition: 0.3s;

    ${({ isMenuVisible }) =>
      isMenuVisible &&
      css`
        position: fixed;
        z-index: 1000;
      `}

    &:nth-child(1) {
      ${({ isMenuVisible }) =>
        isMenuVisible &&
        css`
          transform: rotate(-135deg);
        `}
    }

    &:nth-child(2) {
      ${({ isMenuVisible }) =>
        isMenuVisible &&
        css`
          display: none;
        `}
    }

    &:nth-child(3) {
      width: 18px;

      ${({ isMenuVisible }) =>
        isMenuVisible &&
        css`
          width: 32px;
          transform: rotate(135deg);
        `}
    }
  }
`;
