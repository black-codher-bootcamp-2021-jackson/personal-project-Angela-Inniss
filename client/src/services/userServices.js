// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Salon API and is why the file is called profileService.js
import axios from "axios";

const createUser = async (user) => {
    console.log(user);

    
  const response = await axios.post(`/api/signup`, { 
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password  });
  return response.data || [];
};

// All of the endpoints in this file can be exported below
export { createUser };
