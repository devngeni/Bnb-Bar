import { CommContainer, CommWrapper, HoverText } from "@/styles/Comm";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
import { SocialIcon } from "react-social-icons";

const StyledWhatsappIcon = styled(SocialIcon)`
  color: lightGreen;
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
          <StyledWhatsappIcon
            network="whatsapp"
            style={{ height: 60, width: 60 }}
          />
          <HoverText className="hover-text">Order Now</HoverText>
        </CommWrapper>
      </Link>
    </CommContainer>
  );
};

export default Comm;
