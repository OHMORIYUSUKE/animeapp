import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const View = () => {
  let { name } = useParams();

  const JSONDATA = JSON.parse(localStorage.getItem("animeData"));

  const getAnimeDataByName = (name) => {
    const animeIndex = JSONDATA.findIndex((data) => data.title === name);
    return JSONDATA[animeIndex];
  };

  const animeDataMatched = getAnimeDataByName(name);

  console.log(animeDataMatched);

  return (
    <>
      <p>animeInfo</p>
      <p>title {animeDataMatched.title}</p>
      <p>imageUrl {animeDataMatched.ogp_image_url}</p>
      <img src={animeDataMatched.ogp_image_url} alt={animeDataMatched.title} />
      <p>description {animeDataMatched.ogp_description}</p>
    </>
  );
};
export default View;
