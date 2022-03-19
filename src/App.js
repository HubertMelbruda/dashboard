import { BrowserRouter as React, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SidePanel from "./components/SidePanel";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Portfolio from "./pages/Portfolio";
import Prices from "./pages/Prices";

function App() {
  return (
    <React>
      <div className="App">
        <SidePanel />
        <div className="mainPanel">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route path="/user-profile" element={<UserProfile />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/prices" element={<Prices />} />
            </Routes>
          </div>
        </div>
      </div>
    </React>
  );
}

export default App;
