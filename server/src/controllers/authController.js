import User from '../models/users.js'
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
    const {
  Name,
  Address,
  Photo,
  Stream,
  DOB,
  Age,
  SchoolName,
  Gender,
  PhoneNo,
  AlternatePhoneNo,
  Email,
  Role,
  Password,
  Class,
  FatherName,
  MotherName,
  FatherOccupation,
  HDYK
} = req.body;

    try {
        const userExists = await User.findOne({ Email });
        if (userExists) return res.status(400).json({ message: "User already exists" });
        const hashPassword = await bcrypt.hash(Password, 10);
        const user = await User.create({ Name, Address, Photo, Stream, Age, SchoolName, Gender, PhoneNo, Email, Password: hashPassword, Role, Class, AlternatePhoneNo, DOB, FatherName, MotherName, FatherOccupation, HDYK });
        console.log(user)
        res.status(201).json({
             message: "User added"
        })
    }
    catch (error) {
        res.status(500).json({ message: "Server Error" })
    }
};

const loginUser = async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const user = await User.findOne({ Email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isMatch = bcrypt.compare(Password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        //cookies
        const token = generateToken(user);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({
             message: "User Login Successfully"
        });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

export default { registerUser, loginUser };