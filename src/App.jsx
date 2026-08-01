import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RoutePlanner from "./pages/RoutePlanner";
import RouteResults from "./pages/RouteResults";
import Dashboard from "./pages/Dashboard";
import IncidentReport from "./pages/IncidentReport";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planner" element={<RoutePlanner />} />
            <Route path="/results" element={<RouteResults />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<IncidentReport />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;