import styled from "styled-components";

export const Container = styled.div`
  max-width: 530px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .image {
    width: 530px;
    height: 200px;
    border-radius: 4px 0px 0px 4px;
    border-left: 3px solid ${({ theme }) => theme.primaryColor};
    margin-bottom: 40px;
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #ffffff;
    margin-bottom: 40px;
  }

  .description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #c4c4c4;
    margin-bottom: 26px;
  }

  .techs {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #00d2df;
    margin-bottom: 32px;
  }
`;
