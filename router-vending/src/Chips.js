import React, { useState } from "react";
import chipsImg from "./Chips.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Chips.css";

function Chips() {

  const [bags, setBags] = useState([]);

  const b = bags.map((bag, i) => (
    <img
      key={i}
      src={chipsImg}
      className="bag"
      alt="bag of lay's chips"
    />
  ));
  return (
    <div className="Chips">
      <Message>
        <h1>You chose chips!!</h1>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
      {b}
    </div>
  );
}

export default Chips;
