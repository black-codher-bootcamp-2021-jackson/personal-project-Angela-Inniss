import React from "react";

import "./heroPageTemplate.css";


const HeroPageTemplate = (props) => {

    return (
        <>
            <div className="container">
                <div className="hero-background-white">
                    <div>
                        <h1 className="hero-title">{props.title}</h1>
                        <h1 className="hero-title2">{props.title2}</h1>
                        <h3 className="hero-subtitle">{props.subtitle}</h3>
                        <a href="#inspo-container">{props.cta}</a>
                    </div>
                </div>
                <div className="hero-background-image">
                    <img src={props.backgroundImageRight}></img>
                </div>
            </div>

            <div id="inspo-container" className="inspo-container">
                <div className="inspo-item">
                    <img alt="hairstyle1" src={props.image1} />
                </div>
                <div className="inspo-item">
                    <img alt="hairstyle2" src={props.image2} />
                </div>
                <div className="inspo-item">
                    <img alt="hairstyle3" src={props.image3} />
                </div>
                <div className="inspo-item">
                    <img alt="hairstyle4" src={props.image4} />
                </div>
                <div className="inspo-item">
                    <img alt="hairstyle5" src={props.image5} />
                </div>
                <div className="inspo-item">
                    <img height="300" width="300" alt="hairstyle6" src={props.image6} />
                </div>
            </div>

            <div className="video"></div>


        </>
    )
}
export default HeroPageTemplate;
