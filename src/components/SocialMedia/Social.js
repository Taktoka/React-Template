import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import axios from "axios";
import { initState, dataReducer } from "./../reducer";

function SocialMedia() {
  const [state, dispatsh] = useReducer(dataReducer, initState);

  useEffect(() => {
    axios.get("js/data.json").then((data) => {
      dispatsh({ type: "socialApi", social: data.data.social });
    });
  }, []);

  let socialMedia = state.social.map((i) => {
    return (
      <div key={i.id} className="social">
        <i className={i.icon}></i>
        <p>
          <span className="info1">{i.title}</span>
          <span className="info2">{i.body}</span>
        </p>
      </div>
    );
  });
  return <div className="social-media">{socialMedia}</div>;
}
export default SocialMedia;
