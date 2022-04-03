import { Routes, Route } from "react-router-dom";
import "./styles/common.css";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WishlistPage from "./pages/WishlistPage";
import ProductListings from "./pages/ProductListings";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='listing' element={<ProductListings />} />
        <Route path='wishlist' element={<WishlistPage />} />
      </Routes>
    </>
  );
}

export default App;
