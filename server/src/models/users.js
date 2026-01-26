import mongoose from "mongoose";

const user = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    Address: {
        type: String,
        maxLength: 50
    },
    Photo: {
        type: String
    },
    Stream: {
        type: String,
        enum: ["Math", "Science"]
    },
    DOB: {
        type: Date,
        set: function (date) {
            if (date instanceof Date) {
                date.setHours(0, 0, 0, 0);
            }
            return date;
        }
    },
    Age: {
        type: Number,

    },
    SchoolName: {
        type: String,
        minLength: 5,
        maxLength: 30
    },
    Gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    PhoneNo: {
        type: Number,
        required: true
    },
    AlternatePhoneNo: {
        type: Number,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    Role: {
        type: String,
        enum: ["Student", "Teacher", "Admin"]
    },
    Password: {
        type: String,
        required: true
    },
    Class: {
        type: Number,
        enum: [5, 6, 7, 8, 9, 10]
    },
    FatherName: {
        type: String,
    },
    MotherName: {
        type: String,
    },
    FatherOccupation: {
        type: String
    },
    HDYK: {
        type: String,
        enum: ["Newspaper", "Friends", "SocialMedia"]
    }
});

const User = mongoose.model("User", user);
export default User;