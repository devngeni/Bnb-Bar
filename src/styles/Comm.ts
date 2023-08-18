import { styled } from "styled-components";

export const CommContainer = styled.div`
  position: fixed;
  bottom: 10%;
  right: 2%;
  transition: transform 0.9s ease;

  &:hover {
    transform: scale(1.3);
  }
  @media screen and (max-width: 768px) {
    bottom: 17%;
    right: 6%;
  }
`;

export const CommWrapper = styled.div`
  display: inline-block;
  position: relative;
  &:hover .hover-text {
    opacity: 1;
    visibility: visible;
  }
`;

export const HoverText = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) rotate(-15deg);
  background-color: black;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;
