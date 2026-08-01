const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const reportRoutes = require("./routes/reportRoutes");
const aiRoutes = require("./routes/aiRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/reports", reportRoutes);
app.use("/api/ai", aiRoutes);


app.get("/", (req, res) => {
  res.send("RoadSense AI Backend Running 🚀");
});


const PORT = process.env.PORT || 5000;


const startServer = async () => {

  try {

    await connectDB();

  } catch (error) {

    console.log(
      "⚠ MongoDB not connected. Continuing without database..."
    );

  }


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

};


startServer();