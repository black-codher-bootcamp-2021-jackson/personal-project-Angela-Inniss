const mongoose = require("mongoose");
const Salon = mongoose.model("salons");
const Favourite = mongoose.model("favourites");

// GET all salons
const salonRoutes = (app) => {
  app.get(`/api/salon`, async (req, res) => {
    // console.log("salon route");
    const salons = await Salon.find();
    // console.log(salons);
    return res.status(200).send(salons);
  });

  // a GET request does not have a response body. Have to send the query in the url params and call req.query
  app.get(`/api/salons/filter`, async (req, res) => {

    // console.log("angela", req.query);
    const { location, services } = req.query; // "manchester" ,["wigs"]
    const salons = await Salon.find({
      location: location,
      services: { $in: services },
    });
    
    const favourites = [{ salonId: "6213f2f8230b6d4d530a9dc9" }];
    const favouritesList = await Favourite.find();
    console.log("favourites list", favouritesList);

    const filteredData = salons.map((salon) => {
      console.log("id", salon._id === "6213f2f8230b6d4d530a9dc9"); // object vs string
      console.log("id2", typeof(salon._id)); // object
      console.log("inside filtered data", salon);
      // const matches = favouritesList.find((favourite) => {
        // console.log("fav", favourite);
        // console.log(favourite.salon_id === salon._id);
      //   return favourite.salon_id === salon._id;
      // });
      console.log(favourites[0].salonId === salon._id);
      return favourites.salonId === salon._id;
      // console.log("matches", matches);
      // return matches;
    });
    // const result = filteredData.filter(Boolean).map((el)=> {
    //   return 
    // })
    console.log("filteredData", filteredData);

    // FIND FAVOURITE BASED ON USER ID HERE TOO SEARCH
    // add a FAVOURITES.FIND here in this request to database and get all the favourites back then map over favourites and match to
    // userid and/ salon id
    // filter out on the back end before sending to the front end filter out the / match the salons that are favs and those that arent
    // do this by adding a "is favourite" key to each of the salon models first
    // then map over all salons and match (FIND)the user id with the favourite user id and set "is favourite" key to true if it is
    console.log("salons", salons);
    // MAP OVER DATA HERE
    // const favourites = [{ salonId: "6213f2f8230b6d4d530a9dc9" }];
    // const response = salons.map((salon) => {
    //   console.log(salon);
    //   // let favourite;
    //   // if (salon._id === favourites[0].salonId) {
    //   //   console.log("true is favourite");
    //   //   favourite = true;
    //   // } else {
    //   //   console.log("false is not favourite");
    //   //   favourite = false;
    //   // }
    //   return { ...salon, favourite: true };
    // });

    // { location: "Manchester", services: { $all: ["wigs"] } },
    // return res
    //   .status(200)
    //   .send(
    //     salons.map((salon) => ({
    //       ...salon._doc, // make a copy of the salon which is now in _doc for some reason.
    //       favourite: favourites.find(
    //         (favourite) => favourite.salonId === salon._doc._id // adding a favourite key to each salon objet but it says this is not really allowed if favoureites isn't already in the salons model
    //       ),
    //     }))
    //   );
  });

  // GET salon by location only
  app.get(`/api/salons/filterLocation`, async (req, res) => {
    const { location } = req.query; // "manchester"
    const response = await Salon.find({ location: location });
    return res.status(200).send(response);
  });

  // GET REQUEST SALONS BY USER ID - DO THIS BY USING USER ID
};

module.exports = salonRoutes;
