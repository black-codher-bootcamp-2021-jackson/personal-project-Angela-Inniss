// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Salon API and is why the file is called profileService.js
import axios from "axios";

const getAllSalons = async () => {
  console.log("inside get all salons");
  const response = await axios.get(`/api/salon`);
  console.log(response)
  return response.data || [];
};


const filterSalons = async (filteredData) => {
  // console.log("in api service", filteredData);

  const params = {
    location: filteredData.location,
    services: filteredData.services

  }
  const response = await axios.get(`/api/salons/filter`, { params: params });
  // console.log(response);
  return response.data || [];

}

const filterSalonsByLocation = async (filteredData) => {
  console.log("in filter by location", filteredData);

  const params = {
    location: filteredData.location
  }

  const response = await axios.get(`/api/salons/filterLocation`, { params: params });
  console.log(response);
  return response.data || [];

}

// All of the endpoints in this file can be exported below
export { getAllSalons, filterSalons, filterSalonsByLocation };
