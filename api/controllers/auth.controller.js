import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import  jwt  from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created succesfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(errorHandler(404, 'User Not Found !'));
    const ValidPassword = bcryptjs.compareSync(password, user.password);
    if (!ValidPassword) return next(errorHandler(401, 'Invalid Credentials !'));
    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET)
    const {password: pass, ...rest } = user._doc;
    res.cookie('access_token', token, { httpOnly: true }). status(200).json(rest);
  } catch (error) {
    next(error);
  }
}
