import { Routes, Route } from "react-router-dom";
import "./styles/common.css";
import Nav from "./components/Nav";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import WishlistPage from "./pages/WishlistPage";
import ProductListings from "./pages/ProductListings";
import RequiresAuth from "./RequiresAuth";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='signup' element={<SignupPage />} />
        <Route path='listing' element={<ProductListings />} />
        <Route path='mock' element={<Mockman />} />

        <Route
          path='cart'
          element={
            <RequiresAuth>
              <CartPage />
            </RequiresAuth>
          }
        />
        <Route
          path='wishlist'
          element={
            <RequiresAuth>
              <WishlistPage />
            </RequiresAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
