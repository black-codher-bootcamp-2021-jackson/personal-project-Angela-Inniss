import React, {useEffect,useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Curly from "./pages/Landing/Curly";
import Natural from "./pages/Landing/Natural";
import Relaxed from "./pages/Landing/Relaxed";
import Weave from "./pages/Landing/Weave";
import Braids from "./pages/Landing/Braids.js";
import SignUp from "./pages/Home/SignUp";
import SignIn from "./pages/Home/SignIn";

import { getUserId } from "./services/userServices";

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // this is the user objet from the DB


  const getLoggedInUser = async () => {
    const response = await getUserId();
  };

  useEffect(() => {
    // console.log("user response", user);
    const userSessionToken = localStorage.getItem("userToken");
    if (userSessionToken) {
      setIsUserLoggedIn(true); // needs to update global state 
      // get user id  by sending user email?? 
    const user = getLoggedInUser(); // need to send some email address here to the api / or can select direct from redux store on salon page
      // setLoggedInUser(user);
    }
    return console.log("user not found or logged in");
  }, []);

 

  // when the app opens send request to see if there is a logged in user 
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home isUserLoggedIn={isUserLoggedIn} />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/landing-curly' element={<Curly />} />
        <Route exact path='/landing-natural' element={<Natural />} />
        <Route exact path='/landing-relaxed' element={<Relaxed />} />
        <Route exact path='/landing-weave' element={<Weave />} />
        <Route exact path='/landing-braids' element={<Braids />} />
      </Routes>
    </BrowserRouter >)
}
export default App;
// add routes here react-router-dom
// https://stackoverflow.com/questions/69854011/matched-leaf-route-at-location-does-not-have-an-element