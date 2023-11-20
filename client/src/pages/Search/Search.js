import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
import salon from "../../images/girl1.jpg";
import { servicesList } from "./servicesList";
import { locationsList } from "./locationsList";

// SERVICES THAT CALL OUR API ENDPOINTS
import {
  getAllSalons,
  filterSalons,
  filterSalonsByLocation,
} from "../../services/salonService";

import {
  getAllFavourites,
  addFavourite,
} from "../../services/favouriteService";

import "../../../src/App.css";
import "../Search/search.css";

const Search = (props) => {
  const [salons, setSalons] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  // const [salonIsFavourite, setSalonIsFavourite] = useState("");
  const [favourites, setFavourites] = useState(null);

  // if user is logged and has a user id
  useEffect(() => {
    async function getSalons() {
      if (!salons) {
        const response = await getAllSalons();
        setSalons(response);
      }
    }
    getSalons();
  }, [salons]);

  const testsalonid = "6213f2f8230b6d4d530a9dc9";

  useEffect(() => {
    async function getFavs() {
      if (!favourites) {
        const response = await getAllFavourites();

        setFavourites(response);
      }
    }
    getFavs();
  }, [salons, favourites]);

  useEffect(() => {
    async function filter() {
      if (selectedLocation !== "" && selectedServices.length === 0) {
        const response = await filterSalonsByLocation({
          location: selectedLocation,
        });
        setSalons(response);
      } else if (selectedLocation !== "" && selectedServices.length !== 0) {
        const response = await filterSalons({
          location: selectedLocation,
          services: selectedServices,
        });
        setSalons(response);
      }
    }
    filter();
  }, [selectedLocation, selectedServices]);

  // const userId = props.userId or select user id redux  can import user id from redux store when set up
  // const userId = useSelector((state) => state.user.userId);
  const userId = "6262eb8d007f0d82a88e5b49";

  // console.log("STORE USER ID", userId);

  const setSavedSalon = async (salonId) => {
    const response = await addFavourite({ id: salonId }); // send as an object!
    // console.log("setsavedsalon", response);
    // set liked salons in usestate?
    const favs = response.salon_id;
    // setFavourites(favs);
    favourites.push(favs);
    // if(response.salon_id === salonId && response.user_id === userId){
    //   setSalonIsFav(true);
    // }
  };
  const setLocation = (event) => {
    const location = event.value;
    setSelectedLocation(location);
  };

  const setServices = (event) => {
    const services = event.map((service) => {
      return service.value;
    });
    setSelectedServices(services);
  };

  return (
    <div>
      <div className="image-container">
        <div className="filters-container">
          <SelectDropDownFilter
            placeholder="Choose Location..."
            options={locationsList}
            className="locations-dropdown"
            onChange={(event) => setLocation(event)} // if we don't add a call back () => {} it will cause an infinite loop
          />
          <SelectDropDownFilter
            placeholder="Choose Services"
            isMulti={true}
            options={servicesList}
            className="services-dropdown"
            onChange={(event) => setServices(event)}
          />
        </div>

        <img src={salon} />
      </div>
      <div>
        <h1 className="salon-heading">Search for a salon</h1>
        <h1 className="subheading">Salons</h1>
        <ul className="salon-list">
          {salons && salons.length > 0 ? (
            salons.map((salon) => (
              <SalonCard
                name={salon.name}
                location={salon.location}
                description={salon.description}
                image={salon.image}
                services={salon.services}
                socials={salon.socials}
                facebookLink={salon.facebook}
                instagramLink={salon.instagram}
                twitterLink={salon.twitter}
                setSalonIsFavourite={() => {}}
                salonIsFav={favourites?.find(favourite => favourite.salon_id === salon._id)}
                salonId={salon._id}
                 setSavedSalon={() => setSavedSalon(salon._id)}
                key={salon._id}
                isUserLoggedIn={props.isUserLoggedIn}
              />
            ))
          ) : (
            <p>No salons found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Search;
