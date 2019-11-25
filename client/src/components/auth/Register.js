import React, { useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../redux/actions/alerts";
import { register } from "../../redux/actions/auth";
import RegisterStyles from "../styledComponents/RegisterStyles";
import { Link, Redirect } from "react-router-dom";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/track" />;
  }
  return (
    <RegisterStyles>
      <div className="card">
        <h1>Sign Up</h1>
        <p>
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form onSubmit={e => onSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            // required
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            // required
          />
          {/* <small>
          Thie site uses gravatar so if you want a profile image, use a Gravatar
          email
        </small> */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            // minLength="6"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            // minLength="6"
          />
          <input type="submit" value="Register" />
        </form>
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </RegisterStyles>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
