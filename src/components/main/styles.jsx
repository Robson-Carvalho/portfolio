import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
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

export const About = styled.section`
  width: 100%;
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.dark_200};

  .container {
    max-width: 1081px;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 163px;

    .profile {
      width: 367px;
      height: 367px;
      border-left: 6px solid ${({ theme }) => theme.primaryColor};
      border-radius: 4px;
    }

    .content {
      h3 {
        margin-bottom: 40px;

        font-style: normal;
        font-weight: 600;
        font-size: 24px;

        text-transform: uppercase;
        color: ${({ theme }) => theme.light};
      }
      p {
        margin-bottom: 21px;

        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: ${({ theme }) => theme.light};
      }
      span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        color: ${({ theme }) => theme.gray_light};
      }
      .links {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        gap: 48px;
      }
    }
  }
`;
