import User from "../models/User.js";
import Trainer from "../models/Trainer.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

export const registerTrainer = async (req, res, next) => {
  try {
    const newTrainer = new Trainer({
      ...req.body,
      user: req.params.id,
    })
    console.log(newTrainer);
    await newTrainer.save();
    await User.findByIdAndUpdate(
      req.params.id,
      { $set: { isTrainer: true } },
      { new: true },
    );
    res.status(200).send("Register trainer success.");
  } catch (err) {
    next(err);
  }
}

export const resetPassword = async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id);
    
    const isPasswordCorrect = await bcrypt.compare(req.body.old, user.password)
    if (!isPasswordCorrect) {
      return next(createError(400, "Mật khẩu cũ không đúng!"));
    }

    const isPasswordRep = (req.body.new === req.body.replace);
    if(!isPasswordRep) {
      return next(createError(400, "Mật khẩu nhập lại không trùng với mật khẩu mới"));
    }

    const isPasswordMatch = await bcrypt.compare(req.body.new, user.password)
    if(isPasswordMatch){
      return next(createError(400,"Mật khẩu mới trùng mật khẩu cũ"))
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.new, salt);

    await User.findByIdAndUpdate(
      req.params.id,
      { $set: { password: hash } },
      { new: true },
    );

    res.status(200).send("Mật khẩu mới là: ", req.body.new, "Hash: ", hash);
  } catch (err) {
    next(err);
  }
}