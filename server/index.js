require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// IMPORT YOUR SCHEMAS HERE
require("./models/salon"); //This is just an example. Don't forget to delete this

const app = express();

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true, useUnifiedTopology: true
})
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE

// Import all routing functions
const salonsRoutes = require("./routes/salonsRoutes");
const userRoutes = require("./routes/userRoutes");
const favouriteRoutes = require("./routes/favouriteRoutes");
// calll the routing functions in relation to express app (line 10)
salonsRoutes(app);
userRoutes(app);
favouriteRoutes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

