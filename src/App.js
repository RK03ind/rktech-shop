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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./shared/Loader/Loader";
import { LoaderContext } from "./context/LoaderContext";
import Signup from "./pages/Signup/Signup";
import Cart from "./pages/Cart/Cart";

function App() {
  const authCtx = useContext(AuthContext);
  const loaderCtx = useContext(LoaderContext);

  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            {authCtx.state.token ? (
              <>
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Navigate to="/profile" />} />
                <Route path="signup" element={<Navigate to="/profile" />} />
                <Route path="cart" element={<Cart />} />
              </>
            ) : (
              <>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="profile" element={<Navigate to="/login" />} />
                <Route path="cart" element={<Navigate to="/login" />} />
              </>
            )}
            <Route path="*" element={<Navigate to="/products" />} />
            <Route path="mockman" element={<Mockman />} />
          </Routes>
        </main>
      </Router>
      {loaderCtx.state && <Loader />}

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        closeButton={false}
      />
    </>
  );
}

export default App;
