import React from "react";
import "../auth.form.scss";
import { Link } from "react-router";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form>
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
          <button className="button primary-button">Login</button>
        </form>
        <p className="footer-text">
          Don't have an account ?{" "}
          <Link className="link" to={"/register"}>
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
