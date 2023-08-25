import React from "react";
import { Copyright, FooterContainer, FooterText } from "@/styles/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>24hr Delivery Service</FooterText>
      <Copyright>
        {" "}
        Copyright @{new Date().getFullYear()} Trusted Homes
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
