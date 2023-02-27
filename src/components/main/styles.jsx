import styled from "styled-components";

export const Container = styled.main`
  padding: 0 24px;
`;

export const Home = styled.section`
  max-width: 1081px;
  width: 100%;
  height: 625px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;

    .texts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;

      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        line-height: 77px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.primaryColor};
      }

      span {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.light};
      }
    }

    .links {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
    }
  }

  .looperBG {
    position: absolute;
    right: 0;

    @media (max-width: 960px) {
      display: none;
    }
  }
`;
