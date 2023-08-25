import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: relative;
  color: white;
  width: 80%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: 4vw;
    @media screen and (max-width: 768px) {
      font-size: 8vw;
    }
  }
`;
export const HeaderText = styled.h3`
  font-weight: bold;
`;
