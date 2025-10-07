import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  subject: { type: String, required: true, trim: true },
  schedule: { type: String, required: true, trim: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, {
  timestamps: true
});

const ClassModel = mongoose.model("Class", ClassSchema);
export default ClassModel;