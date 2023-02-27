import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 100px 24px 118px 24px;
  color: #fff;

  .container {
    max-width: 1081px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 26px;

    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 29px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.light};
    }

    .content {
      display: flex;
      flex-direction: row;
      gap: 103px;
      align-items: flex-start;

      .select {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

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
        }

        ${({ experienceSelecting }) => experienceSelecting} {
          border-left: 3px solid ${({ theme }) => theme.primaryColor};
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          color: ${({ theme }) => theme.light};
        }
      }
      .experiences {
        max-width: 637px;
        width: 100%;

        .profession {
          font-family: "Inter";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          color: ${({ theme }) => theme.light};
          margin: 0 104px 0 0;
        }
        .period {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: ${({ theme }) => theme.light};
        }
        .company {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: ${({ theme }) => theme.primaryColor};
          margin: 26px 0;
        }
        .description {
          font-style: normal;
          font-weight: 300;
          font-size: 18px;
          color: ${({ theme }) => theme.gray_light};
        }
      }
    }
  }
`;
