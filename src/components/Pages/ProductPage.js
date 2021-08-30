import React from 'react'
import './Product.css'
import shoe1 from '../../images/shoe1.jpeg'
import shoe2 from '../../images/shoe2.jpeg'
import shoe3 from '../../images/shoe3.jpeg'
import shoe4 from '../../images/shoe4.jpeg'

function ProductPage() {
  return (
    <>
    <h1 className="product-heading">Product Page</h1>
      <ul class="product-container">
        <li><img src={shoe1} alt='Shoe Name' className="product-item" /></li>
        <li><img src={shoe2} alt='Shoe Name' className="product-item" /></li>
        <li><img src={shoe3} alt='Shoe Name' className="product-item" /></li>
        <li className="product-item">Buy</li>
      </ul>
      <ul className="product-container">
        <li class="product-item">Reviews</li>
        <li class="product-item">Colours</li>
        <li class="product-item">Sizes</li>
        <li class="product-item">Shipping</li>
      </ul>
    </>
  );
}

export default ProductPage;