import ClassModel from "../models/Class";

export const createClass = async ({ subject, schedule, createdBy }) => {
  const newClass = new ClassModel({ subject, schedule, createdBy });
  return await newClass.save();
};