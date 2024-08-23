import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import NavDropdown from "./NavDropdown";

function Header() {
  return (
    <div className="w-full flex justify-between shadow-md">
      <div className="container mx-auto my-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-6">
            <Logo />
            <div className="md:hidden gap-10">
              <NavDropdown />
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <Nav />
            </div>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
