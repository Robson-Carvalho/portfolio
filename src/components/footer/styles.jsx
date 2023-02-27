import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.dark};
  padding: 41px 0 40px 0;

  .content {
    max-width: 1081px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.gray_light};
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }
`;
