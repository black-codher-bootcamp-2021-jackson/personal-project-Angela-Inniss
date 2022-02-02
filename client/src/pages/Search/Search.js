import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
import "../../../src/App.css";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, getSalonsByLocation } from "../../services/salonService";


const Search = () => {
    const [salons, setSalons] = useState(null);
    const [locationsList, setLocations] = useState([]);
    const [servicesList, setServices] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");


    // console.log(selectedLocation);

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
                        value: location,
                        label: location
                    }
                })
                setLocations(locations);

                // set services data from API
                response.map((salon) => {
                    const { services } = salon;
                    // console.log(services)
                    const formattedServices = services.map((service) => {
                        // console.log(service)
                        return {
                            value: service,
                            label: service
                        }
                    })
                    // console.log(formattedServices);

                    setServices(formattedServices)
                })
            }
        }
        getSalons();
    }, [salons]);



    const filterSalonByLocation = async (location) => {
        const response = await getSalonsByLocation({ location: location }); // needs to be called asyncronosly
        setSalons(response);
    }

    // function fires when user selects a location
    const setAndFilterLocation = (event) => {
        const location = event.label

        setSelectedLocation(location);

        filterSalonByLocation(location)

    }

    return (
        <div>
            <div className="filters-container">
                <SelectDropDownFilter
                    placeholder="Choose Location..."
                    options={locationsList}
                    className="locations-dropdown"
                    onChange={(event) => setAndFilterLocation(event)} // if we don't add a call back () => {} it will cause an infinite loop
                />
                <SelectDropDownFilter placeholder="Choose Services"
                    isMulti
                    options={servicesList}
                    className="services-dropdown" />
            </div>
            <div>
                <ul>
                    {salons && salons.length > 0 ? (
                        salons.map((salon) =>
                            <SalonCard
                                name={salon.name}
                                location={salon.location}
                                description={salon.description}
                                services={salon.services}
                                socials={salon.socials}
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

// pages needed on app, 
// 1. home page local host 3000 / - will show front cover with static content and button to go to search (App.js) or component called home
// 2. search page links from home /search will show map and search bars and salon cards with info
// 3. landing pages for inspo  / weaves-inspo / braids-inspo / natural=inspo / relaxed-inspo
