import React, { useState } from "react";
import {
  FaCommentAlt,
  FaListUl,
  FaBars,
  FaTag,
  FaTh,
  FaTruck,
  FaShare,
  FaTimesCircle,
  FaMoon,
  FaBell,
  FaLanguage,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const MenuList = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/inventory",
      name: "Inventory",
      icon: <FaTag />,
    },
    {
      path: "/order",
      name: "Order",
      icon: <FaListUl />,
    },
    {
      path: "/shipping",
      name: "Shipping",
      icon: <FaTruck />,
    },
    {
      path: "/channel",
      name: "Channel",
      icon: <FaShare />,
    },
  ];
  return (
    <div className="container">
      <div class="topnav">
        <img src="" alt="logo image" />
        <FaBars class="bars" />
        <div className="toplinks">
          <FaBell className="toplink" />
          <FaMoon className="toplink" />
          <FaLanguage className="toplink" />
        </div>
      </div>

      <div className="sidenav">
        {MenuList.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>
        {children}
        <div></div>
      </main>
    </div>
  );
};

export default SideNav;
