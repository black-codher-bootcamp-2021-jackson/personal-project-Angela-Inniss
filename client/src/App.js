import React, { useState, useEffect } from "react";
import facebook from "./icons/facebookIcon";
import selectDropDownFilter from "./components/selectDropdown";
// import Select from 'react-select'
import Select, { components } from "react-select";
// Add this in your component file

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllSalons, getSalonsByLocation } from "./services/salonService";


function App() {
  const [salons, setSalons] = useState(null);

  // getSalonsByLocation({ location: "Birmingham" });

  useEffect(() => {
    console.log("hi")
    async function getSalons() {
      if (!salons) {
        const response = await getAllSalons();
        setSalons(response);
      }
    }
    getSalons();
  }, [salons]);

  // <Select options={options} />
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
            console.log(social)
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
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <>
      <div>
        <Select options={options} />
        <ul>
          {salons && salons.length > 0 ? (
            salons.map((salon) => renderSalon(salon))
          ) : (
            <p>No salons found</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
