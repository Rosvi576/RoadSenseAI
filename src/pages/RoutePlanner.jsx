import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoutePlanner() {
  const navigate = useNavigate();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [priority, setPriority] = useState(80);

  function handleSubmit(e) {
    e.preventDefault();

    if (!source || !destination) {
      alert("Please enter source and destination");
      return;
    }

    navigate("/results", {
      state: {
        source,
        destination,
        priority,
      },
    });
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-600 mb-10">
          Route Planner
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}

          <div className="bg-white rounded-xl shadow-lg p-8">

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="font-semibold block mb-2">
                  Source
                </label>

                <input
                  type="text"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  placeholder="Enter source"
                  className="w-full border rounded-lg p-3"
                  required
                />
              </div>

              <div>
                <label className="font-semibold block mb-2">
                  Destination
                </label>

                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Enter destination"
                  className="w-full border rounded-lg p-3"
                  required
                />
              </div>

              <div>

                <label className="font-semibold block mb-2">
                  Safety Priority : {priority}%
                </label>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priority}
                  onChange={(e) => setPriority(Number(e.target.value))}
                  className="w-full"
                />

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
              >
                Find Safe Route
              </button>

            </form>

          </div>

          {/* Right */}

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">

            <iframe
              title="Google Map"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${source || "Coimbatore"}&output=embed`}
            ></iframe>

          </div>

        </div>

      </div>
    </div>
  );
}