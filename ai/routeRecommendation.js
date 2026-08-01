const calculateSafetyScore = require("./safetyScore");

function recommendRoutes() {

  const routes = [

    {
      name: "Safest Route",
      distance: 14,
      time: 28,

      data: {
        accidentLevel: "low",
        hazard: "small_pothole",
        traffic: "light",
        weather: "sunny",
        time: "day",
        emergencyNearby: true
      }
    },

    {
      name: "Fastest Route",
      distance: 12,
      time: 22,

      data: {
        accidentLevel: "medium",
        hazard: "construction",
        traffic: "heavy",
        weather: "sunny",
        time: "day",
        emergencyNearby: false
      }
    },

    {
      name: "Balanced Route",
      distance: 13,
      time: 24,

      data: {
        accidentLevel: "low",
        hazard: "construction",
        traffic: "medium",
        weather: "sunny",
        time: "day",
        emergencyNearby: true
      }
    }

  ];

  const results = routes.map(route => {

    const ai = calculateSafetyScore(route.data);

    return {

      name: route.name,

      distance: route.distance,

      time: route.time,

      safetyScore: ai.safetyScore,

      status: ai.status

    };

  });

  return results;

}

module.exports = recommendRoutes;