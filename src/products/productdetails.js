import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './products.css';
                           
function ProductDetails() {
  let params = useParams();      
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    if (params.id) {
      axios.get(`https://dummyjson.com/products/${params.id}`).then((res) => {
        setProductDetails(res.data);
      });
    }
  }, [params.id]);
                                          
  if (!productDetails) {
    return <h1 id="load">Loading...</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: 'fantasy' }}>Product Details</h1>
      <div id="product-spec-wrapper">
        <img id="product-spec-image" src={productDetails.thumbnail} alt={productDetails.title} />
        <div id="small-images-wrapper">
          {productDetails.images.map((smallimage, i) => (
            <div
              onClick={() => {
                setProductDetails((prevDetails) => ({
                  ...prevDetails,
                  thumbnail: smallimage,
                }));
              }}
              className="small-image-wrapper"
              key={i}>
              <img className="small-image-thumbnail" src={smallimage} alt={`Small Image ${i}`} />
            </div>
          ))}
        </div>
        <div id="product-spec-content">
          <p>
            <b>Title:</b>
            {productDetails.title}
          </p>
          <p>
            <b>Price:</b>
            {productDetails.price}
          </p>
          <p>
            <b>Rating:</b>
            {productDetails.rating}
          </p>
          <p>
            <b>Left over stock:</b> {productDetails.stock}
          </p>
          <p>
            <b>Discount:</b> {productDetails.discountPercentage}
          </p>
          <p>
            <b>Description:</b>
            {productDetails.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;





// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import './products.css';

// function ProductDetails() {
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
//     return <h1 id="load">Loading...</h1>;
//   }

//   return (
//     <>
//       {/* Your existing code for product details */}
//       <Link to={`/home/${productDetails.title}`}>Go to Home with Product Name</Link>
//     </>
//   );
// }

// export default ProductDetails;
