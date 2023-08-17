import React from "react";
import { FooterContainer } from "@/styles/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <h2 style={{ fontWeight: "bold" }}>24hr Delivery Service</h2>
      <p> Copyright @{new Date().getFullYear()} Trusted Homes</p>
    </FooterContainer>
  );
};

export default Footer;
