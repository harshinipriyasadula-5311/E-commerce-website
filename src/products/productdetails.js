// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './index.css';

// function productspec () {
//   let params = useParams();
//   const [productDetails, setProductDetails] = useState(null);

//   useEffect(() => {
//     if (params.id) {
//       axios.get(`https://dummyjson.com/products/${params.id}`).then((res) => {
//         setProductDetails(res.data);
//       });
//     }
//   }, [params.id]);

//   if (!productDetails) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <h1 style={{ textAlign: 'center', fontFamily: 'fantasy' }}>Product Specification</h1>
//       <div id="product-spec-wrapper">
//         <img id="product-spec-image" src={productDetails.thumbnail} alt={productDetails.title} />
//         <div id="small-images-wrapper">
//           {productDetails.images.map((smallimage, i) => (
//             <div
//               onClick={() => {
//                 // Fix the typo here: setProductDetails instead of setProductDetailsCopy
//                 setProductDetails((prevDetails) => ({
//                   ...prevDetails,
//                   thumbnail: smallimage,
//                 }));
//               }}
//               className="small-image-wrapper"
//               key={i}
//             >
//               <img className="small-image-thumbnail" src={smallimage} alt={`Small Image ${i}`} />
//             </div>
//           ))}
//         </div>
//         <div id="product-spec-content">
//           <p>
//             <b>Title:</b>
//             {productDetails.title}
//           </p>
//           <p>
//             <b>Price:</b>
//             {productDetails.price}
//           </p>
//           <p>
//             <b>Rating:</b>
//             {productDetails.rating}
//           </p>
//           <p>
//             <b>Left over stock:</b> {productDetails.stock}
//           </p>
//           <p>
//             <b>Discount:</b> {productDetails.discountPercentage}
//           </p>
//           <p>
//             <b>Description:</b>
//             {productDetails.description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default productspec;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import './products.css';

// function ProductDetails() {
//   let params = useParams();
//   const [ProductDetails, setProductDetails] = useState(null);

//   useEffect(() => {
//     if (params.id) {
//       axios.get(`https://dummyjson.com/products/${params.id}`).then((res) => {
//         setProductDetails(res.data);
//       });
//     }
//   }, [params.id]);

//   if (!productDetails) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <>
//       <h1 style={{ textAlign: 'center', fontFamily: 'fantasy' }}>Product Details</h1>
//       <div id="product-spec-wrapper">
//         <img id="product-spec-image" src={productDetails.thumbnail} alt={productDetails.title} />
//         <div id="small-images-wrapper">
//           {productDetails.images.map((smallimage, i) => (
//             <div
//               onClick={() => {
//                 // Fix the typo here: setProductDetails instead of setProductDetailsCopy
//                 setProductDetails((prevDetails) => ({
//                   ...prevDetails,
//                   thumbnail: smallimage,
//                 }));
//               }}
//               className="small-image-wrapper"
//               key={i}
//             >
//               <img className="small-image-thumbnail" src={smallimage} alt={`Small Image ${i}`} />
//             </div>
//           ))}
//         </div>
//         <div id="product-spec-content">
//           <p>
//             <b>Title:</b>
//             {productDetails.title}
//           </p>
//           <p>
//             <b>Price:</b>
//             {productDetails.price}
//           </p>
//           <p>
//             <b>Rating:</b>
//             {productDetails.rating}
//           </p>
//           <p>
//             <b>Left over stock:</b> {productDetails.stock}
//           </p>
//           <p>
//             <b>Discount:</b> {productDetails.discountPercentage}
//           </p>
//           <p>
//             <b>Description:</b>
//             {productDetails.description}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductDetails;