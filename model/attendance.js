import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
    id: int,
    studentID: String,
    classID: String,
    date: { type: Date, default: Date.now },
    status: String,
})

export default mongoose.model("attendance.js", attendanceSchema);

git 