import styled from "styled-components";

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
          transition: 0.3s;

          &:hover {
            color: ${({ theme }) => theme.light};
          }
        }
      }
    }
  }
`;
