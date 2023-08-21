import express from "express";
import {
    createClass,
    getClass,
    getClasses,
    getTrainerAll,
    getTrainerClasses,
    getTrainerPersonal,
    updateClass,
    bookingClass,
    bookingDays,
    deleteClass,
    getEnrollments,
    getUserTrainer
} from "../controllers/classes.js";
/* import { verifyUser, verifyTrainer, verifyAdmin } from "../utils/verifyToken.js";*/

const router = express.Router();
//POST
router.post('/',/* verifyTrainer, */ createClass)
//PUT
router.put('/:id',/* verifyTrainer, */ updateClass)
//PUT userClasses
router.post('/booking/', /* verifyUser, */ bookingClass)
router.post('/person/', /* verifyUser, */ bookingDays)
//DELETE
router.delete('/:id',/* verifyTrainer, */ deleteClass)
//GET
router.get('/:id', getClass)
router.get('/', getClasses)
//GET TRAINER CLASS
router.get('/trainer/:id', getTrainerAll)
router.get('/trainer/class/:id', getTrainerClasses)
router.get('/trainer/person/:id', getTrainerPersonal)
//GET USER CLASS
router.get('/user/:id', getEnrollments)
router.get('/teacher/:id', getUserTrainer)
export default router