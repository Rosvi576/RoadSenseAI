const express = require("express");
const recommendRoutes = require("../ai/routeRecommendation");

const router = express.Router();

router.get("/routes", (req, res) => {
  const routes = recommendRoutes();

  res.status(200).json({
    success: true,
    routes: routes
  });
});

module.exports = router;