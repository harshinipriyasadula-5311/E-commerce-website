//main program start------------------------------------------------------------------- 
// import React ,{useState} from "react";

// function Cart({ cart, removeFromCart }) {
//   const handleRemove = (index) => {
//     removeFromCart(index);
//   };
  
//   const [quantity, setQuantity] = useState({});

//   const handleIncrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
//     setQuantity(updatedQuantity);
//   };

//   const handleDecrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     if (updatedQuantity[index] > 0) {
//       updatedQuantity[index] -= 1;
//       setQuantity(updatedQuantity);
//     }
//   }

//   return (
//     <div>
//       <h2>Cart</h2>
//       <div className="product-wrapper">
//         {cart.map((item, index) => (
//           <div className="product-card" key={index}>
//             {/* Display item details */}
//             <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
//             <p><b>product Name:</b> {item.title}</p>
//             <p><b>Price:</b> {item.price}</p>
//             <p><b>Quantity:</b> {item.quantity}</p>
//             <button onClick={() => handleIncrement(index)}>+</button>
//             <span>{quantity[index] || 1}</span>
//             <button onClick={() => handleDecrement(index)}>-</button><br></br>
//             <p><b> Total Price:</b> {item.price * (quantity[index] || 1)}</p>
//             <button onClick={() => removeFromCart(index)}>Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;
//main program end----------------------------------------------------------------------












// import React ,{useState} from "react";

// function Cart({ cart, removeFromCart }) {
//   const handleRemove = (index) => {
//     removeFromCart(index);
//   };
  
//   const [quantity, setQuantity] = useState({});

//   const handleIncrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
//     setQuantity(updatedQuantity);
//   };

//   const handleDecrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     if (updatedQuantity[index] > 0) {
//       updatedQuantity[index] -= 1;
//       setQuantity(updatedQuantity);
//     }
//   }

//   return (
//     <div>
//       <h2>Cart</h2>
//       <div className="product-wrapper">
//         {cart.map((item, index) => (
//           <div className="product-card" key={index}>
//             {/* Display item details */}
//             <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
//             <p><b>product Name:</b> {item.title}</p>
//             <p><b>Price:</b> {item.price}</p>
//             <p><b>Quantity:</b> {item.quantity}</p>
//             <button onClick={() => handleIncrement(index)}>+</button>
//             <span>{quantity[index] || 1}</span>
//             <button onClick={() => handleDecrement(index)}>-</button><br></br>
//             <p><b> Total Price:</b> {item.price * (quantity[index] || 1)}</p>
//             <button onClick={() => removeFromCart(index)}>Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Cart;

//main code start------------------------------------
//** */
// import React, { useState } from "react";

// function Cart({ cart, removeFromCart }) {
//   const handleRemove = (index) => {
//     removeFromCart(index);
//   };
//   const [quantity, setQuantity] = useState({});

//   const handleIncrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
//     setQuantity(updatedQuantity);
//   };

//   const handleDecrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     if (updatedQuantity[index] > 0) {
//       updatedQuantity[index] -= 1;
//       setQuantity(updatedQuantity);
//     }
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       <div className="product-wrapper">
//         {cart.map((item, index) => (
//           <div className="product-card" key={index}>
//             <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
//             <p>
//               <b>product Name:</b> {item.title}
//             </p>
//             <p>
//               <b>Price:</b> {item.price}
//             </p>
//             <p>
//               <b>Quantity:</b> {item.quantity}
//             </p>
//             <button onClick={() => handleIncrement(index)}>+</button>
//             <span>{quantity[index] || 1}</span>
//             <button onClick={() => handleDecrement(index)}>-</button>
//             <br />
//             <p>
//              <b>Total Price:</b> {item.price * (quantity[index] || 1)}
//             </p>
//             <button onClick={() => handleRemove(index)}>Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Cart;
//** */
//main code end---------------------------------------------



// import React, { useState, useEffect } from "react";
// import "./cart.css"
// function Cart({ cart, removeFromCart }) {
//   const [quantity, setQuantity] = useState({});
//   const [totalCartPrice, setTotalCartPrice] = useState(0);

//   useEffect(() => {
//     calculateTotalPrice();
//   }, [cart, quantity]);

//   const handleIncrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
//     setQuantity(updatedQuantity);
//   };

//   const handleDecrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     if (updatedQuantity[index] > 0) {
//       updatedQuantity[index] -= 1;
//       setQuantity(updatedQuantity);
//     }
//   };

