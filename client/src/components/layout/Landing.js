import React from "react";
import { Link } from "react-router-dom";
import LandingStyles from "../styledComponents/LandingStyles";
import design_sprint from "../../images/undraw_design_sprint_x3eb.svg";

const Landing = () => {
  return (
    <LandingStyles>
      <div className="image">
        <img src={design_sprint} alt="" />
      </div>
      <div className="card">
        <h1>Minintra</h1>
        <p>Minimalist Web App to help track and form new Habits</p>
        <Link className="btn" to="/register">
          Sign Up
        </Link>
        <Link className="btn" to="/Login">
          Login
        </Link>
      </div>
    </LandingStyles>
  );
};

export default Landing;
