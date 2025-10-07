import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import classRoutes from "./routes/classRoutes.js";

const app = express();
app.use(express.json());

connectDB().catch(err => console.error(err));

app.use("/api/classes", classRoutes);

app.get("/", (req, res) => res.send("API Running"));

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));