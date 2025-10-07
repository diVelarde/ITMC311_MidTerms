import { body, validationResult } from "express-validator";

export const attendanceValidator = [
  body("student").trim().notEmpty().withMessage("student is required"),
  body("class").trim().notEmpty().withMessage("class is required"),
  body("status").optional().isMongoId().withMessage("status is required"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};