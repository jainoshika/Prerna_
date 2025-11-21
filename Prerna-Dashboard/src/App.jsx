import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./Layout";

// Pages
import Dashboard from "./Components/Dashboard/Dashboard";
import Schemes from "./Pages/Schemes/Schemes";
import HealthSection from "./Pages/HealthSection/HealthSection";
import Sakhi from "./Pages/Sakhi/Sakhi";
import SupportSection from "./Pages/SupportSection/SupportSection";
import Auth from "./Components/Auth/Auth";
import AboutPrernaPlatform from "./Pages/AboutSection/AboutPrernaPlatform";
import AskDidi from "./Pages/AskDidi/AskDidi";
import OpportunitiesPage from "./Pages/OpportunitiesPage/OpportunitiesPage";
import ScholarshipPage from "./Pages/Scholarship/Scholarship";
import SportsPage from "./Pages/SportsPage/SportsPage";
import MotivationPage from "./Pages/MotivationPage/MotivationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        
        {/* ❗ AUTH PAGE OUTSIDE LAYOUT → Fullscreen, no header/footer */}
        <Route path="/auth" element={<Auth />} />

        {/* All other pages use the Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-section" element={<AboutPrernaPlatform />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/health" element={<HealthSection />} />
          <Route path="/sakhi" element={<Sakhi />} />
          <Route path="/ask-Didi" element={<AskDidi />} />
          <Route path="/support" element={<SupportSection />} />

          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/scholarships" element={<ScholarshipPage />} />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/motivation" element={<MotivationPage />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
