const mongoose = require("mongoose");
const { Schema } = mongoose;

// const profileSchema = new Schema({
//   first_name: String,
//   last_name: String,
//   location: String,
// });

// mongoose.model("salons", profileSchema);

const salonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
})
mongoose.model("salons", salonSchema)