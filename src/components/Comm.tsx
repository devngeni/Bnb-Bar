import { CommContainer, CommWrapper, HoverText } from "@/styles/Comm";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { styled } from "styled-components";

const StyledWhatsappIcon = styled(FaWhatsapp)`
  color: green;
`;

const Comm = () => {
  return (
    <CommContainer>
      <Link
        href="https://wa.me/254794701568"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CommWrapper>
          <StyledWhatsappIcon size={60} />
          <HoverText className="hover-text">We are available</HoverText>
        </CommWrapper>
      </Link>
    </CommContainer>
  );
};

export default Comm;
