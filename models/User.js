import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

// mongoose.models.Product means that if we alrady have the model in the Product, we don't have to create a new model
//but if the first time we set in the new model and store it the Product object
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
