import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
function Header() {
  return (                  
    <div id="header">
      <Link to="/" className="color">Home</Link>
      <Link to="/products" className="color">Products</Link>
      <button>Login</button>
    </div>
  )
}
export default Header;

