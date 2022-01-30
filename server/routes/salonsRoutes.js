const mongoose = require("mongoose");
const Salon = mongoose.model("salons");


const salonRoutes = (app) => {
  //this one is being called in the profilService in the client gets all salons
  app.get(`/api/salon`, async (req, res) => {
    const salons = await Salon.find();
    console.log(salons);
    return res.status(200).send(salons);
  });

  // return filterd salons 
  // user will send 
  try {
    app.get(`/api/salons`, async (req, res) => {
      console.log("body", req.body);
      const userFilter = req.body;
      console.log({ userFilter });
      const response = await Salon.find({ location: "Manchester" });
      console.log(response)
      return res.status(200).send(response);
    })
  }
  catch (err) {
    console.log(err)
  }



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
