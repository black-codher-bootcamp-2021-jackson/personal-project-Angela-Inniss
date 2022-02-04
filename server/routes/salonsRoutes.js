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
    try {
      console.log("req", req.query);
      const userFilter = req.query.filteredData;
      console.log(userFilter);
      console.log(typeof (userFilter));
      const userFilterTwo = JSON.parse(userFilter); // changes string to an objec

      let response;

      if (userFilterTwo.location) {
        response = await Salon.find(userFilterTwo);
        console.log(response)
      }

      else if (Array.isArray(userFilter)) {
        console.log("in array")
        response = await Salon.find({
          services: {
            $in: userFilter
          }
        })
      }
      else {
        response = [];
      }

      return res.status(200).send(response);

    }
    catch (err) {
      console.log(err)
    }
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
