import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Navbar from "./shared/Navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="mockman" element={<Mockman />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
