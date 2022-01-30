// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Salon API and is why the file is called profileService.js
import axios from "axios";

const getAllSalons = async () => {
  const response = await axios.get(`/api/salon`);
  return response.data || [];
};

const getSalonsByLocation = async (location) => {

  const userLocation = location
  console.log(userLocation); // manchester

  const response = await axios.get(`/api/salons`, { userLocation });
  console.log({ userLocation })
  console.log(response)
  return response.data || [];
}

// All of the endpoints in this file can be exported below
export { getAllSalons, getSalonsByLocation };
