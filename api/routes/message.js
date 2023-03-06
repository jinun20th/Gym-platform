import express from "express";
import {
    createMessage,
    getMessage
} from "../controllers/message.js";
/* import { verifyUser, verifyTrainer, verifyAdmin } from "../utils/verifyToken.js";*/

const router = express.Router();

router.post('/', createMessage);

router.get('/:id', getMessage);
export default router