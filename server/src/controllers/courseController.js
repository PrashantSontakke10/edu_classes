import course from "../models/Course.js";
import chapter from "../models/Chapters.js";
import users from "../models/users.js"

const courseUpload = async (req, res) => {
    try {
        const { Name, Subject, Chapters } = req.body;
        const uploader = await users.find({
            Role: { $in: ["Admin", "Teacher"] }
        });

        console.log(uploader);
        const newcourse = new course({
            Name,
            Subject,
            Chapters
        })
        console.log(newcourse)

        await newcourse.save();
        res.send("Course Added Successfully!!");
    } catch (err) {
        res.status(500).send("Err " + err);
    }
}

const chapterUpload = async (req, res) => {
    try {
        const { __id, chapterGroup } = req.body;
        const uploader = await users.find({
            Role: { $in: ["Admin", "Teacher"] }
        });

        if (!uploader) {
      return res.status(403).send("Not authorized");
    }

    const updatedCourse = await course.findByIdAndUpdate(
      __id,
      {
        $push: { Chapters: chapterGroup }
      },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).send("Course not found");
    }

    res.json({
      message: "Chapter added successfully",
      course: updatedCourse
    });
    } catch (err) {
        res.status(500).send("Err " + err);
    }
}

export default { courseUpload,chapterUpload }; 