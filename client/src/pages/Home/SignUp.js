import React, { useState } from "react";
import { createUser } from "../../services/userServices";
import { Link } from "react-router-dom";
import braidsImage from "../../images/girl3.jpg";

import "./signUp.css";

const SignUp = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //     });
  //   }, []);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    createUser({
      name: name,
      username: username,
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
        <h2 className="signup-title">Sign up and see hair salons now!</h2>
        <img src={braidsImage}></img>
      </div>
      <div className="container-right">
        <p className="logo-signup">LOGO</p>
        <h2 className="heading-signup">Sign Up to Salon Search</h2>

        <h3 className="subheading-signup input-family">
          <input type="text" id="" value={name} placeholder="Google sign up" />
        </h3>
        <p className="divider"></p>
        <form onSubmit={handleOnSubmit}>
          <div className="grouped-input">
            <div className="input-family">
              <label htmlFor="">Name</label>
              <input
                type="text"
                id="input-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-family">
              <label htmlFor="">Username</label>
              <input
                type="text"
                id="input-username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

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
              placeholder="+ 6 charachters"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button className="btn-flat-signup">Create Account</button>
          </div>
          <div className="already-member">
            Already a member? <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
