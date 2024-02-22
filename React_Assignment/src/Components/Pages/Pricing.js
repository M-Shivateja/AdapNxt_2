import React from "react";
import "../Styles/pricing.css";
import { FaCheck, FaFileImport, FaPrint, FaShareAlt } from "react-icons/fa";
const Pricing = () => {
  // Dummy data for the table
  const dummyData = [
    {
      id: 1,
      orderNo: "ORD001",
      city: "New York",
      customerName: "John Doe",
      orderValue: "$100",
      status: "Pending",
    },
    {
      id: 2,
      orderNo: "ORD002",
      city: "Los Angeles",
      customerName: "Jane Smith",
      orderValue: "$150",
      status: "Pending",
    },
    {
      id: 3,
      orderNo: "ORD003",
      city: "Chicago",
      customerName: "James Brown",
      orderValue: "$200",
      status: "Pending",
    },
  ];

  return (
    <div>
      <div className="button-container">
        <div className="left-buttons">
          <button className="white-button">
            <FaFileImport />
            Import Order
          </button>
          <button className="white-button">
            <FaCheck />
            Accept
          </button>
          <button className="white-button">
            <FaPrint />
            Print
          </button>
        </div>
        <div className="right-buttons">
          <button className="refresh-button">Refresh</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input type="checkbox" /> Select
            </th>
            <th>Channel</th>
            <th>Order No</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>Channel Data</td>
              <td id="order_id">{item.orderNo}</td>
              <td>{item.city}</td>
              <td>{item.customerName}</td>
              <td>{item.orderValue}</td>
              <td id="Status">{item.status}</td>
              <td>
                <button className="action">Actions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
