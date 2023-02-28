import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.dark};
  padding: 41px 24px 40px 24px;

  @media screen and (max-width: 940px) {
    padding: 25px 24px 28px 24px;
  }

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

      @media screen and (max-width: 940px) {
        font-size: 14px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }
`;
