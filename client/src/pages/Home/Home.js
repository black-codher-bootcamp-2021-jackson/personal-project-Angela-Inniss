import React from "react";
import "./home.css"
import texture from "../../images/textureBG.png";
import homegirl from "../../images/GirlHome.jpg"
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import braids from "../../images/girl3.jpg";
import weave from "../../images/girl4.jpg";
import natural from "../../images/girl5.jpg";

const FeatureCardData = [
    {
        heading: "Braids",
        subheading: "subheading",
        imageSrc: braids,
        id: "card-one"
    },
    {
        heading: "Natural",
        subheading: "subheading",
        imageSrc: natural,
        id: "card-two"
    },
    {
        heading: "Weave",
        subheading: "subheading",
        imageSrc: weave,
        id: "card-three"
    }
];


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
                        <h3 className="subtitle">this is a subheading with text about webiste </h3>
                    </div>
                </div>
                <div className="background-image">
                    <img src={texture}></img>

                </div>
            </div>
            <img className="homepage-girl" src={homegirl}></img>
            <h1 className="sub-title">Find Inspo</h1>
            <div>subtext</div>
            <div className="home-feature-cards-container">
                {FeatureCardData.map((data) => {
                    const { heading, subheading, imageSrc, id } = data;
                    console.log(heading, subheading, imageSrc)
                    return (<FeatureCard
                        heading={heading}
                        subheading={subheading}
                        imageSrc={imageSrc}
                        id={id} />)
                })}
            </div>


        </>
    )
}
export default Home;