import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";
import SpectrumAnalytics from "./pages/SpectrumAnalytics";
import BlackHorseReserve from "./pages/BlackHorseReserve";

function FadeWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setVisible(false);
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setVisible(true);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.15s ease",
      }}
    >
      <Routes location={displayLocation}>
        {children}
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <FadeWrapper>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/spectrum-analytics" element={<SpectrumAnalytics />} />
        <Route path="/projects/black-horse-reserve" element={<BlackHorseReserve />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </FadeWrapper>
    </Layout>
  );
}
