const mongoose = require("mongoose");
const { Schema } = mongoose;


const favouriteSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  salon_id: {
    type: String,
    required: true
  }
})

mongoose.model("favourites", favouriteSchema);