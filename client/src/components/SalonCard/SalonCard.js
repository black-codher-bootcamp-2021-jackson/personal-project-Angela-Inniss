
import React from "react";
import "../SalonCard/salonCard.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { facebook: "www.facebook.com/snippers" },
    { instagram: "www.instagram.com/snippers" },
    { twitter: "www.twitter.com/snippers" }]



const SalonCard = (props) => {

    return (
        <div className="card-container">
            <img alt="salon" className="salon-image" width="100%" height="50%" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMHNhbG9ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <h2 className="salon-name">{props.name}</h2>
            <h3 className="salon-location">{props.location}</h3>

            <p className="socials">{props.socials.map((social, index) => {
                if (social.facebook) {
                    return (
                        <>
                            <a key={index} href={props.facebookLink}><FaFacebook /></a>
                        </>
                    )
                }
                if (social.instagram) {

                    return (
                        <>
                            {/* <a href={props.socialicon}>Instagram</a> */}
                            <a href={props.instagramLink}><FaInstagram /></a>

                        </>)
                }
                if (social.twitter) {
                    return (
                        <>
                            {/* <a href={props.socialicon}>twitter</a> */}
                            <a href={props.twitterLink}><FaTwitter /></a>

                        </>)
                }
            })}</p>
            <p className="salon-description">{props.description}</p>
            <div className="services">{props.services.map((service =>
                <div>{service}</div>))}</div>
        </div >
    )
}
export default SalonCard;