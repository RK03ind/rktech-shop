import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./shared/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
