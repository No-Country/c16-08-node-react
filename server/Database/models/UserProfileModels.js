const mongoose = require('mongoose');

const UserprofileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    validation: {
      type: Number, 
    },
    commentsQuantity: {
      type: Number, 
    },
    photoProfile: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Userprofile", UserprofileSchema);
