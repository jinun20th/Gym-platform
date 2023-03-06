import Trainer from "../models/Trainer.js";
import { ObjectId } from "mongodb";

export const createTrainer = async (req, res, next) => {
  const newTrainer = new Trainer(req.body);
  try {
    const savedTrainer = await newTrainer.save();
    res.status(200).json(savedTrainer);
  } catch (err) {
    next(err);
  }
};

export const updateTrainer = async (req, res, next) => {
  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedTrainer);
  } catch (err) {
    next(err);
  }
};

export const deleteTrainer = async (req, res, next) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.status(200).json("Trainer has been deleted.");
  } catch (err) {
    next(err);
  }
};

export const getTrainer = async (req, res, next) => {
  try {
    const trainer = await Trainer.aggregate([
      {
        $match: { _id: ObjectId(req.params.id) },

      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        }
      },
    ]);
    res.status(200).json(trainer);
  } catch (err) {
    next(err);
  }
};

export const getTrainers = async (req, res, next) => {
  try {
    const trainers = await Trainer.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        }
      }
    ]);
    res.status(200).json(trainers);
  } catch (err) {
    next(err);
  }
}

export const getProfile = async (req, res, next) => {
  try {
    const trainer = await Trainer.aggregate([
      {
        $match: { user: ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        }
      },
    ]);
    res.status(200).json(trainer);
  } catch (err) {
    next(err);
  }
}