import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";
import NavbarStyles from "../styledComponents/NavbarStyles";

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a className="link" onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link className="link" to="/register">
          Register
        </Link>
      </li>
      <li>
        <Link className="link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <NavbarStyles>
      <div className="spacer"></div>
      <h1>Habit Tracker</h1>
      <nav>
        {!loading && <> {isAuthenticated ? authLinks : null} </>}

        {user && isAuthenticated && <img src={user.avatar} alt="avatar" />}
      </nav>
    </NavbarStyles>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
