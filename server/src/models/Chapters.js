import mongoose from "mongoose";

const Chapter = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 50
    },
    Videos: {
        type: [String], 
    },
    PDF: {
        type: [String],
    },
    PYQ: {
        type: [String],
    }
});

const chapter = mongoose.model("Chapter", Chapter);
export default chapter;