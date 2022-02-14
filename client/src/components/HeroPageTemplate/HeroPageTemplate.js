import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import texture from "../../images/textureBG.png";
import homegirl from "../../images/GirlHome.jpg"

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
                        <Link to="/search">
                            <button className="btn-flat">
                                {props.cta}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hero-background-image">
                    <img src={props.backgroundImageRight}></img>
                </div>
            </div>



        </>
    )
}
export default HeroPageTemplate;