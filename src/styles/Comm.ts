import { styled } from "styled-components";

export const CommContainer = styled.div`
  position: fixed;
  bottom: 2%;
  left: 2%;
  transition: transform 0.9s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
