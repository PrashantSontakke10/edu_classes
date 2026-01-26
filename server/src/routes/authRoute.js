import express from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const { registerUser, loginUser } = authController;

const router = express.Router();

router.post('/signup',registerUser);
router.post('/login',loginUser);

//logout
router.post("/logout", authMiddleware, (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production"
  });

  res.status(200).json({ message: "Logged out successfully" });
});


export default router;