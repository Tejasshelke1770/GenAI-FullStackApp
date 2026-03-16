import React from "react";
import "../auth.form.scss";
import { Link } from "react-router";

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="username"
              placeholder="Enter username"
              name="username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              name="password"
              required
            />
          </div>
          <button className="button primary-button">Register</button>
        </form>
        <p className="footer-text">
          Already have an account ?{" "}
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
