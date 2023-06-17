import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import NavLink from "./NavigationLink";
import MenuDropdown from "./MenuDropdown";

const Navigation = () => {
  return (
    <nav className="w-full h-20 shadow-lg">
      <Container>
        <div className="w-fulll h-20 flex justify-between gap-2 items-center">
            <Logo></Logo>
            <NavLink></NavLink>
            <MenuDropdown></MenuDropdown>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
