import React from "react";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/changed">リンク → </Link>
    </div>
  );
};

export default Hello;
