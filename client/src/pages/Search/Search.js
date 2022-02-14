import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
import salon from "../../images/girl1.jpg";


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, getSalonsByLocation } from "../../services/salonService";

import "../../../src/App.css";
import "../Search/search.css";


const Search = () => {
    const [salons, setSalons] = useState(null);
    const [locationsList, setLocations] = useState([]);
    const [servicesList, setServices] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);

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

    // send data to same function on submis or add data 

    const filterSalonByLocation = async (location) => {
        console.log(location)
        const response = await getSalonsByLocation({ location: location }); // needs to be called asyncronosly
        setSalons(response);
    }

    // function fires when user selects a location
    const setAndFilterLocation = (event) => {
        const location = event.value
        setSelectedLocation(location);
        filterSalonByLocation(location)
    }

    // async request as it's fetching data from DB
    // if there is a already a location selected then map through the salons in useState as that means the user
    // only wants to see services from that location
    // then we map through the services array selected by the user (selectedServices) e.g. ['braids'] - user has selected braids
    // then we check for each selectedService if the services from the salons that were already already in the state from a particular location i.e Manchester
    // inclues the services selected by the user then push it into a new array and update the salons state (useState)
    const filterByService = async (selectedServices) => {
        console.log(selectedServices)
        let servicesByLocation = []
        if (selectedLocation) {
            salons.map((salon) => {
                const { services, name } = salon;
                // console.log(services);
                // console.log(name);
                selectedServices.map((selectedService) => {
                    if (services.includes(selectedService)) {
                        servicesByLocation.push(salon);
                    }
                })
            })
            // console.log(filteredServiesWithLocation);
            setSalons(servicesByLocation);
            return;
        }
        const response = await getSalonsByLocation(selectedServices);
        setSalons(response);

    }

    const setAndFilterServices = (event) => {
        const services = event.map((service) => {
            return service.value
        })
        // console.log(services)
        setSelectedServices(services);
        filterByService(services)
    }
    return (
        <div>
            <div className="image-container">
                <div className="filters-container">
                    <SelectDropDownFilter
                        placeholder="Choose Location..."
                        options={locationsList}
                        className="locations-dropdown"
                        onChange={(event) => setAndFilterLocation(event)} // if we don't add a call back () => {} it will cause an infinite loop
                    />
                    <SelectDropDownFilter placeholder="Choose Services"
                        isMulti={true}
                        options={servicesList}
                        className="services-dropdown" onChange={(event) => setAndFilterServices(event)} />
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
