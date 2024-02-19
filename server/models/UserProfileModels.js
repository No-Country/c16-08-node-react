import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserprofileSchema = new Schema(
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
