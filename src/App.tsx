import { Route, Routes, BrowserRouter as Router } from "react-router";

import DiandraIchbal from "./clients/diandra-ichbal/diandra-ichbal";
import HolyVowPreview from "./modules/holy-vow/holy-vow-preview";
import LandingPage from "./modules/landing-page/landing-page";

import type React from "react";

function App(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/holy-vow" element={<HolyVowPreview />} />

        {/* Client Path */}
        <Route path="/diandra-ichbal" element={<DiandraIchbal />} />
      </Routes>
    </Router>
  );
}

export default App;
