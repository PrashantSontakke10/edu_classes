import mongoose from "mongoose";

const Course = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50
    },
    Subject: {
        type: String,
        required: true,
        enum: ["Science","Math"]
    },
    Chapters: {
        type: [[String]]
    }
});

const course = mongoose.model("Course", Course);
export default course;

