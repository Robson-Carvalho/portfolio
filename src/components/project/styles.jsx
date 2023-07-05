import styled from "styled-components";

export const Container = styled.div`
  max-width: 530px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 940px) {
    align-items: stretch;
  }

  .image {
    /* max-width: 530px; */
    width: 100%;
    border-radius: 4px 0px 0px 4px;
    border-left: 4px solid ${({ theme }) => theme.primaryColor};
    margin-bottom: 40px;

    @media screen and (max-width: 940px) {
      /* max-width: 312px; */
      width: 100%;
    }
  }

  .title {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 40px;

    @media screen and (max-width: 940px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }

  .description {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #c4c4c4;
    margin-bottom: 26px;

    @media screen and (max-width: 940px) {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }

  .techs {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #00d2df;
    margin-bottom: 32px;

    @media screen and (max-width: 940px) {
      margin-bottom: 32px;
    }
  }

  .buttons {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 24px;

    @media screen and (max-width: 940px) {
      justify-content: center;
    }
  }
`;
