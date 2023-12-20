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




















/* start---without login function*/

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [userName, setUserName] = useState('');
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [activeCardId, setActiveCardId] = useState(null);

//   useEffect(() => {
//     axios.get(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
//       .then((res) => { setUsers(res.data) })
//   }, []);

//   useEffect(() => {
//     let filteredUsers = users.filter((user) => {
//       return user.firstName.toLowerCase().includes(userName.toLowerCase());
//     });
//     setFilteredUsers(filteredUsers);
//   }, [userName, users]);

//   function userCardClicked(id) {
//     let previousActiveUserCard = document.querySelector('.active-card');
//     if (previousActiveUserCard !== null) {
//       previousActiveUserCard.classList.remove('active-card');
//     }

//     let activeUserCard = document.getElementById(`userCard${id}`);
//     console.log(activeUserCard);
//     activeUserCard.classList.add('active-card');

//     setActiveCardId(id);
//   }

//   return (
//     <>
//       <h1 style={{ textAlign: 'center'}}><u>User Cards</u></h1>
//       <div style={{ textAlign: 'center' }}>
//         <input
//           placeholder='search for a user....
//           value={userName}
//           onChange={(e) => {
//             setUserName(e.target.value);
//           }}
//         />
//       </div>
//       <div id='user-wrapper'>
//         {filteredUsers.length > 0 ? (
//           filteredUsers.map((user, i) => (
//             <div
//               className={`user-card ${activeCardId === i ? 'active-card' : ''}`}
//               id={`userCard${i}`}
//               onClick={() => { userCardClicked(i) }}
//             >
//               <p><b>First Name:</b> {user.firstName}</p>
//               <p><b>Last  Name:</b>{user.lastName} </p>
//               <p><b>Phone No:</b>{user.phone} </p>
//               <p><b>City:</b> {user.address.city}</p>
//               <p><b>Description:</b>{user.description} </p>
//             </div>
//            ))
//         ) : (
//           users.map((user, i) => (
//             <div
//               className={`user-card ${activeCardId === i ? 'active-card' : ''}`}
//               id={`userCard${i}`}
//               onClick={() => { userCardClicked(i) }}
//             >
//               <p><b>First Name:</b> {user.firstName}</p>
//               <p><b>Last  Name:</b>{user.lastName} </p>
//               <p><b>Phone No:</b>{user.phone} </p>
//               <p><b>City:</b> {user.address.city}</p>
//               <p><b>Description:</b>{user.description} </p>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
/* end---without login function*/
 

/* start ---with login function */

// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './home';
// import Products from './products';
// import Header from './header';
// import ProductDetails from './products/productdetails';

// function App() {
//   const [isLoggedIn , setIsLoggedIn]=useState(false)
//   const handleLogin =() => {
//     setIsLoggedIn(!isLoggedIn)
//   };
  
//   return (
//     <>
//       <BrowserRouter>
//         <Header isLoggedIn={isLoggedIn}  onLogin={handleLogin} />
//         <Routes>
//           <Route path="/" element={ isLoggedIn ? <products/> : <Home />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//           <Route path="*" element={<h1 style={{textAlign:'center', color:'red'}}>404 element not found</h1>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;
/* end ---with login function */











// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './home'; 
// import Products from './products';
// import Header from './header';
// import ProductDetails from './products/productdetails';
// import Cart from './cart';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const handleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} cart={cartItems} />
//         <Routes>
//           <Route
//             path="/"
//             element={<HomePage />} // Render HomePage component for the root route
//           />
//           {/* ... Other routes */}
//           <Route
//             path="/cart"
//             element={<Cart cart={cartItems} />} // Render Cart component
//           />
//           {/* ... */}
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




//main program start-------------------------------------------------------------------------
// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './home'; 
// import Products from './products';
// import Header from './header';
// import ProductDetails from './products/productdetails'; 
// import Cart from './cart/cartpage';
// import Login from './login';
// import "./login.css"
// import Signup from './signup';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const handleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };
//   return (
//     <>
//       <BrowserRouter>
//         <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} cart={cartItems} />
//         <Routes>
//           <Route
//             path="/"
//             element={<HomePage />} 
//           />
//           <Route
//             path="/products"
//             element={<Products />} 
//           />
//           <Route
//             path="/products/:id"
//             element={<ProductDetails addToCart={addToCart} />} 
//           />
//           <Route
//             path="/cart"
//             element={<Cart cart={cartItems} />} 
//           />
//            <Route
//             path="/login"
//             element={<Login/>} 
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
// main program end----------------------------------------------------------------------


// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './home'; 
// import Products from './products';
// import Header from './header';
// import ProductDetails from './products/productdetails'; 
// import Cart from './cart';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartItems, setCartItems] = useState([]);

//   const handleLogin = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} cart={cartItems} />
//         <Routes>
//           <Route
//             path="/home"
//             element={<HomePage />} 
//           />
//           <Route
//             path="/products"
//             element={<Products />} 
//           />
//           <Route
//             path="/products/:id"
//             element={<ProductDetails/>} 
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;