//   const handleRemoveFromCart = (index) => {
//     const updatedCart = cart.filter((item, i) => i !== index);
//     removeFromCart(updatedCart);
//     const updatedQuantity = { ...quantity };
//     delete updatedQuantity[index];
//     setQuantity(updatedQuantity);
//   };

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;
//     cart.forEach((item, index) => {
//       totalPrice += item.price * (quantity[index] || 1);
//     });
//     setTotalCartPrice(totalPrice);
//   };
//   return (
//     <div className="card-wrapper">
//       <h2 style={{margin:"0px auto"}}>Cart</h2>
//       <div className="product-wrapper">
//         {cart.map((item, index) => (
//           <div className="product-card" key={index}>
//             <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
//             <p>
//               <b>Item Name:</b> {item.title}
//             </p>
//             <p>
//               <b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}
//             </p>
//             <p>
//               <b>Quantity:</b> {item.quantity}
//             </p>
//             <button onClick={() => handleIncrement(index)}>+</button>
//             <span>{quantity[index] || 0}</span>
//             <button onClick={() => handleDecrement(index)}>-</button>
//             <br />
//             <p> 
//               <b>Total Price:</b> {item.price * (quantity[index] || 0)} 
//             </p>
//             <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
//           </div>
//         ))}
//       </div>
//       <h2 style={{textAlign:"right" , margin:"50px", backgroundColor:"white", border:"1px solid green"}}>
//         Sub Total:<i class="fa-solid fa-indian-rupee-sign"></i> <span className="cost">{totalCartPrice}</span>
//       </h2>
//     </div>
   
//   );
// }
// export default Cart;





//it will searching in cart- start--------------------

// import React, { useState } from "react";

// function Cart({ cart, removeFromCart }) {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleRemove = (index) => {
//     removeFromCart(index);
//   };

//   const [quantity, setQuantity] = useState({});

//   const handleIncrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     updatedQuantity[index] = (updatedQuantity[index] || 0) + 1;
//     setQuantity(updatedQuantity);
//   };

//   const handleDecrement = (index) => {
//     const updatedQuantity = { ...quantity };
//     if (updatedQuantity[index] > 0) {
//       updatedQuantity[index] -= 1;
//       setQuantity(updatedQuantity);
//     }
//   };

//   const filteredCart = cart.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>Cart</h2>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="product-wrapper">
//         {filteredCart.map((item, index) => (
//           <div className="product-card" key={index}>
//             {/* Display item details */}
//             <img src={item.thumbnail} alt={item.title} className="product-thumbnail" />
//             <p>
//               <b>Product Name:</b> {item.title}
//             </p>
//             <p>
//               <b>Price:</b> {item.price}
//             </p>
//             <p>
//               <b>Quantity:</b> {item.quantity}
//             </p>
//             <button onClick={() => handleIncrement(index)}>+</button>
//             <span>{quantity[index] || 1}</span>
//             <button onClick={() => handleDecrement(index)}>-</button>
//             <br />
//             <p>
//               <b>Total Price:</b> {item.price * (quantity[index] || 1)}
//             </p>
//             <button onClick={() => handleRemove(index)}>Remove</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Cart;
//it will searching in cart -end---------------------







// import React, { useState } from 'react';
// function Cart() {
//   const [cartItems, setCartItems] = useState(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     return storedCart.map(item => ({ ...item, quantity: item.quantity || 1 }));
//   });

//   const handleIncrement = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart[index].quantity += 1;
//     updateCart(updatedCart);
//   };

//   const handleDecrement = (index) => {
//     const updatedCart = [...cartItems];
//     if (updatedCart[index].quantity > 1) {
//       updatedCart[index].quantity -= 1;
//       updateCart(updatedCart);
//     }
//   };
//   const handleRemove = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1); // Remove the item at the specified index
//     updateCart(updatedCart);
//   };

//   const updateCart = (updatedCart) => {
//     setCartItems(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };
// return (
//   <>
//     <h1>Cart Component</h1>
//     <div id="product-wrapper">
//       {cartItems.map((item, index) => (
//         <div className="product-card" key={index}>
//           <div>
//             <img className="product-thumbnail" src={item.thumbnail} alt={`Product ${index}`} />
//             <p><b>Title:</b>{item.title}</p>
//             <p><b>Price:</b>{item.price}</p>
//             <p><b>Quantity:</b> {item.quantity}</p>
//             <p><b>Total:</b> {item.price * item.quantity}</p>
//           </div>
//           <div>
//             <button onClick={() => handleIncrement(index)}>+</button>
//             <button onClick={() => handleDecrement(index)}>-</button>
//             <button onClick={() => handleRemove(index)}>Remove</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   </>
// );
// }

// export default Cart



