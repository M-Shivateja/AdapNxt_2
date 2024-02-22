import React from "react";

import { FaMoon, FaBell, FaLanguage } from "react-icons/fa";

const NavBar = () => {
  const Header = [
    {
      path: "/mode",
      name: "DarkLight",
      icon: <FaMoon />,
    },
    {
      path: "/notify",
      name: "Notify",
      icon: <FaBell />,
    },
    {
      path: "/translate",
      name: "Translate",
      icon: <FaLanguage />,
    },
  ];

  return <div></div>;
};

export default NavBar;
