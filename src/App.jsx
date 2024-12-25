import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Books from "./components/BooksSlider/Books.jsx";
import CartPage from "./components/CartPage/Cartpage.jsx";
import Login from "./components/Auth/Login.jsx";
import SignUp from "./components/Auth/SignUp.jsx";

const AppContent = () => {
  const [cart, setCart] = useState([]);
  const [orderPopup, setOrderPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const isLoggedIn = localStorage.getItem("loggedIn");

  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  const handleOrder = (book) => {
    setSelectedBook(book);
    setOrderPopup(true);
  };

  const addToCart = (book) => {
    if (!cart.some((item) => item.id === book.id)) {
      setCart((prevCart) => [...prevCart, book]);
      setOrderPopup(false); // Close popup after adding to the cart
    } else {
      alert("Book is already in the cart!");
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((book) => book.id !== id));
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Hero addToCart={addToCart} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
      {!hideNavbar && (
        <>
          <Banner />
          <AppStore />
          <Books handleOrder={handleOrder} />
          <Testimonial />
          <Footer />
        </>
      )}
      <OrderPopup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
        book={selectedBook}
        addToCart={addToCart}
      />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
