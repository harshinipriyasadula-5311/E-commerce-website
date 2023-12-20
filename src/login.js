import React, { useState } from 'react';
import "./login.css"
import Cart from './cart/cartpage';
import { Link } from 'react-router-dom';
import SignupForm from './signup';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form style={{height:"550px"}} onSubmit={handleSubmit}>
       <div className='sign'> 
    <i class="fa-brands fa-google"></i>&nbsp; &nbsp; sign in with Google
   
    </div>
    <div className='sign'> 
    <i class="fa-brands fa-facebook-f"></i>&nbsp; &nbsp; sign in with Facebook
   
    </div>
        <div className='log'>
          <label>Email:</label>
          <input className='inp'
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className='log'>
          <label>Password:</label>
          <input className='inp1'
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
                <>
                 <Link to="/signup" ><button className='btn-log'>Login</button></Link>
                </>
            </div>
      </form>
    </div>
  );
}

export default Login;


// import React from 'react'

// const Login = () => {
//     return (
//         <>
//             {/* <!-- Button trigger modal --> */}
//             <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
//                 <span className="fa fa-sign-in me-1"></span> Login
//             </button>

//             {/* <!-- Modal --> */}
//             <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Login</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <button className="btn btn-primary w-100 mb-4">
//                                 <span className="fa fa-google me-2"></span> Sign in With Google
//                             </button>
//                             <button className="btn btn-primary w-100 mb-4">
//                                 <span className="fa fa-facebook me-2"></span> Sign in With Facebook
//                             </button>
//                             <form>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                                     <input type="password" className="form-control" id="exampleInputPassword1" />
//                                 </div>
//                                 <div className="mb-3 form-check">
//                                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                                 </div>
//                                 <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './login.css';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [formClicked, setFormClicked] = useState(false);

//   const handleLogin = () => {
//     // Validate email and password
//     if (!email.trim() || !password.trim()) {
//       setError('Please enter both email and password');
//       return;
//     }

//     // Add your authentication logic here
//     // For simplicity, I'm using a basic check for demonstration purposes
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//       onLogin(); // Notify the App component about the successful login
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   const handleClick = () => {
//     setFormClicked(true);
//   };

//   return (
//     <div className={`login-container${formClicked ? ' form-clicked' : ''}`}>
//       <h1>Login</h1>
//       <div>
//         <label><b>Email✉️ :</b></label>
//         <input
//           type="text" required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           onClick={handleClick}
//         />
//       </div>
//       <div>
//         <label><b>Password 🔐:</b></label>
//         <input
//           type="password" required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           onClick={handleClick}
//         />
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}<br></br>
//       <button onClick={handleLogin}>Login</button>
//       <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
//     </div>
//   );
// }

// export default Login;













//main code---------start**
// import React, { useState } from 'react';
// import "./login.css"

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can perform login/signup logic here with 'email' and 'password' states
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Clear the form fields after submission
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h2>Login or Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='log'>
//           <label>Email:</label>
//           <input 
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className='log'>
//           <label>Password:</label>
//           <input 
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button className='btn-log' type="submit">Login/Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default Login;
//main code end-----------------**





// import React, { useState } from 'react';
// import "./login.css"
// import { Link } from 'react-router-dom';


// import Cart from './cart/cartpage';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div>
//       <h2>Login Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className='log'>
//           <label>Email:</label>
//           <input className='inp'
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div className='log'>
//           <label>Password:</label>
//           <input className='inp'
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <div>
//                 <>
//                   <button className='btn-log'>Login</button>
//                   {/* <p><Link to="/signup">Signup</Link></p> */}
//                 </>
           
//             </div>
//       </form>
//     </div>
//   );
// }

// export default Login;


