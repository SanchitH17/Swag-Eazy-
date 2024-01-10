import React from 'react';
import "./Description.css";

const Description = () => {
  return (
    <div className="description-container">
      <div className="description-content">
        <p>
          Fashion is a young and bold fashion brand, which brings to you the latest
          trends in men's fashion. We aspire to epitomize and bring the right
          balance between style and comfort in our products. In today's fast-paced
          world, our endeavor is to innovate and differentiate our product line to
          cater to the trend-setting generation. Keeping our customer's happiness
          as our primary goal, we are ever striving to launch unique styles and
          adding value to India's fashion-conscious wardrobes.
        </p>
      </div>
      <div className='btn'>
      <button className="btn add-to-cart">Add to bag</button>
      </div>
    </div>
  );
}

export default Description;
