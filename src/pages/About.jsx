import {
  FiShield,
  FiMapPin,
  FiCpu,
  FiUsers,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            About RoadSense AI
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            RoadSense AI is an intelligent road safety platform that predicts
            accidents, road hazards, traffic congestion and weather conditions
            using Artificial Intelligence. It recommends the safest route before
            the journey begins.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiTarget className="text-blue-600 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              Reduce road accidents by providing AI-powered safe route
              recommendations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiCpu className="text-green-600 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-3">AI Technology</h2>
            <p className="text-gray-600">
              Machine Learning analyzes historical accidents, weather,
              traffic and road conditions to calculate safer routes.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiShield className="text-red-500 text-5xl mb-4" />
            <h2 className="text-2xl font-bold mb-3">Safety First</h2>
            <p className="text-gray-600">
              Every recommendation focuses on maximizing driver safety rather
              than only minimizing travel time.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 text-xl" />
              AI Safe Route Recommendation
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 text-xl" />
              Accident Prediction
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 text-xl" />
              Weather Monitoring
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 text-xl" />
              Traffic Analysis
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 text-xl" />
              Road Hazard Detection
            </div>
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600 text-xl" />
              Live Safety Dashboard
            </div>
          </div>
        </div>

        {/* Footer Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiMapPin className="text-blue-600 text-4xl mb-3" />
            <h2 className="text-2xl font-bold mb-3">Smart Navigation</h2>
            <p className="text-gray-600">
              The system suggests alternative routes when dangerous road
              conditions are detected.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiUsers className="text-purple-600 text-4xl mb-3" />
            <h2 className="text-2xl font-bold mb-3">Community Reporting</h2>
            <p className="text-gray-600">
              Users can report accidents, potholes, floods and traffic so that
              everyone receives updated road information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}