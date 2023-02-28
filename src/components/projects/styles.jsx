import styled from "styled-components";

export const Container = styled.section`
  padding: 100px 24px;
  background-color: ${({ theme }) => theme.dark_200};

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
    }

    .projects {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;