import mongoose from "mongoose";

const { Schema } = mongoose;

const MessageSchema = new mongoose.Schema({
    conversationId: {
        type: mongoose.ObjectId,
        ref: "Conversation",
    },
    sender: {
        type: mongoose.ObjectId,
        ref: "User",
    },
    recipients: {
        type: mongoose.ObjectId,
        ref: "User",
    },
    content: {
        type: String
    },
},
    { timestamps: true }
);

export default mongoose.model("Message", MessageSchema)