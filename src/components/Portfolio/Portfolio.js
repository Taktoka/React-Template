import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import axios from "axios";
import { dataReducer, initState } from "../reducer";

function Portfolio() {
  let [state, dispatch] = useReducer(dataReducer, initState);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      dispatch({ type: "imgApi", images: res.data.portfolio });
    });
  }, []);

  const PortfolioImgs = state.images.map((img) => {
    return (
      <div key={img.id}>
        <img src={img.image} alt="" />
        <p className="overlay">
          <span>Show Image</span>
        </p>
      </div>
    );
  });

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

      <div className="box">{PortfolioImgs}</div>
    </div>
  );
}
export default Portfolio;
