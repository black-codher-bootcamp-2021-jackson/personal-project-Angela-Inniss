
import React from "react";
import { Link } from "react-router-dom";

import "./featureCard.css";

const FeatureCard = (props) => {
    return (
        <div id={props.id} className="feature-card-container" data-aos="fade-up" >
            <Link to={props.url}><h1>{props.heading}</h1></Link>
            <h3>{props.subheading}</h3>
            <div className="feature-card-image">
                <img
                    alt="salon"
                    width="150px"
                    height="200px"
                    src={props.imageSrc}
                />
            </div>
        </div >

    )
}

export default FeatureCard;
