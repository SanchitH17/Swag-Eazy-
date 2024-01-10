import React, { useState, useEffect } from 'react';
import Home from './Components/Home'; 
import Mobile from './Mobile Component/Mobile.jsx'; 
import Navbar from './Components/Navbar';
import Description from './Components/Description';
import Images from './Components/Images';
import SimilarProducts from './Components/SimilarProducts';
import Footer from './Components/Footer';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      
      {isMobile ? (
        <>
          <Mobile />
        
        </>
      ) : (
        <>
          <Navbar/>
          <Home />
          <Description />
          <Images />
          <SimilarProducts />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
