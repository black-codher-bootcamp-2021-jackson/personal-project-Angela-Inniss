
import React from "react";
import "./featureCard.css";
import braids from "../../images/girl3.jpg";



const FeatureCard = (props) => {

    return (
        <div className="feature-card-container">
            <h1>{props.heading}</h1>
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