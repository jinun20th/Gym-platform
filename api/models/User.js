import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    img: {
      type: String
    },
    city: {
      type: String,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthday: {
      type: String,
    },
    gender: {
      type: String,
    },
    port: {
      type: Number,
    },
    owner: {
      type: String,
    },
    number: {
      type: Number,
    },
    coins: {
      type: Number,
      default: 0,
    },
    isTrainer: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
