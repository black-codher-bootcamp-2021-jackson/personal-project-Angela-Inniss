const mongoose = require("mongoose");
const Salon = mongoose.model("salons");


const salonRoutes = (app) => {
  //this one is being called in the profilService in the client gets all salons
  app.get(`/api/salon`, async (req, res) => {
    const salons = await Salon.find();
    // console.log(salons);
    return res.status(200).send(salons);
  });
  // return filterd salons  user will send

  // a GET request does not have a response body. Have to send the query in the url params and call req.query

  app.get(`/api/salons/filter`, async (req, res) => {
    // console.log("angela", req.query);
    // const filter = req.query;
    const { location, services } = req.query; // "manchester" ,["wigs"]
    const response = await Salon.find({ location: location, services: { $in: services } });
    // { location: "Manchester", services: { $all: ["wigs"] } },
    return res.status(200).send(response);

  })

  app.get(`/api/salons/filterLocation`, async (req, res) => {
    const { location } = req.query; // "manchester" ]
    const response = await Salon.find({ location: location });
    return res.status(200).send(response);
  })



  // app.post(`/api/profile`, async (req, res) => {
  //   const salon = await Salon.create(req.body);

  //   return res.status(201).send({
  //     error: false,
  //     salon,
  //   });
  // });

  // app.put(`/api/profile/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const salon = await Salon.findByIdAndUpdate(id, req.body);

  //   return res.status(202).send({
  //     error: false,
  //     salon,
  //   });
  // });

  // app.delete(`/api/profile/:id`, async (req, res) => {
  //   const { id } = req.params;

  //   const profile = await Salon.findByIdAndDelete(id);

  //   return res.status(202).send({
  //     error: false,
  //     salon,
  //   });
  // });
};

module.exports = salonRoutes;
