import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setUserId } from "../../features/user/userSlice";

import { signInUser } from "../../services/userServices";
import braidsImage from "../../images/girl3.jpg";

import "./signUp.css";

const SignIn = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");

  // selectors
  const userEmail = useSelector((state) => state.user.email);
  const userId = useSelector((state) => state.user.userId);

  const [password, setPassword] = useState("");

 // store actions
  const onSetUserEmail = (value) => {
    dispatch(setEmail(value));
  };

  const getUserId = (value) => {
    dispatch(setUserId(value))
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    signInUser({
      email: userEmail,
      password: password,
    }).then((response) => {
      // store the user in localStorage
      localStorage.setItem("userToken", response.token);
      console.log(response.payload);
      // get user id here and store in some state somewhere globally and then use it to pass into the getuserid state
      // set the user id to redux store userId
      getUserId(response.payload.user.id); // setting userId in redux store
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
          <input type="text" id="" value="" placeholder="Google sign in" />
        </h3>
        <p className="divider"></p>
        <form onSubmit={handleOnSubmit}>
          <div className="input-family">
            <label htmlFor="">Email</label>
            <input
              type="text"
              id="input-email"
              value={userEmail}
              onChange={(e) => onSetUserEmail(e.target.value)}
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
            {/* {userId} */}
          </div>
          <button className="btn-flat-signup">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
