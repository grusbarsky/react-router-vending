import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import kitkatImg from "./kitkatimg.jpg";

function Kitkat() {
  return (
    <div className="Sardines">
      <img src={kitkatImg} alt="KitKat" />
      <Message>
        <h1>You chose a KitKat!</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Kitkat;
