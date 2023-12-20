//sam------start
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./cart.css"

function Cart({ cart, removeFromCart }) {
  const [quantity, setQuantity] = useState({});
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart, quantity]);

  const handleIncrement = (index) => {
    const updatedQuantity = { ...quantity };
    updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
    setQuantity(updatedQuantity);
  };

  const handleDecrement = (index) => {
    const updatedQuantity = { ...quantity };
    if (updatedQuantity[index] > 0) {
      updatedQuantity[index] -= 1;
      setQuantity(updatedQuantity);
    }
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    removeFromCart(updatedCart);
    const updatedQuantity = { ...quantity };
    delete updatedQuantity[index];
    setQuantity(updatedQuantity);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item, index) => {
      totalPrice += item.price * (quantity[index] || 1);
    });
    setTotalCartPrice(totalPrice);
  };
  return (
    <div className="card-wrapper">
      <div className="div-cont">
      <h2 className="cart-head1">Cart</h2>
      <Link className="back" to="/products"><button className="back-btn"><i class="fa-solid fa-arrow-left fa-lg"></i>  Back to products page</button></Link>&nbsp;&nbsp;
      <Link className="back" to="/"><button className="back-btn"><i class="fa-solid fa-arrow-left fa-lg"></i>  Back to Home Page</button></Link>
      </div>
      <div className="product-wrapper">
        {cart.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
            <p>
              <b>Title:</b> {item.title}
            </p>
            <p>
              <b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}
            </p>
            <p>
              <b>Quantity:</b> {item.quantity}
            </p>
            <button onClick={() => handleIncrement(index)}>+</button>
            <span>{quantity[index] || 1}</span>
            <button onClick={() => handleDecrement(index)}>-</button>
            <br/>
            <p> 
              <b>Total Price:</b> {item.price * (quantity[index] || 0)} 
            </p>
            <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
      <h2 style={{textAlign:"right" , margin:"100px" ,textShadow:"2px 1px 2px gray"}}>
       <b> Sub Total: </b> <i class="fa-solid fa-indian-rupee-sign"></i> <span className="cost">{totalCartPrice}</span>
      </h2>

    </div>
  );
}
export default Cart;
//sam-----end
