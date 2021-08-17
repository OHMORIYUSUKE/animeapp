import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const View = () => {
  let { name } = useParams();
  return <div>Now showing post {name}</div>;
};
export default View;
