import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { email, password };
    axios.post("http://localhost:4000/login", data).then((res) => {
      if (res.data.message == "login successfull") {
        navigate("/home");
      }
    });
  };
  return (
    <div className="Login container mt-5 pt-5">
      {/* <div className="row"> */}
      <div className="col-12 col-sm-8 col-md-6 m-auto">
        <div className="card shadow ">
          <div className="card-body">
            <h1 className="text-center">Log In</h1>
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
              <div className="login_button text-center my-3">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="signUp_button d-flex justify-content-center">
                <p className="me-2">Are you a new user ?</p>
                <Link to="/signup">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
