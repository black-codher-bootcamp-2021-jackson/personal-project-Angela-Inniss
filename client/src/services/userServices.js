// You can create all the fetches to your own APIs and externals APIs here
// This example fetch is specifically for our Salon API and is why the file is called profileService.js
import axios from "axios";

const createUser = async (user) => {
  console.log(user);

  const response = await axios.post(`/api/signup`, {
    name: user.name,
    username: user.username,
    email: user.email,
    password: user.password,
  });
  return response.data || [];
};

const signInUser = async (loginDetails) => {
  const { email, password } = loginDetails;
  const response = await axios.post(`/api/login`,{
      email,
      password
  });

  // console.log(response.data.payload.user); // has the id in it

  return response.data
};

const getUserId = async (userEmail) => {
  // console.log(userEmail);
  const response = await axios.get(`/api/getUserId`, {params: {email: userEmail}});
  // console.log("inside service",response);
  // console.log("inside service",response.data[0]._id);
  return response.data[0]._id;
}

// All of the endpoints in this file can be exported below
export { createUser, signInUser, getUserId};
