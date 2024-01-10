import React from 'react';
import "./SimilarProducts.css";

const SimilarProducts = () => {
  return (
    <div className='TOP'>
      <h1 id='heading'>Items that go with this</h1>
      
      <div className='similar-image-box'>
        <div className='container-img'>
          <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Bio%20Wash%20Round%20Neck_1666784392130' alt='Product 1' />
          <h3>Adidas Dry-Fit Polo Neck Navy Blue T-Shirt</h3>
          <p><b>$56</b></p>
        </div>
        <div className='container-img'>
          <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Untitled%20(1080%20%C3%97%201080%20px)%20(4)_1694598963146' alt='Product 2' />
          <h3>UCB Fleece</h3>
          <p><b>$76</b></p>
        </div>
        <div className='container-img'>
          <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Adidas-round-neck_1666784371121' alt='Product 3' />
          <h3>Bomber jacket sleeveless</h3>
          <p><b>$100</b></p>
        </div>
        <div className='container-img'>
          <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Adidas-Dry-Fit-Red-T-Shirt_1666784353681' alt='Product 4' />
          <h3>Trend round neck t-shirt</h3>
          <p><b>$50</b></p>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
