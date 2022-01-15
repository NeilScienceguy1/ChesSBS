import React from "react";
import NavbarData from "../data/NavbarData";
import { NavbarProps } from "../types/NavbarProps";

const HomeNavbar = ({links, logo}: NavbarProps) => {
  return (
    <div>
      <div className="navbar">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <nav>
          <ul>
            {links.map((link) => {
              return (
                <li className="navbar-li">
                  <a href={link.path} className="navbar-links">
                    {link.display}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <img src="./menu.png" alt="menu icon" className="menu-icon" />
      </div>
    </div>
  );
};

export default HomeNavbar;
