import React, { useState } from "react";
import { signInUser } from "../../services/userServices";
import braidsImage from "../../images/girl3.jpg";
import "./signUp.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    signInUser({
      email: email,
      password: password,
    }).then((response) => {
      console.log(response); // this is the token
      // set the state of the user
      //   setUser(response.);
      // store the user in localStorage
      localStorage.setItem("userToken", response.token);
    });
  };
  return (
    <div className="page-container">
      <div className="container-left">
        <h2 className="signup-title">Sign into your account</h2>
        <img src={braidsImage}></img>
      </div>
      <div className="container-right">
        <h2 className="heading-signup"> Sign into Salon Search</h2>

        <h3 className="subheading-signup input-family">
          <input type="text" id="" value="" placeholder="Google sign up" />
        </h3>
        <p className="divider"></p>
        <form onSubmit={handleOnSubmit}>
          <div className="input-family">
            <label htmlFor="">Email</label>
            <input
              type="text"
              id="input-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-family">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="input-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn-flat-signup">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
