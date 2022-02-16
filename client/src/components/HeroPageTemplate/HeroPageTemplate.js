import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import homegirl from "../../images/GirlHome.jpg";
import girl1 from "../../images/girl1.jpg";
import girl2 from "../../images/girl2.jpg"
import girl3 from "../../images/girl3.jpg"
import girl4 from "../../images/girl4.jpg";
import girl5 from "../../images/girl5.jpg"

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

            <div className="inspo-container">
                <div className="inspo-item">
                    <img src={homegirl} />
                </div>
                <div className="inspo-item">
                    <img src={girl1} />
                </div>
                <div className="inspo-item">
                    <img src={girl2} />
                </div>
                <div className="inspo-item">
                    <img src={girl3} />
                </div>
                <div className="inspo-item">
                    <img src={girl4} />
                </div>
                <div className="inspo-item">
                    <img src={girl5} />
                </div>
            </div>


        </>
    )
}
export default HeroPageTemplate;
