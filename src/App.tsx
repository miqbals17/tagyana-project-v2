import { Route, Routes, BrowserRouter as Router } from "react-router";

import HolyVow from "./modules/holy-vow/holy-vow";

import type React from "react";

function App(): React.ReactNode {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HolyVow />} />
      </Routes>
    </Router>
  );
}

export default App;
