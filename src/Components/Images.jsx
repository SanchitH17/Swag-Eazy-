import React from 'react';
import './Images.css';

const Images = () => {
  return (
    <div className="images-container">
      <div className="image-box">
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-A_1703592402117' alt='Product 1' />
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-B_1703592409743' alt='Product 2' />
         </div>
        <div className="image-box">
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-A_1703592402117' alt='Product 1' />
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-B_1703592409743' alt='Product 2' />
      </div>
    </div>
  );
}

export default Images;
