import mongoose from 'mongoose';


const ProviderSchema = new mongoose.Schema(
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
    phone: {
     type: Number,
    },
    verified: {
      type: Boolean
    }, 
    Service: {
      type: String,
    },
    AtTome: {
      type: String,
    }
  },
  { timestamps: true }
);
//module.exports = mongoose.model("User", UserSchema); 
const ProviderModel = mongoose.model("proveedor", ProviderSchema )

const createProvider = async Provider => {
  if (!connected) {
      console.error('Conexión no establecida');
      return {};
  }
  try {
      const newProvider = new ProvidersModel(Provider);
      await newProvider.save();
      return newProvider;
  } catch (error) {
      console.error(`Se produjo un error al intentar dar de alta el producto: ${error.message}`);
      return {};
  }
};

export default ProviderModel;