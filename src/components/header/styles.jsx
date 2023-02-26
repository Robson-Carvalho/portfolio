import styled, { css } from "styled-components";

export const Container = styled.header`
  padding: 0 24px;

  nav {
    max-width: 1081px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 40px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .portfolioName {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      text-transform: capitalize;
      line-height: 29px;
      color: ${({ theme }) => theme.blue};
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 64px;

      li {
        a {
          text-decoration: none;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: ${({ theme }) => theme.gray_light};
          transition: color 0.3s;
          position: relative;

          &:hover {
            color: ${({ theme }) => theme.light};
          }

          &::after {
            content: "";
            width: 0%;
            height: 2px;
            background: ${({ theme }) => theme.blue};
            position: absolute;
            left: 0;
            bottom: -0.5rem;
            transition: width 0.3s;
          }

          &:hover:after {
            width: 100%;
          }
        }
      }

      @media screen and (max-width: 920px) {
        position: fixed;
        top: 0;
        left: 0;

        width: 100%;
        height: 0;
        background-color: ${({ theme }) => theme.dark_200};

        flex-direction: column;
        align-items: center;
        justify-content: center;

        overflow-y: hidden;
        visibility: hidden;

        transition: 0.3s ease-in;

        ${({ isMenuVisible }) =>
          isMenuVisible &&
          css`
            height: 100vh;
            visibility: visible;
          `}
      }
    }
  }
`;
