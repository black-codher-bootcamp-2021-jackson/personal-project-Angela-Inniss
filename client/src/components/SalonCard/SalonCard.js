
import React from "react";
import "../SalonCard/salonCard.css";


const services = ["weave", "wigs", "natural", "braids"];
const socials = [
    { facebook: "www.facebook.com/snippers" },
    { instagram: "www.instagram.com/snippers" },
    { twitter: "www.twitter.com/snippers" }]



const SalonCard = (props) => {

    return (
        <div className="card-container">
            <img />
            <h2 className="salon-name">{props.name}</h2>
            <h3 className="salon-location">{props.location}</h3>

            <p>{socials.map((social) => {
                if (social.facebook) {
                    return <p> <a href={props.socialicon}>facebook</a></p>
                }
                if (social.instagram) {
                    return <p><a href={props.socialicon}>Instagram</a></p>
                }
                if (social.twitter) {
                    return <p><a href={props.socialicon}>twitter</a></p>
                }
            })}</p>
            <p className="salon-description">{props.description}</p>
            <p>{services.map((service => <p>{service}</p>))}</p>
        </div>
    )
}
export default SalonCard;


// in this component i need 
// a title prop
// a description prop
// an image
// social media icon // array of objects
// services // array