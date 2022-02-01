import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import "../../../src/App.css";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, getSalonsByLocation } from "../../services/salonService";

const Search = () => {
    const [salons, setSalons] = useState(null);
    const [locationsList, setLocations] = useState([]);
    const [servicesList, setServices] = useState([]);

    // getSalonsByLocation({ location: "Birmingham" });

    useEffect(() => {
        async function getSalons() {
            if (!salons) {
                const response = await getAllSalons();

                // set salon data 
                setSalons(response);

                // set location data for drop down 
                let locations = response.map((salon) => {
                    const { location } = salon;
                    return {
                        value: location.toLowerCase(),
                        label: location
                    }
                })
                setLocations(locations);

                // set services data from API
                response.map((salon) => {
                    const { services } = salon;
                    console.log(services)
                    const formattedServices = services.map((service) => {
                        console.log(service)
                        return {
                            value: service,
                            label: service
                        }
                    })
                    console.log(formattedServices);

                    setServices(formattedServices)
                })
            }
        }
        getSalons();
    }, [salons]);

    const renderSalon = (salon) => {
        return (
            <>
                <li key={salon._id}>
                    <h3>
                        {`${salon.name} 
                         ${salon.location}`}
                    </h3>
                    <p>{salon.description}</p>

                    <p>{salon.services.map((service => <p>{service}</p>))}</p>

                    <p>{salon.socials.map((social) => {
                        // console.log(social)
                        const { facebook, instagram, twitter } = social
                        if (social.facebook) {
                            return <p> <a href={facebook}>facebook</a></p>
                        }
                        if (social.instagram) {
                            return <p><a href={instagram}>Instagram</a></p>
                        }
                        if (social.twitter) {
                            return <p><a href={twitter}>twitter</a></p>
                        }
                    })}</p>

                </li >
            </>
        );
    };

    return (
        <div>
            <div className="filters-container">
                <SelectDropDownFilter
                    placeholder="Choose Location..."
                    options={locationsList}
                    className="locations-dropdown" />
                <SelectDropDownFilter placeholder="Choose Services"
                    isMulti
                    options={servicesList}
                    className="services-dropdown" />
            </div>
            <div>
                <ul>
                    {salons && salons.length > 0 ? (
                        salons.map((salon) => renderSalon(salon))
                    ) : (
                        <p>No salons found</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Search;

// pages needed on app, 
// 1. home page local host 3000 / - will show front cover with static content and button to go to search (App.js) or component called home
// 2. search page links from home /search will show map and search bars and salon cards with info
// 3. landing pages for inspo  / weaves-inspo / braids-inspo / natural=inspo / relaxed-inspo
