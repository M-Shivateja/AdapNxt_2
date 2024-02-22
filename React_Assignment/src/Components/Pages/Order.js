import React, { Children } from "react";
import { Link, NavLink } from "react-router-dom";
import '../Styles/order.css'
import Pricing from "./Pricing";
const Order = ({ Children }) => {
  const orderList = [
    {
      path: "/pricing",
      name: "Pricing",
    },
    {
      path: "/accepted",
      name: "Accepted",
    },
    {
      path: "/awb",
      name: "AWB-Created",
    },
    {
      path: "/readyshiping",
      name: "ReadytoShip",
    },
    {
      path: "/shipped",
      name: "Shipped",
    },
    {
      path: "/completed",
      name: "Completed",
    },
    {
      path: "/cancelled",
      name: "Cancelled",
    },
  ];
  return (
    <div className="ordermain">
      <div className="order">
        {orderList.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="order"
            activeClassName=" Active"
          >
            <div className="order-name">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main><Pricing/></main>
    </div>
  );
};

export default Order;
