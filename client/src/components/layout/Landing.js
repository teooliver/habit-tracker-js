import React from "react";
import { Link } from "react-router-dom";
import LandingStyles from "../styledComponents/LandingStyles";
import design_sprint from "../../images/undraw_design_sprint_x3eb.svg";
import Login from "../auth/Login";

const Landing = () => {
  return (
    <LandingStyles>
      <div className="image">
        <img src={design_sprint} alt="board" />
      </div>

      <Login />
    </LandingStyles>
  );
};

export default Landing;
