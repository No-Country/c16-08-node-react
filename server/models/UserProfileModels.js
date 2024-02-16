import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dateOfBirth: {
     type: Date
    },
    verified: {
      type: Boolean
    }, 
  },
  { timestamps: true }
);
//module.exports = mongoose.model("User", UserSchema); 
const UserModel = mongoose.model("user", UserSchema )

const createUser = async User => {
  if (!connected) {
      console.error('Conexión no establecida');
      return {};
  }
  try {
      const newUser = new UsersModel(User);
      await newUser.save();
      return newUser;
  } catch (error) {
      console.error(`Se produjo un error al intentar dar de alta el producto: ${error.message}`);
      return {};
  }
};


export default UserModel;