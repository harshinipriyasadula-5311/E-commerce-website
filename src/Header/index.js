
import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import Login from "../login";

function Header({ isLoggedIn, onLogin, cart }) {
  return (
    <>
      <div id="header">
       
         <Link to="/home" className="color">
          <h1 id="text">Mahi Shopee <i id="bag"class="fa-solid fa-bag-shopping"></i></h1>
        </Link>
 
        {isLoggedIn &&(
          <>
       
            <Link to="/products" className="color">
            <input className="head-inp" type="text" name="name" placeholder="search for Products,Brands"/><i id="icon"  class="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to="/cart" className="color">
           <button id="cart-btn"> <i class="fa-solid fa-cart-shopping" style={{color:"rgb(11, 11, 69)"}}></i>Cart({cart.length})</button>
            </Link> 
          </>
        )}
        <Link to="/login"><button id="head-btn" style={{borderRadius: "20px"}} onClick={onLogin}>{isLoggedIn ? "Logout" : "Login"}</button></Link>

      </div>
    </>  
  );
} 
export default Header;                             




