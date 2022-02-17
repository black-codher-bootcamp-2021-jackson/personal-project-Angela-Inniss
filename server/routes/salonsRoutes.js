const mongoose = require("mongoose");
const Salon = mongoose.model("salons");

// GET all salons
const salonRoutes = (app) => {
  app.get(`/api/salon`, async (req, res) => {
    const salons = await Salon.find();
    return res.status(200).send(salons);
  });

  // a GET request does not have a response body. Have to send the query in the url params and call req.query
  app.get(`/api/salons/filter`, async (req, res) => {
    // console.log("angela", req.query);
    const { location, services } = req.query; // "manchester" ,["wigs"]
    const response = await Salon.find({ location: location, services: { $in: services } });
    // { location: "Manchester", services: { $all: ["wigs"] } },
    return res.status(200).send(response);
  })

  // GET salon by location only
  app.get(`/api/salons/filterLocation`, async (req, res) => {
    const { location } = req.query; // "manchester" 
    const response = await Salon.find({ location: location });
    return res.status(200).send(response);
  })

};

module.exports = salonRoutes;
