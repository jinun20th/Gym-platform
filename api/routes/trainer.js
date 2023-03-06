import express from "express";
import {
    /* createTrainer, */
    getTrainer,
    getTrainers,
    /* searchTrainer, */
    getProfile,
    updateTrainer,
    deleteTrainer
} from "../controllers/trainer.js";
import { verifyToken, verifyTrainer, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//PUT
router.put('/:id',verifyTrainer, updateTrainer)
//DELETE
router.delete('/:id',verifyTrainer, deleteTrainer)
//GET
router.get('/:id', getTrainer)
router.get('/profile/:id', getProfile)
//GET by
router.get('/', getTrainers)
export default router