import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Pages/Dashboard";
import Inventory from "./Components/Pages/Inventory";
import Order from "./Components/Pages/Order";
import Shipping from "./Components/Pages/Shipping";
import Channel from "./Components/Pages/Channel";
import Accepted from "./Components/Pages/Accepted";
import AWB_Created from "./Components/Pages/AWB_Created";
import ReadytoShip from "./Components/Pages/ReadytoShip";
import Shipped from "./Components/Pages/Shipped";
import Completed from "./Components/Pages/Completed";
import Pricing from "./Components/Pages/Pricing";

const App = () => {
  return (
    <BrowserRouter>
      <SideNav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route
            path="/order"
            element={
              <Order>
                <Route path="/pricing" element={<Pricing/>} />
                <Route path="/accepted" element={<Accepted />} />
                <Route path="/awb" element={<AWB_Created />} />
                <Route path="/readyshipping" element={<ReadytoShip />} />
                <Route path="/shipped" element={<Shipped />} />
                <Route path="/completed" element={<Completed />} />
              </Order>
            }
          />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </SideNav>
    </BrowserRouter>
  );
};

export default App;
