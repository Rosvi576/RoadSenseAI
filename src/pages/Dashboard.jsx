import {
  FiShield,
  FiAlertTriangle,
  FiMapPin,
  FiActivity,
  FiTrendingUp,
} from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-10">
          AI Safety Dashboard
        </h1>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiShield className="text-green-600 text-4xl mb-3" />
            <h2 className="text-3xl font-bold">96%</h2>
            <p className="text-gray-600">Overall Safety Score</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiAlertTriangle className="text-red-500 text-4xl mb-3" />
            <h2 className="text-3xl font-bold">18</h2>
            <p className="text-gray-600">Accident Hotspots</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiMapPin className="text-blue-600 text-4xl mb-3" />
            <h2 className="text-3xl font-bold">53</h2>
            <p className="text-gray-600">Road Hazards</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <FiActivity className="text-purple-600 text-4xl mb-3" />
            <h2 className="text-3xl font-bold">Low</h2>
            <p className="text-gray-600">Traffic Risk</p>
          </div>
        </div>

        {/* Analytics */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FiTrendingUp />
              Weekly Safety Analytics
            </h2>

            <div className="space-y-4">
              <div>
                <p className="font-semibold mb-2">Safe Roads</p>
                <div className="bg-gray-200 rounded-full h-4">
                  <div className="bg-green-500 h-4 rounded-full w-[92%]"></div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Traffic Density</p>
                <div className="bg-gray-200 rounded-full h-4">
                  <div className="bg-blue-500 h-4 rounded-full w-[68%]"></div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">Accident Probability</p>
                <div className="bg-gray-200 rounded-full h-4">
                  <div className="bg-red-500 h-4 rounded-full w-[21%]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Alerts</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded">
                Heavy traffic near Airport Road.
              </div>

              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded">
                Road construction at Gandhipuram.
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
                Safe route available towards Avinashi Road.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}