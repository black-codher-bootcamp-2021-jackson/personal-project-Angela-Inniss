const mongoose = require("mongoose");
const { Schema } = mongoose;

// const profileSchema = new Schema({
//   first_name: String,
//   last_name: String,
//   location: String,
// });

// mongoose.model("salons", profileSchema);


const serviceSchema = new Schema({
  service: {
    type: String,
    required: false
  }
})

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
  services: {
    type: [String],
    required: false
  },
  social: {
    type: [String],
    required: false
  }
  // priceRange: {
  //   type: Number,
  //   required: true
  // }
})
mongoose.model("salons", salonSchema);
// services - weave, crotchet, braids, natural
// want to add a price point or range  
