import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
// import salon from "../../images/salonImage.jpg";
import salon from "../../images/girl1.jpg";
// import salon from "../../images/girl2.jpg";
import "../../../src/App.css";
import "../Search/search.css";



// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, getSalonsByLocation } from "../../services/salonService";



const Search = () => {
    const [salons, setSalons] = useState(null);
    const [locationsList, setLocations] = useState([]);
    const [servicesList, setServices] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedServices, setSelectedServices] = useState("");


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
    const filterByService = async (services) => {
        // console.log(services) //["wigs","weave"]
        // const servicesFilterd = services.map((service) => {
        //     return {
        //         services: service // {services: "wigs"} , {services: "weave"}
        //     }
        // })

        // console.log(servicesFilterd)
        const response = await getSalonsByLocation(services);
        setSalons(response);

    }

    // db.inventory.find( { tags: "red" } )
    const setAndFilterServices = (event) => {
        console.log(event); // event is an array 
        const services = event.map((service) => {
            return service.value
        })
        console.log(services)
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

// pages needed on app, 
// 1. home page local host 3000 / - will show front cover with static content and button to go to search (App.js) or component called home
// 2. search page links from home /search will show map and search bars and salon cards with info
// 3. landing pages for inspo  / weaves-inspo / braids-inspo / natural=inspo / relaxed-inspo