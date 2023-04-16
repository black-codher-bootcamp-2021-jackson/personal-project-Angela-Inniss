import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setUserId,
  userIsLoggedIn
} from "../../features/user/userSlice";

import { signInUser } from "../../services/userServices";
import braidsImage from "../../images/girl3.jpg";
import { useNavigate } from 'react-router-dom';

import "./signUp.css";

const SignIn = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // selectors
  const userEmail = useSelector((state) => state.user.email);

  const [password, setPassword] = useState("");

  const isUserSignedIn = useSelector((state) => state.user.userLoggedIn);
  // const isUserSignedIn = true;
  console.log("isUserSignedIn", isUserSignedIn);

  // store actions
  const onSetUserEmail = (value) => {
    dispatch(setEmail(value));
  };

  const setUserIdToStore = (value) => {
    dispatch(setUserId(value));
  };
  const setUserIsLoggedIn = (value) => {
    dispatch(userIsLoggedIn(value));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    signInUser({
      email: userEmail,
      password: password,
    }).then((response) => {
      // store the user in localStorage
      localStorage.setItem("userToken", response.token);
      // console.log(response.payload);
      // get user id here and store in some state somewhere globally and then use it to pass into the getuserid state
      // set the user id to redux store userId
      setUserIdToStore(response.payload.user.id); // setting userId in redux store
      setUserIsLoggedIn(true);
    });
  };

  if (isUserSignedIn) {
    navigate("/");
  }

  return (
    <div className="page-container">
      <div className="container-left">
        <h2 className="signup-title">Sign into your account</h2>
        <img src={braidsImage}></img>
      </div>
      <div className="container-right">
        <h2 className="heading-signup"> Sign into Salon Search</h2>

        <h3 className="subheading-signup input-family">
          <input type="text" id="" placeholder="Google sign in" />
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
