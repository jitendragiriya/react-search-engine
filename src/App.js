import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AddPage from "./pages/AddPage";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HelpPage from "./pages/Help";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/AIzaSyCvhg2ukGcat6zD8WwnAJCVrYjtc85P_J0" element={<AddPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
