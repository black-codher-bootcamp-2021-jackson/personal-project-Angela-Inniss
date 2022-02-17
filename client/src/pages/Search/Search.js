import React, { useState, useEffect } from "react";
import SelectDropDownFilter from "../../components/SelectDropdown/SelectDropdown";
import SalonCard from "../../components/SalonCard/SalonCard";
import salon from "../../images/girl1.jpg";
import { servicesList } from "./servicesList";
import { locationsList } from "./locationsList";


// SERVICES THAT CALL OUR API ENDPOINTS
<<<<<<< HEAD
import { getAllSalons, getSalonsByLocation, filterSalons } from "../../services/salonService";
=======
import { getAllSalons, filterSalons, filterSalonsByLocation } from "../../services/salonService";
>>>>>>> 773681f (add conditions to 2nd useeffect so first runs, clean up service and routes files)

import "../../../src/App.css";
import "../Search/search.css";



const Search = () => {
<<<<<<< HEAD
    const [salons, setSalons] = useState(null); // original full list..
    const [selectedSalons, setSelectedSalons] = useState([]);
    // const [locationsList, setLocations] = useState([]);
    // const [servicesList, setServices] = useState([]);
=======
    const [salons, setSalons] = useState(null);
>>>>>>> 773681f (add conditions to 2nd useeffect so first runs, clean up service and routes files)
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
            }
        }
        getSalons();
    }, [salons]);

<<<<<<< HEAD

    const filter = async () => {
        const response = await filterSalons({ location: selectedLocation, services: selectedServices });
        setSalons(response)

    }

    useEffect(() => {
=======
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
>>>>>>> 773681f (add conditions to 2nd useeffect so first runs, clean up service and routes files)
        filter();
    }, [selectedLocation, selectedServices]);

    // send data to same function on submis or add data 

    const setLocation = (event) => {
        const location = event.value
        setSelectedLocation(location);
        filter(location)
    }

    const setServices = (event) => {
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