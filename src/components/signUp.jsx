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
    <div className="signUp">
      <h1>Sign Up page</h1>
      <div className="signUp_form">
        <form action="" onSubmit={handleSubmit}>
          <div className="Name">
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="enter name"
              name="name"
            />
          </div>
          <div className="mobile_no">
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
              placeholder="email mobile number"
              name="moblie"
            />
          </div>
          <div className="email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="email address"
              name="email"
            />
          </div>
          <div className="password">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="enter password"
              name="password"
            />
          </div>
          <div className="confirm_password">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              placeholder="re-enter password"
              name="confirmPassword"
            />
          </div>
          <div className="signUp_button">
            <button className="btn btn-primary">Sign up</button>
          </div>
          <div className="login_button">
            <p>Already a User ?</p>
            <Link to="/" className="btn btn-outline-primary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
