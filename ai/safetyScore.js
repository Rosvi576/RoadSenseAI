function calculateSafetyScore(data) {
  let score = 100;

  // Accident History
  if (data.accidentLevel === "high") {
    score -= 30;
  } else if (data.accidentLevel === "medium") {
    score -= 15;
  } else if (data.accidentLevel === "low") {
    score -= 5;
  }

  // Road Hazard
  if (data.hazard === "large_pothole") {
    score -= 15;
  } else if (data.hazard === "small_pothole") {
    score -= 5;
  } else if (data.hazard === "construction") {
    score -= 10;
  } else if (data.hazard === "flood") {
    score -= 20;
  }

  // Traffic
  if (data.traffic === "heavy") {
    score -= 20;
  } else if (data.traffic === "medium") {
    score -= 10;
  } else if (data.traffic === "light") {
    score -= 5;
  }

  // Weather
  if (data.weather === "heavy_rain") {
    score -= 20;
  } else if (data.weather === "rain") {
    score -= 10;
  } else if (data.weather === "fog") {
    score -= 15;
  }

  // Time
  if (data.time === "night") {
    score -= 10;
  }

  // Emergency Services Nearby
  if (data.emergencyNearby === true) {
    score += 5;
  }

  // Prevent score from going below 0
  if (score < 0) {
    score = 0;
  }

  // Determine Safety Status
  let status = "";

  if (score >= 90) {
    status = "Very Safe";
  } else if (score >= 75) {
    status = "Safe";
  } else if (score >= 50) {
    status = "Moderate Risk";
  } else if (score >= 25) {
    status = "Dangerous";
  } else {
    status = "Avoid Route";
  }

  return {
    safetyScore: score,
    status: status
  };
}

module.exports = calculateSafetyScore;