import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.dark_200};

  @media screen and (max-width: 940px) {
    padding: 40px 24px;
  }

  .content {
    max-width: 1081px;
    width: 100%;
    margin: 0 auto;

    h3 {
      margin-bottom: 60px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.light};

      @media screen and (max-width: 940px) {
        margin-bottom: 24px;
      }
    }

    .projects {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: center;

      flex-wrap: wrap;
      gap: 20px;

      @media screen and (max-width: 940px) {
        gap: 40px;
      }
    }
  }
`;
