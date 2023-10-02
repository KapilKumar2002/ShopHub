import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import ListPage from "./pages/ListPage";
import ContactPage from "./pages/ContactPage";
import WishPage from "./pages/WishPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { UserContextProvider } from "./components/UserContext";
import ProfilePage from "./pages/ProfilePage";
import SellerPage from "./pages/SellerPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/products" element={<ListPage />}></Route>
          <Route path="/wishlist" element={<WishPage />}></Route>
          <Route path="/contact-us" element={<ContactPage />}></Route>
          <Route path="/products/id" element={<ProductPage />}></Route>
          <Route path="/auth/login" element={<LoginPage />}></Route>
          <Route path="/auth/signup" element={<SignupPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/seller" element={<SellerPage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
