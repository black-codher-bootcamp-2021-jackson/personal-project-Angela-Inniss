import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
import salon from "../../images/girl1.jpg";
import { servicesList } from "./servicesList";
import { locationsList } from "./locationsList";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, filterSalons, filterSalonsByLocation } from "../../services/salonService";

import "../../../src/App.css";
import "../Search/search.css";



const Search = () => {
    const [salons, setSalons] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);

    useEffect(() => {
        console.log("hello")
        async function getSalons() {
            if (!salons) {
                const response = await getAllSalons();
                setSalons(response);
            }
        }
        getSalons();
    }, [salons]);

    useEffect(() => {
        async function filter() {
            if (selectedLocation !== "" && selectedServices.length === 0) {
                const response = await filterSalonsByLocation({ location: selectedLocation });
                setSalons(response);
            }
            else if (selectedLocation !== "" && selectedServices.length !== 0) {
                const response = await filterSalons({ location: selectedLocation, services: selectedServices });
                setSalons(response);
            }
        }
        filter();
    }, [selectedLocation, selectedServices]);

    const setLocation = (event) => {
        const location = event.value
        setSelectedLocation(location);
    }

    const setServices = (event) => {
        const services = event.map((service) => {
            return service.value
        })
        setSelectedServices(services);
    }

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
                    <SelectDropDownFilter placeholder="Choose Services"
                        isMulti={true}
                        options={servicesList}
                        className="services-dropdown" onChange={(event) => setServices(event)} />
                </div>

                <img src={salon} />
            </div>
            <div>
                <h1 className="salon-heading">Search for a salon</h1>
                <h1 className="subheading">Salons</h1>
                <ul className="salon-list">
                    {salons && salons.length > 0 ? (
                        salons.map((salon) =>
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

                            />)
                    ) : (
                        <p>No salons found</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Search;