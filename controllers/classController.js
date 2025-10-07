import * as classService from "../services/classService.js";

export const createClass = async (req, res) => {
  try {
    const { subject, schedule } = req.body;
    // prefer session/auth user if available
    const createdBy = (req.user && req.user.id) ? req.user.id : req.body.createdBy;
    if (!createdBy) {
      return res.status(400).json({ message: "createdBy is required (or attach auth middleware)" });
    }
    const created = await classService.createClass({ subject, schedule, createdBy });
    return res.status(201).json({ data: created });
  } catch (err) {
    console.error("createClass error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const listClasses = async (req, res) => {
  try {
    const classes = await classService.getAllClasses();
    return res.json({ data: classes });
  } catch (err) {
    console.error("listClasses error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getClassesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const classes = await classService.getClassesByUser(userId);
    return res.json({ data: classes });
  } catch (err) {
    console.error("getClassesByUser error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    const updated = await classService.updateClass(id, updateFields);
    if (!updated) return res.status(404).json({ message: "Class not found" });
    return res.json({ data: updated });
  } catch (err) {
    console.error("updateClass error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await classService.deleteClass(id);
    if (!deleted) return res.status(404).json({ message: "Class not found" });
    return res.json({ message: "Deleted" });
  } catch (err) {
    console.error("deleteClass error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
