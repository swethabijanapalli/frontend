import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = () => {};
  return (
    <div className="Login container">
      <h1>login page</h1>
      <div className="login_form w-50">
        <form action="" onSubmit={handleSubmit}>
          <div className="email my-4">
            <input
              className="form-control"
              type="email"
              placeholder="email address"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password my-4">
            <input
              type="password"
              className="form-control"
              placeholder="enter password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login_button">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="signUp_button">
            <p>Are you a new user ?</p>
            <Link to="/signup" className="btn btn-outline-primary">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
