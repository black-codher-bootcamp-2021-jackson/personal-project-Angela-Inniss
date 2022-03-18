import React, {useState } from "react";

import "./signUp.css";

const SignUp = () => {
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1000,
  //     });
  //   }, []);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
      e.preventDefault();
      console.log("submit");
       
  }
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
              value={userName}
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
        <button className="btn-flat">Create Account</button>
      </form>
    </div>
  );
};
export default SignUp;
