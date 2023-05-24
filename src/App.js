import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Navbar from "./shared/Navbar/Navbar";
import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Profile from "./pages/Profile/Profile";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            {/* {!authCtx.token && <Route path="login" element={<Login />} />} */}
            {authCtx.token ? (
              <>
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Navigate to="/profile" />} />
              </>
            ) : (
              <Route path="login" element={<Login />} />
            )}
            <Route path="*" element={<Navigate to="/products" />} />
            <Route path="mockman" element={<Mockman />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
