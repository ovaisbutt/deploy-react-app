import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/login">To Login</Link>
      <p>Hello</p>
    </div>
  );
};
