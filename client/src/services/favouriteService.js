import axios from "axios";

const getAllFavourites = async (favourites) => {
  // const params = {
  //   salon_id: favourites.salonId,
  //   user_id: favourites.userId
  // }
  const response = await axios.get(`/api/favourite`);
  // console.log(response.data);
  return response.data || [];
};

const addFavourite = async (favouritedSalonId) => {
  const { id } = favouritedSalonId;
  // console.log("test", id);
  const response = await axios.post(
    `/api/addFavourite`,
    {
      id,
    },
    {
      headers: {
        "Authorization": "Bearer "+localStorage.getItem("userToken"), // sending the jwt to the BE too  in order to identify and verify the user 
      },
    }
  );
  return response.data;
};

// TODO NEXT - 04-05 - find out how to send data to BE and check if in the favs table this combination exists of user id nad salon id
// if it does send back TRUE so that when the user loads the SEARH PAGE then all their hearts are prefilled with the ones they like

// All of the endpoints in this file can be exported below
export { getAllFavourites, addFavourite };
