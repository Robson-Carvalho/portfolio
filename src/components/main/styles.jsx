import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
`;

export const Home = styled.section`
  max-width: 1081px;
  width: 100%;

  margin: 0 auto;
  padding: 152px 24px 209px 24px;

  @media screen and (max-width: 940px) {
    padding: 56px 24px 56px 24px;
  }

  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;

    .texts {
      width: 100%;
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
        text-align: left;

        @media screen and (max-width: 940px) {
          font-size: 32px;
          line-height: 39px;
        }
      }

      span {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.light};

        @media screen and (max-width: 940px) {
          font-size: 16px;

          &:last-child {
            line-height: 24px;
          }
        }
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

    @media (max-width: 1370px) {
      display: none;
    }
  }
`;

export const About = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.dark_200};

  @media screen and (max-width: 940px) {
    padding: 40px 24px;
  }

  .container {
    max-width: 1081px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 163px;

    @media screen and (max-width: 940px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 45px;
    }

    .profile {
      width: 367px;

      border-left: 6px solid ${({ theme }) => theme.primaryColor};
      border-radius: 4px;

      @media screen and (max-width: 940px) {
        max-width: 280px;
        width: 100%;

        @media screen and (max-width: 460px) {
          margin: 0 auto;
        }
      }
    }

    .content {
      h3 {
        margin-bottom: 40px;

        font-style: normal;
        font-weight: 600;
        font-size: 24px;

        text-transform: uppercase;
        color: ${({ theme }) => theme.light};

        @media screen and (max-width: 940px) {
          margin-bottom: 16px;
        }
      }
      p {
        margin-bottom: 21px;

        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        color: ${({ theme }) => theme.light};

        @media screen and (max-width: 940px) {
          font-size: 16px;
          margin-bottom: 8px;
        }
      }
      span {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        text-align: justify;
        color: ${({ theme }) => theme.gray_light};

        @media screen and (max-width: 940px) {
          font-size: 14px;
        }
      }
      .links {
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        gap: 48px;

        @media screen and (max-width: 940px) {
          margin-top: 32px;
          gap: 24px;
        }
      }
    }
  }
`;
