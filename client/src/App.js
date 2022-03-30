import React from "react";
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

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
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