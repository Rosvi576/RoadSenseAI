import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteResults = () => {
  const location = useLocation();

  const source = location.state?.source;
  const destination = location.state?.destination;
  const priority = location.state?.priority;

  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/ai/routes"
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();

        setRoutes(data.routes || []);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch AI route recommendations");
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <h2 className="text-xl">
          Analyzing routes using AI...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 text-red-400 flex items-center justify-center">
        <h2 className="text-xl">
          {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-3">
          AI Route Recommendations 🚦
        </h1>

        <p className="text-gray-400 mb-2">
          {source} → {destination}
        </p>

        <p className="text-blue-400 mb-8">
          Safety Priority: {priority}%
        </p>


        <div className="grid md:grid-cols-3 gap-6">

          {routes.map((route, index) => (

            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800"
            >

              <h2 className="text-2xl font-bold mb-4">
                {route.name}
              </h2>


              <p className="mb-3">
                🛡️ Safety Score:
                <span className="ml-2 text-green-400 font-semibold">
                  {route.safetyScore}%
                </span>
              </p>


              <p className="mb-3">
                📍 Distance:
                <span className="ml-2">
                  {route.distance} km
                </span>
              </p>


              <p className="mb-3">
                ⏱️ Time:
                <span className="ml-2">
                  {route.time} mins
                </span>
              </p>


              <p>
                ⚠️ Status:
                <span className="ml-2 text-yellow-400">
                  {route.status}
                </span>
              </p>


              <button
                className="mt-6 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg"
              >
                Select Route
              </button>


            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default RouteResults;