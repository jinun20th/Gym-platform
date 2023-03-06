import mongoose from "mongoose";

const EnrollmentsSchema = new mongoose.Schema(
  {
    classId: {
      type: mongoose.ObjectId,
      ref: "Classes",
      required: true,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Enrollments", EnrollmentsSchema);