import ClassModel from "../models/Class";

export const createClass = async ({ subject, schedule, createdBy }) => {
  const newClass = new ClassModel({ subject, schedule, createdBy });
  return await newClass.save();
};

export const getAllClasses = async () => {
  return await ClassModel.find().sort({ createdAt: -1 }).lean();
};

export const getClassesByUser = async (userId) => {
  return await ClassModel.find({ createdBy: userId }).sort({ createdAt: -1 }).lean();
};

export const getClassById = async (id) => {
  return await ClassModel.findById(id).lean();
};

export const updateClass = async (id, updateFields) => {
  return await ClassModel.findByIdAndUpdate(id, updateFields, { new: true }).lean();
};

export const deleteClass = async (id) => {
  return await ClassModel.findByIdAndDelete(id);
};