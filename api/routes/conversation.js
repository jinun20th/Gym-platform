import express from "express";
import {
    createConversation,
    getConversation,
} from "../controllers/conversation.js";
/* import { verifyUser, verifyTrainer, verifyAdmin } from "../utils/verifyToken.js";*/

const router = express.Router();

router.post('/', createConversation);

router.get('/:userId', getConversation);

export default router