import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import course from "../controllers/courseController.js" 
const router = express.Router();


const {courseUpload,chapterUpload} = course;

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Authorized",
    user: req.user
  });
});

router.post("/addCourse",authMiddleware,courseUpload);
router.post("/addChapter",authMiddleware,chapterUpload);

export default router;
