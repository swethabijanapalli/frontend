import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//register page
const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let data = { name, mobile, email, password, confirmPassword };
    if (name && email && password == confirmPassword) {
      axios.post("http://localhost:4000/signup", data).then((res) => {
        alert(res.data.message);
        navigate("/");
        console.log(data);
      });
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="signUp container mt-2 pt-5">
      <div className="col-10 col-sm-8 col-md-6 m-auto">
        <div className="card shadow ">
          <div className="card-body">
            <h1 className="text-center">Sign Up page</h1>
            <form action="" onSubmit={handleSubmit}>
              <div className="Name my-3">
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="enter name"
                  name="name"
                />
              </div>
              <div className="mobile_no my-3">
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="form-control"
                  placeholder="email mobile number"
                  name="moblie"
                />
              </div>
              <div className="email my-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="email address"
                  name="email"
                />
              </div>
              <div className="password my-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="enter password"
                  name="password"
                />
              </div>
              <div className="confirm_password my-3">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  placeholder="re-enter password"
                  name="confirmPassword"
                />
              </div>
              <div className="signUp_button text-center my-4">
                <button className="btn btn-primary">Sign up</button>
              </div>
              <div className="login_button d-flex justify-content-center">
                <p>Already a User ?</p>
                <Link to="/">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
