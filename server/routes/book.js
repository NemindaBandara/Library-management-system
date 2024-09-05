import express from "express";
import { Book } from "../models/Book.js";
const router = express.Router();
import { verifyAdmin } from "./auth.js";

router.post("/add", verifyAdmin, async (req, res) => {
  try {
    const { name, author, imageUrl } = req.body;
    const newbook = new Book({
      name,
      author,
      imageUrl,
    });
    await newbook.save();
    return res.json({ added: true });
  } catch (err) {
    return res.json({ message: "Error in adding book" });
  }
});

export { router as bookRouter };
