import { Route, Routes, BrowserRouter as Router } from "react-router";
import HolyVow from "./modules/holy-vow/holy-vow";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HolyVow />} />
      </Routes>
    </Router>
  );
}

export default App;
