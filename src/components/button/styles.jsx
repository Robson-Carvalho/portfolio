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

    gap: 16px;
    margin: 0 auto;

    padding: 12px 25px;

    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.light};

    @media screen and (max-width: 940px) {
      font-size: 14.2222px;
      justify-content: center;
      padding: 8px 20px;
    }
  }
`;
