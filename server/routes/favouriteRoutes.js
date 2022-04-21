const mongoose = require("mongoose");
const Favourite = mongoose.model("favourites");

// GET all favourites
const favouriteRoutes = (app) => {
  app.get(`/api/favourite`, async (req, res) => {
    console.log("favourite route");
    const favourites = await Favourite.find();
    return res.status(200).send(favourites);
  });
};

module.exports = favouriteRoutes;
