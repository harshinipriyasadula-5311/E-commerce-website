import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './products.css';
import Cart from '../cart'; 

function ProductDetails({ addToCart }) {
  let params = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  useEffect(() => {
    if (params.id) {
      axios.get(`https://dummyjson.com/products/${params.id}`).then((res) => {
        setProductDetails(res.data);
      });
    }            
  }, [params.id]);    
  if (!productDetails) {
    return <h1 id="load">Loading...</h1>
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
        <div id="product-spec-content" >
          <p><b>Title:</b>{productDetails.title}</p>
          <p><b>Price:</b><i class="fa-solid fa-indian-rupee-sign"></i>{productDetails.price}</p>
          <p><b>Discountpercentage:</b>{productDetails.discountPercentage}%</p>
          <p><b>Rating:</b>{productDetails.rating}</p>
          <p><b>Stock:</b>{productDetails.stock}</p>
          <p><b>brand:</b>{productDetails.brand}</p>
          <p><b>category:</b>{productDetails.category}</p>
          <p><b>Left over stock:</b> {productDetails.stock} </p>
          <p><b>Discount:</b> {productDetails.discountPercentage} <i class="fa-solid fa-tag"></i></p>
          <p><b>Description:</b>{productDetails.description}</p>
          <button onClick={() => addToCart(productDetails)}>Add to Cart</button>
        </div>            
      </div>
    </>
  );
}
export default ProductDetails;





























