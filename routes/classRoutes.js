import express from "express";
import { createClass, listClasses, updateClass, deleteClass } from "../controllers/classController.js";
import { createClassRules, validate } from "../validators/classValidator.js";

const router = express.Router();

router.post("/", createClassRules, validate, createClass);

router.get("/", listClasses);

router.patch("/:id", updateClass);
router.delete("/:id", deleteClass);

export default router;