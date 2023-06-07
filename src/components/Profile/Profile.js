import React, { useEffect, useReducer, useState } from "react";
import "./style.css";
import axios from "axios";
import { dataReducer, initState } from "../reducer";

function Profile() {
  const [state, dispatsh] = useReducer(dataReducer, initState);

  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      dispatsh({ type: "skillsApi", skills: res.data.profile });
    });
  }, []);

  let profileSkills = state.skills.map((skill) => {
    return (
      <div key={skill.id} className="bar">
        <span className="title">{skill.title}</span>
        <span className="perc">{skill.percentage}</span>
        <div className="parent">
          <span className={`sp${skill.id}`}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="profile_skills">
      <div className="container">
        <div className="profile">
          <h2 className="profile-title">
            <span>My </span>Profile
          </h2>
          <ul className="profile-list">
            <li className="profile-item">
              <span>Name</span>
              Hamza Nabil
            </li>
            <li className="profile-item">
              <span>Birthday</span>
              21/1/1996
            </li>
            <li className="profile-item">
              <span>Address</span>
              Ain shams
            </li>
            <li className="profile-item">
              <span>Phone</span>
              4444 5555 6666
            </li>
            <li className="profile-item">
              <span>Email</span>
              hamza@hamza.com
            </li>
            <li className="profile-item">
              <span>Website</span>
              <span className="web">www.google.com</span>
            </li>
          </ul>
        </div>
        <div className="skills">{profileSkills}</div>
      </div>
    </div>
  );
}
export default Profile;
