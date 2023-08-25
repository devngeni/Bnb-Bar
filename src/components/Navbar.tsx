import React, { useEffect, useState } from "react";
import { BodyContainer, TextHeader } from "@/styles/Landing";
import { HeaderText, NavbarContainer } from "@/styles/Navbar";

const Navbar = () => {
  return (
    <BodyContainer>
      <NavbarContainer>
        <TextHeader>BNB BAR</TextHeader>
        <HeaderText>Drinks & Smokes</HeaderText>
        <HeaderText>24hr Service</HeaderText>
        <HeaderText>Call/Whatsapp</HeaderText>
        <HeaderText>+254794701568</HeaderText>
      </NavbarContainer>
    </BodyContainer>
  );
};

export default Navbar;
