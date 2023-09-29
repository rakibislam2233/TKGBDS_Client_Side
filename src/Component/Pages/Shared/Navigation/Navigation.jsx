import  { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavigationLink";
import MenuDropdown from "./MenuDropdown";
import MobileDevice from "./MobileDevice";
import { useContext } from "react";
import { UserContext } from "../../../../Provider/AuthProvider/AuthProvider";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { user, logOut } = useContext(UserContext);
  return (
    <>
    <nav className="w-full h-20 bg-rose-100  z-50 ">
        <div className="w-fulll container mx-auto h-20 flex justify-between gap-2 items-center px-5">
            <Logo></Logo>
            <NavLink></NavLink>
            <MenuDropdown user={user} logOut={logOut}></MenuDropdown>
            <MobileDevice user={user} logOut={logOut} navOpen={navOpen} setNavOpen={setNavOpen}/>
        </div>
    </nav>
    </>
  );
};

export default Navigation;
