import React from "react";
import SalonCard from "../../components/SalonCard/SalonCard";
import "./home.css"
import texture from "../../images/textureBG.png";
import homegirl from "../../images/GirlHome.jpg"

const Home = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-item">About</div>
                <div className="nav-item" >Be Insipired</div>
                <div className="nav-item">Search</div>
            </nav>
            <div className="container">
                <div className="background-white">
                    <div>
                        <h1>Salon</h1>
                        <h1>Search</h1>
                        <h3>this is a subheading with text about webiste </h3>
                    </div>
                </div>
                <div className="background-image">
                    <img src={texture}></img>

                </div>
            </div>
            <img className="homepage-girl" src={homegirl}></img>
            <h1 className="sub-title">Find Inspo</h1>
            <div>subtext</div>
        </>
    )
}
export default Home;