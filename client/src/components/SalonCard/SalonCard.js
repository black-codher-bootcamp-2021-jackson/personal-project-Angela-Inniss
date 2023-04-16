import React from "react";

import "../SalonCard/salonCard.css";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import SaveToFavourites from "../LikeButtonCounter/SaveToFavourites";

const SalonCard = (props) => {
  return (
    <div className="card-container">
      {props.isUserLoggedIn && <SaveToFavourites
        salonIsFavourite={props.setSalonIsFavourite}
        salonIsFav={props.salonIsFav}
        salonId={props.salonId} // set salon id maybe
        setSavedSalon={props.setSavedSalon}
      />}
      <img
        alt="salon"
        className="salon-image"
        width="100%"
        height="50%"
        src={props.image}
      />
      <h2 className="salon-name">{props.name}</h2>
      <h3 className="salon-location">{props.location}</h3>

      <p className="socials">
        {props.socials.map((social, index) => {
          if (social.facebook) {
            return (
              <>
                <a key={`${index}-facebook`}href={props.facebookLink}>
                  <FaFacebook />
                </a>
              </>
            );
          }
          if (social.instagram) {
            return (
              <>
                {/* <a href={props.socialicon}>Instagram</a> */}
                <a key={`${index}-insta`} href={props.instagramLink}>
                  <FaInstagram />
                </a>
              </>
            );
          }
          if (social.twitter) {
            return (
              <>
                {/* <a href={props.socialicon}>twitter</a> */}
                <a key={`${index}-twitter`} href={props.twitterLink}>
                  <FaTwitter />
                </a>
              </>
            );
          }
          return null;
         } 
       )}

      </p>
      <p className="salon-description">{props.description}</p>
      <div className="services">
        {props.services.map((service, index) => (
          <div key={`${index}-${service}`}>{service}</div>
        ))}
      </div>
    </div>
  );
};
export default SalonCard;
