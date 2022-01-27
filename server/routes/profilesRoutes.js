const mongoose = require("mongoose");
const Profile = mongoose.model("salons");


const profileRoutes = (app) => {
  // this one is being called in the profilService in the client gets all profiles
  app.get(`/api/profile`, async (req, res) => {
    const profiles = await Profile.find();
    console.log(profiles);

    return res.status(200).send(profiles);
  });

  app.post(`/api/profile`, async (req, res) => {
    const profile = await Profile.create(req.body);

    return res.status(201).send({
      error: false,
      profile,
    });
  });

  app.put(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });

  app.delete(`/api/profile/:id`, async (req, res) => {
    const { id } = req.params;

    const profile = await Profile.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      profile,
    });
  });
};

module.exports = profileRoutes;
