import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 152px 24px 118px 24px;
  background-color: ${({ theme }) => theme.dark};
  color: #fff;

  @media screen and (max-width: 940px) {
    padding: 92px 24px 40px 24px;
  }

  .container {
    max-width: 1081px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 64px;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 29px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.light};

      @media screen and (max-width: 940px) {
        font-size: 24px;
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      gap: 103px;
      align-items: flex-start;

      @media screen and (max-width: 940px) {
        flex-direction: column;
        gap: 40px;
      }

      .select {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 100%;

        @media screen and (max-width: 940px) {
          flex-direction: row;
          overflow-x: scroll;
        }

        button {
          background-color: transparent;
          border: none;
          border-left: 3px solid ${({ theme }) => theme.dark_200};
          padding: 18px 42px 15px 36px;
          cursor: pointer;

          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          color: ${({ theme }) => theme.gray_light};

          @media screen and (max-width: 940px) {
            font-size: 14px;
          }
        }

        ${({ experienceSelecting }) => experienceSelecting} {
          border-left: 3px solid ${({ theme }) => theme.primaryColor};
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          color: ${({ theme }) => theme.light};

          @media screen and (max-width: 940px) {
            border-left: none;
            border-bottom: 3px solid ${({ theme }) => theme.primaryColor};
            font-size: 14px;
          }
        }
      }
      .experiences {
        max-width: 637px;
        width: 100%;

        .profession {
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          color: ${({ theme }) => theme.light};

          @media screen and (max-width: 940px) {
            margin: 0 15px 0 0;
            font-size: 16px;
          }
        }

        .period {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: ${({ theme }) => theme.gray_light};

          @media screen and (max-width: 940px) {
            font-size: 12px;
          }
        }

        .company {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: ${({ theme }) => theme.primaryColor};
          margin: 26px 0;

          @media screen and (max-width: 940px) {
            margin: 16px 0;
            font-size: 14px;
          }
        }
        .description {
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          color: ${({ theme }) => theme.gray_light};

          @media screen and (max-width: 940px) {
            font-size: 14px;
          }
        }
      }
    }
  }
`;
