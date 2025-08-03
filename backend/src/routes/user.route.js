import express from "express";

const router = express.Router();

// Simple route without middleware
router.get("/profile", (req, res) => {
    res.json({
        message: "Profile route - add middleware later"
    });
});

// Simple route without middleware
router.put("/profile", (req, res) => {
    res.json({ message: "Profile updated successfully" });
});

export default router; 