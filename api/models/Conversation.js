import mongoose from "mongoose";

const { Schema } = mongoose;

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array,
    },
    /* messages:{
            type: mongoose.ObjectId,
            ref: "Message",
            default: [],
        } */
},
    { timestamps: true }
);

export default mongoose.model("Conversation", ConversationSchema)