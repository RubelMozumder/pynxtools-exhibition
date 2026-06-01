import { useState } from "react";
import HomePage from "./pages/HomePage";
import PynxtoolsPage from "./pages/PynxtoolsPage";
import NomadPage from "./pages/NomadPage";

export default function App() {
  const [view, setView] = useState("home");

  const navigate = (nodeId) => {
    if (nodeId === "pynxtools") setView("pynxtools");
    if (nodeId === "nomad") setView("nomad");
    if (nodeId === "raw-data") alert("Raw data demo coming soon");
    if (nodeId === "nexus") alert("NeXus explanation coming soon");
  };

  if (view === "pynxtools") {
    return <PynxtoolsPage onBack={() => setView("home")} />;
  }

  if (view === "nomad") {
    return <NomadPage onBack={() => setView("home")} />;
  }

  return <HomePage onNavigate={navigate} />;
}