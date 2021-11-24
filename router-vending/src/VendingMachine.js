import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import MachineImg from "./machine.jpg";

function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${MachineImg})` }}>
      <Message>
        <h1>What would you like to eat?</h1>
      </Message>
      <Message>
        <h1><Link to="/soda">soda</Link></h1>
        <h1><Link to="/chips">chips</Link></h1>
        <h1><Link to="/kitkat">KiKat</Link></h1>
      </Message>
    </div>
  );
}

export default VendingMachine;
