import Classes from "../models/Classes.js";
import Enrollments from "../models/Enrollments.js";
import Trainer from "../models/Trainer.js";
import { ObjectId } from "mongodb";

export const createClass = async (req, res, next) => {
    const newClasses = new Classes(req.body);
    try {
        const savedClasses = await newClasses.save();
        res.status(200).json(savedClasses);
    } catch (err) {
        next(err);
    }
}

export const updateClass = async (req, res, next) => {
    try {
        const updatedClasses = await Classes.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedClasses);
    } catch (err) {
        next(err);
    }
};

export const bookingClass = async (req, res, next) => {
    const classId = req.body.classId;
    try {

        const classes = await Classes.findById(classId);

        if (!classes) return next(createError(404, "Classes not found"));

        const bookClasses = new Enrollments(req.body);

        try {
            //const signed = await Enrollments.findByIdAndUpdate()
            const bookedClassed = await bookClasses.save()
            res.status(200).json(bookedClassed);
        } catch (err) {
            console.log(0);
            next(err);
        }

        res.status(200).json("Booking success !!!");
    } catch (err) {
        console.log(1);
        next(err);
    }
};

export const bookingDays = async (req, res, next) => {
    const newClass = new Classes({ ...req.body, personal: true, capacity: 1 });
    try {
        const saveClass = await newClass.save();
        const bookClasses = new Enrollments({
            classId: saveClass._id,
            userId: req.body.userId,
        });
        try {
            const bookedClassed = await bookClasses.save()
            res.status(200).json(bookedClassed);
        } catch (err) {
            console.log(0);
            next(err);
        }
        res.status(200).json("Booking success !!!");
    } catch (err) {
        console.log(1);
        next(err);
    }
};

export const deleteClass = async (req, res, next) => {
    try {
        await Classes.findByIdAndDelete(req.params.id);
        res.status(200).json("Classes has been deleted.");
    } catch (err) {
        next(err);
    }
};

export const getClass = async (req, res, next) => {
    try {
        const classes = await Classes.aggregate([
            {
                $match: {
                    _id: ObjectId(
                        req.params.id
                    )
                }
            },
            {
                $lookup: {
                    from: "trainers",
                    localField: "trainerId",
                    foreignField: "_id",
                    as: "trainer",
                }
            },
            {
                $unwind: "$trainer",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "trainer.user",
                    foreignField: "_id",
                    as: "user",
                }
            },
            {
                $unwind: "$user",
            }

        ]);
        res.status(200).json(classes);
    } catch (err) {
        next(err);
    }
};

export const getClasses = async (req, res, next) => {
    try {
        const classess = await Classes.find();
        res.status(200).json(classess);
    } catch (err) {
        next(err);
    }
};

export const getTrainerAll = async (req, res, next) => {
    try {
        const TrainerClassess = await Classes.aggregate([
            {
                $match: { trainerId: ObjectId(req.params.id) },
            },
            {
                $lookup: {
                    from: "trainers",
                    localField: "trainerId",
                    foreignField: "_id",
                    as: "trainer",
                }
            },
            {
                $unwind: "$trainer",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "trainer.user",
                    foreignField: "_id",
                    as: "user",
                }
            },
            {
                $unwind: "$user",
            }
        ]);
        res.status(200).json(TrainerClassess);
    } catch (err) {
        next(err);
    }
};

export const getTrainerClasses = async (req, res, next) => {
    try {
        const TrainerClassess = await Classes.aggregate([
            {
                $match: { trainerId: ObjectId(req.params.id), personal: false },
            },
            {
                $lookup: {
                    from: "trainers",
                    localField: "trainerId",
                    foreignField: "_id",
                    as: "trainer",
                }
            },
            {
                $unwind: "$trainer",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "trainer.user",
                    foreignField: "_id",
                    as: "user",
                }
            },
            {
                $unwind: "$user",
            }
        ]);
        res.status(200).json(TrainerClassess);
    } catch (err) {
        next(err);
    }
};

export const getTrainerPersonal = async (req, res, next) => {
    try {
        const TrainerClassess = await Classes.aggregate([
            {
                $match: { trainerId: ObjectId(req.params.id), personal: true },
            },
            {
                $lookup: {
                    from: "trainers",
                    localField: "trainerId",
                    foreignField: "_id",
                    as: "trainer",
                }
            },
            {
                $unwind: "$trainer",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "trainer.user",
                    foreignField: "_id",
                    as: "user",
                }
            },
            {
                $unwind: "$user",
            }
        ]);
        res.status(200).json(TrainerClassess);
    } catch (err) {
        next(err);
    }
};

export const getEnrollments = async (req, res, next) => {
    try {
        const enrollments = await Enrollments.aggregate([
            {
                $match: { userId: ObjectId(req.params.id) },

            },
            {
                $lookup: {
                    from: "classes",
                    localField: "classId",
                    foreignField: "_id",
                    as: "class",
                }
            },
            {
                $unwind: "$class",
            },
            {
                $lookup: {
                    from: "trainers",
                    localField: "class.trainerId",
                    foreignField: "_id",
                    as: "trainer",
                }
            },
            {
                $unwind: "$trainer",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "trainer.user",
                    foreignField: "_id",
                    as: "trainerInfo",
                }
            },
            {
                $unwind: "$trainerInfo",
            }
        ]);
        res.status(200).json(enrollments);
    } catch (err) {
        next(err);
    }
}

export const getUserTrainer = async (req, res, next) => {
    try {
        const enrollments = await Enrollments.aggregate([
            {
                $match: { userId: ObjectId(req.params.id) },

            },
            {
                $lookup: {
                    from: "classes",
                    localField: "classId",
                    foreignField: "_id",
                    as: "class",
                }
            },
            {
                $unwind: "$class",
            },
            {
                $lookup: {
                    from: "trainers",
                    localField: "class.trainerId",
                    foreignField: "_id",
                    as: "trainer",
                }
            },
            {
                $unwind: "$trainer",
            },
            {
                $lookup: {
                    from: "users",
                    localField: "trainer.user",
                    foreignField: "_id",
                    as: "user",
                }
            },
            {
                $unwind: "$user",
            },
        ]);
        res.status(200).json(enrollments);
    } catch (err) {
        next(err);
    }
}