import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(#151515, #151515) padding-box,
    linear-gradient(
        ${({ deg }) => deg}deg,
        ${({ primaryColor }) => primaryColor},
        ${({ secondColor }) => secondColor}
      )
      border-box;
  border-radius: 4px;
  border: 3px solid transparent;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 16px;
    margin: 0 auto;

    width: 160px;
    height: 45px;

    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.light};

    &:hover {
      ${({ theme }) => theme.gray_light};
    }

    @media screen and (max-width: 940px) {
      font-size: 14px;
      width: 130px;
      height: 38px;
    }
  }
`;
