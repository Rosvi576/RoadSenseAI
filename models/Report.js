const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },

    incidentType: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      default: "Pending",
    },

    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);