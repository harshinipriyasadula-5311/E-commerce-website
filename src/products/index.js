import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './products.css';
import { useNavigate } from 'react-router-dom';
import ProductDetails from './productdetails'; 

function Products() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((res) => {
      setProducts(res.data.products);
    });
  }, []);

  return (
    <>
      {/* <h1 style={{ textAlign: 'center' }}>Products component</h1> */}
      <div class="section-top">
            
               
            </div>
      
      <div id="product-wrapper">
        {products.map((product, i) => {
          return (
            <div
              className="product-card"
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
              key={i}
            >
              <img className="product-thumbnail" src={product.thumbnail} alt={`Product ${i}`} />
              <p>
                <b>Title:</b>
                {product.title}
              </p>
              <p>
                <b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i> {product.price}
              </p>
              <p>
                <b>Rating:</b>
                {product.rating}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;



























// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './products.css';
// import { useNavigate } from 'react-router-dom';
// import ProductDetails from './productdetails'; 

// function Products() {
//   let navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const[productName ,setProductName] = useState([]);
//   const [filteredProducts , setFilteredProducts] =useState([]);
//   useEffect(() => {
//     axios.get('https://dummyjson.com/products').then((res) => {
//       setProducts(res.data.products);
//     });
//   }, []);

//   return (
//     <>
//     <div style={{ textAlign: 'center' }}>
//       <h1>Products component</h1>
      
//        <input 
//          placeholder ="Enter your name"
//          value={productName}
//          onChange={(e)=>{
//           setProductName(e.target.value);
//          }}
//        />
//        </div>

      




//       <div id="product-wrapper">

//       {/* {filteredProducts.length>0
//       ? filteredProducts.map( (products,i)=>(

//       )

      

//       )} */}



//         {products.map((product, i) => {
//           return (
             
//             <div
//               className="product-card"
//               onClick={() => {
//                 navigate(`/products/${product.id}`); 
//               }}
//               key={i}
//             >
//               <img className="product-thumbnail" src={product.thumbnail} alt={`Product ${i}`} />
//               <p>
//                 <b>Title:</b>
//                 {product.title}
//               </p>
//               <p>
//                 <b>Price:</b> {product.price}
//               </p>
//               <p>
//                 <b>Rating:</b>
//                 {product.rating}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
// export default Products;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './products.css';
// import { useNavigate } from 'react-router-dom';
// import ProductDetails from './productdetails'; 

// function Products() {
//   let navigate = useNavigate();

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://dummyjson.com/products').then((res) => {
//       setProducts(res.data.products);
//     });
//   }, []);

//   return (
//     <>
//       <h1 style={{ textAlign: 'center' }}>Products component</h1>
//       <div id="product-wrapper">
//         {products.map((product, i) => {
//           return (
//             <div
//               className="product-card"
//               onClick={() => {
//                 navigate(`/products/${product.id}`);
//               }}
//               key={i}
//             >
//               <img className="product-thumbnail" src={product.thumbnail} alt={`Product ${i}`} />
//               <p>
//                 <b>Title:</b>
//                 {product.title}
//               </p>
//               <p>
//                 <b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i> {product.price}
//               </p>
//               <p>
//                 <b>Rating:</b>
//                 {product.rating}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
// export default Products;