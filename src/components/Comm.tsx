import { CommContainer } from "@/styles/Comm";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const IconLink = (props: any) => {
  const { url, IconComponent } = props;

  const handleLinkClick = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <div onClick={() => handleLinkClick(url)}>
      <IconComponent />
    </div>
  );
};
const Comm = () => {
  return (
    <CommContainer>
      <Link
        href="https://wa.me/254794701568"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={60} color="green" />
      </Link>
    </CommContainer>
  );
};

export default Comm;
