import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
import salon from "../../images/girl1.jpg";
import { servicesList } from "./servicesList";
import { locationsList } from "./locationsList";
<<<<<<< HEAD
=======

>>>>>>> 94cda93 (manage to send data to service)


// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, getSalonsByLocation, filterSalons } from "../../services/salonService";

import "../../../src/App.css";
import "../Search/search.css";



const Search = () => {
    const [salons, setSalons] = useState(null); // original full list..
    const [selectedSalons, setSelectedSalons] = useState([]);
    // const [locationsList, setLocations] = useState([]);
    // const [servicesList, setServices] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedServices, setSelectedServices] = useState([]);

    // one common function to filter

    // one function to update location state
    // one function to update services 

    useEffect(() => {
        console.log("hello")
        async function getSalons() {
            if (!salons) {
                const response = await getAllSalons();
                setSalons(response);
<<<<<<< HEAD

                // set location data for drop down 
                // let locations = response.map((salon) => {
                //     const { location } = salon;
                //     return {
                //         value: location,
                //         label: location
                //     }
                // })
                // setLocations(locations);

                // set services data from API
                // response.map((salon) => {
                //     const { services } = salon;
                //     // console.log(services)
                //     const formattedServices = services.map((service) => {
                //         // console.log(service)
                //         return {
                //             value: service,
                //             label: service
                //         }
                //     })
                //     // console.log(formattedServices);

                //     setServices(formattedServices)
                // })
=======
>>>>>>> 94cda93 (manage to send data to service)
            }
        }
        getSalons();
    }, [salons]);


    const filter = async () => {
        const response = await filterSalons({ location: selectedLocation, services: selectedServices });
        setSalons(response)

    }

    useEffect(() => {
        filter();
    }, [selectedLocation, selectedServices]);

    // send data to same function on submis or add data 

    const setAndFilterLocation = (event) => {
        const location = event.value
        setSelectedLocation(location);
        filter(location)
    }

    const setAndFilterServices = (event) => {
        const services = event.map((service) => {
            return service.value
        })
        setSelectedServices(services);
        filter(services)
    }


    // const filterByService = async (selectedServices) => {
    //     console.log(selectedServices)
    //     let servicesByLocation = []
    //     if (selectedLocation) {
    //         salons.map((salon) => {
    //             const { services, name } = salon;
    //             // console.log(services);
    //             // console.log(name);
    //             selectedServices.map((selectedService) => {
    //                 if (services.includes(selectedService)) {
    //                     servicesByLocation.push(salon);
    //                 }
    //             })
    //         })
    //         // console.log(filteredServiesWithLocation);
    //         setSalons(servicesByLocation);
    //         return;
    //     }
    //     const response = await getSalonsByLocation(selectedServices);
    //     setSalons(response);

    // }



    // start with original list and apply both filters 
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
                    <button> search </button>
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
