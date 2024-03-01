import mongoose from "mongoose";

const userprofileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    province: {
      type: String,
    },
    city: {
      type: String,
    },
    personalDescription: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Userprofile", userprofileSchema);
