import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import axios from "axios";
import { dataReducer, initState } from "../reducer";

function Work() {
  const [state, dispatsh] = useReducer(dataReducer, initState);

  useEffect(() => {
    axios.get("js/data.json").then((data) => {
      dispatsh({ type: "workApi", works: data.data.works });
    });
  }, []);

  const workList = state.works.map((i) => {
    return (
      <div key={i.id} className="part ">
        <i className={i.icon_name}></i>
        <h4 className="part-title">{i.title}</h4>
        <hr className="line" />
        <p className="part-desc">{i.body}</p>
      </div>
    );
  });

  return (
    <div className="work">
      <div className="container">
        <h2 className="work-title">
          <span>My</span> Work
        </h2>
        {workList}
      </div>
    </div>
  );
}
export default Work;
