import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
function Header({isLoggedIn , onLogin}) {
  return (  
    <>         
    <div id="header">
      <Link to="/" className="color">Home</Link>
      {isLoggedIn && 
      <Link to="/products" className="color">Products</Link>}
      <button onClick ={onLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
    </>       
  )
}
export default Header;

