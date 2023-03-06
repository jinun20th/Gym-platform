import mongoose from "mongoose";

const ClassesSchema = new mongoose.Schema(
  {
    trainerId: {
      type: mongoose.ObjectId,
      required: true,
    },
    name: {
      type: String,
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    days: {
      type: Array,
    },
    capacity: {
      type: Number,
      default: 0,
    },
    personal: {
      type: Boolean,
      default: false,
    },
    price: {
      type: Number,
    },
    specialize: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Classes", ClassesSchema);