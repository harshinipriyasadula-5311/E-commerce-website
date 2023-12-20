import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home'; 
import Products from './products';
import Header from './header';
import ProductDetails from './products/productdetails'; 
import Cart from './cart/cartpage';
import Login from './login';
import "./login.css"
import SignupForm from './signup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleLogin = () => { 
    setIsLoggedIn(!isLoggedIn); 
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} cart={cartItems} />
        <Routes>
          <Route
            path="/"
            element={<HomePage />} 
          />
          <Route 
            path="/products"
            element={<Products />} 
          />
          <Route
            path="/products/:id"
            element={<ProductDetails addToCart={addToCart} />} 
          />
          <Route
            path="/cart"
            element={<Cart cart={cartItems} />} 
          />
           <Route
            path="/login"
            element={<Login/>} 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;

