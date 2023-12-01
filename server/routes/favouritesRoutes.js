const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Favourite = mongoose.model("favourites");

// GET all favourites
const favouriteRoutes = (app) => {
  app.get(`/api/favourite`, async (req, res) => {
    // console.log("query", req.query);
    // const { salon_id, user_id } = req.query;
    const favourites = await Favourite.find();
    console.log("favourites", favourites);
    return res.status(200).send(favourites);
  });

  // POST favourite
  //  verify that jwt is valid. From jwt should have user id, if it's valid
  app.post(`/api/addFavourite`, async (req, res) => {
    // console.log("salon id", req.body);
    // console.log(req.header("authorization").split(' '));
    const [_, jwtToken] = req.header("authorization").split(" "); // this is how to destructure the 2nd parameter of an array
    // console.log(jwtToken);
    jwt.verify(jwtToken, "randomString");
    // invalid token - synchronous
    try {
      const decoded = jwt.verify(jwtToken, "randomString"); // verifying JWT make sure I put my 2nd parameter randomString in .env file after
      // console.log("decoded", decoded.user.id);
      fav = new Favourite({
        salon_id: req.body.id,
        user_id: decoded.user.id, // creating a new instance of a favourite to add to the database
      });

      fav.save(); // saving to database

      res.status(200).send(fav);
    } catch (err) {
      res.status(500).send("Error in Saving");
    }
  });
};

module.exports = favouriteRoutes;

