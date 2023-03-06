import Message from "../models/Message.js";

export const createMessage = async (req, res, next) => {
    const newMessage = new Message(req.body)
    try {
        const savedMessage = await newMessage.save();
        res.status(200).send(savedMessage);
    } catch (err) {
        next(err);
    }
}

export const getMessage = async (req, res, next) => {
    try {
        const message = await Message.find({
            conversationId: req.params.id,
        })
        res.status(200).json(message);
    } catch (err) {
        next(err);
    }
}