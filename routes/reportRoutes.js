const express = require("express");
const multer = require("multer");
const Report = require("../models/Report");

const router = express.Router();

const reports = require("../data/reportStore");


const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },

});


const upload = multer({
  storage,
});


router.post(
  "/",
  upload.single("image"),
  async (req, res) => {

    try {

      const report = {
        id: Date.now(),

        location: req.body.location,

        incidentType: req.body.incidentType,

        description: req.body.description,

        image: req.file
          ? req.file.filename
          : "",

        status: "Pending",

        timestamp: new Date(),
      };


      if (global.mongoConnected) {

        const savedReport = new Report(report);

        await savedReport.save();

        return res.status(201).json({
          success: true,
          message: "Report saved to database",
          report: savedReport,
        });

      }


      localReports.push(report);


      res.status(201).json({

        success: true,

        message: "Report stored locally",

        report,

      });


    } catch (error) {

      console.error(error);

      res.status(500).json({

        success: false,

        message: "Failed to submit report",

      });

    }

  }
);



router.get("/", async (req, res) => {

  try {


    if (global.mongoConnected) {

      const reports = await Report.find()
        .sort({ createdAt: -1 });


      return res.json({

        success: true,

        reports,

      });

    }


    res.json({

      success: true,

      reports: localReports,

    });


  } catch (error) {

    console.error(error);


    res.status(500).json({

      success: false,

      message: "Failed to fetch reports",

    });

  }

});


module.exports = router;