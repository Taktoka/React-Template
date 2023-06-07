import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Profile from "../Profile/Profile";
import Portfolio from "../Portfolio/Portfolio";
import SocialMedia from "../SocialMedia/Social";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div>
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <SocialMedia />
      <Footer />
    </div>
  );
}
export default Main;
