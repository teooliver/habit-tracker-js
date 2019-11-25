import React, { useState } from "react";
import RegisterStyles from "../styledComponents/RegisterStyles";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../redux/actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/track" />;
  }

  return (
    <RegisterStyles>
      <div className="card">
        <h1>Log In</h1>
        <p>
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            minLength="6"
          />

          <input type="submit" value="Log In " />
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </RegisterStyles>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
