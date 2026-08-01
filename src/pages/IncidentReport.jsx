import { useState } from "react";

export default function IncidentReport() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Pothole");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("location", location);
      formData.append("incidentType", type);
      formData.append("description", description);

      if (image) {
        formData.append("image", image);
      }

      const response = await fetch(
        "http://localhost:5000/api/reports",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage("✅ Incident submitted successfully!");
        
        setLocation("");
        setType("Pothole");
        setDescription("");
        setImage(null);

      } else {
        setMessage("❌ Failed to submit report");
      }

    } catch (error) {
      console.error(error);
      setMessage("❌ Backend connection failed");

    } finally {
      setLoading(false);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Report an Incident
        </h1>

        <p className="text-gray-500 mb-8">
          Help other drivers by reporting road hazards.
        </p>

        <form onSubmit={submit} className="space-y-6">

          <div>
            <label className="font-semibold block mb-2">
              Location
            </label>

            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Enter location"
            />
          </div>


          <div>
            <label className="font-semibold block mb-2">
              Incident Type
            </label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option>Pothole</option>
              <option>Accident</option>
              <option>Flood</option>
              <option>Traffic</option>
              <option>Road Block</option>
            </select>
          </div>


          <div>
            <label className="font-semibold block mb-2">
              Description
            </label>

            <textarea
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Describe the incident..."
            />
          </div>


          <div>
            <label className="font-semibold block mb-2">
              Upload Image
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full border rounded-lg p-3"
            />

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="mt-4 h-64 w-full object-cover rounded-xl border"
              />
            )}
          </div>


          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl"
          >
            {loading ? "Submitting..." : "Submit Report"}
          </button>


          {message && (
            <div className="bg-green-100 text-green-700 p-4 rounded-xl font-semibold">
              {message}
            </div>
          )}

        </form>

      </div>

    </div>
  );
}