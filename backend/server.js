const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const matchRoutes = require("./routes/matchRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/matches",
  matchRoutes
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.use("/api/matches", matchRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});