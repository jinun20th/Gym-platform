import mongoose from "mongoose";

const { Schema } = mongoose;

const TrainerSchema = new mongoose.Schema({
    image: {
        type: String
    },
    description: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        min: 0,
        max: 5,
    },
    languages: {
        type: Array,
        required: true,
    },
    specialize: {
        type: Array, 
        required: true,
    },
    user: {
        type: mongoose.ObjectId,
        ref: "User",
        required: true,
    },
},
    { timestamps: true }
);

export default mongoose.model("Trainer", TrainerSchema)