import { body, validationResult } from "express-validator";

export const createClassRules = [
  body("subject").trim().notEmpty().withMessage("subject is required"),
  body("schedule").trim().notEmpty().withMessage("schedule is required")
    .isLength({ min: 3 }).withMessage("schedule seems too short"),
  body("createdBy").optional().isMongoId().withMessage("createdBy must be a valid user id"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};