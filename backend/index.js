import express from "express";
import internRoutes from "./routes/internRoutes.js";
import connectDB from "./connection.js";
import cors from "cors";
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/v1", internRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("server is running");
});
