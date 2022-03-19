import React, { useState } from "react";
import { createUser } from "../../services/userServices";

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
    <div className="container-signup">
      <h2>Sign Up to Salon Search</h2>

      <h3>Sign up with Google</h3>
      <p> --------- Or --------</p>
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-flat-signup">Create Account</button>
      </form>
    </div>
  );
};
export default SignUp;
