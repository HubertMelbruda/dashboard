import { BrowserRouter as React, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <React>
      <div className="App">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="mainPanel">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </React>
  );
}

export default App;
