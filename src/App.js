import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { LoaderContext } from "./context/LoaderContext";
import Mockman from "mockman-js";
import Navbar from "./shared/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import Loader from "./shared/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./pages/Product/Product";

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
            <Route path="products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            {authCtx.state.token ? (
              <>
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Navigate to="/profile" />} />
                <Route path="signup" element={<Navigate to="/profile" />} />
                <Route path="cart" element={<Cart />} />
                <Route path="wishlist" element={<Wishlist />} />
              </>
            ) : (
              <>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="profile" element={<Navigate to="/login" />} />
                <Route path="cart" element={<Navigate to="/login" />} />
                <Route path="wishlist" element={<Navigate to="/login" />} />
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
        pauseOnHover={false}
        pauseOnFocusLoss={false}
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
