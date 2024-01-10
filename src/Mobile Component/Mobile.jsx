import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faGear, faFloppyDisk, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Wrap, WrapItem, Checkbox, Stack, Button, Divider, Text, Box } from '@chakra-ui/react';
import Logo from "../Assests/logo-black-2.png"
import chat from "../Assests/download.png"
import './Mobile.css';

const Mobile = () => {
  const [color, setColor] = useState('');

  const handleCheckboxChange = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div>
      <div className='phone-nav'>
        <FontAwesomeIcon icon={faBars} className="fa-bars" />

        <div className='phone-nav-right'>
          <FontAwesomeIcon icon={faMagnifyingGlass} id='searchicon' />
          <Wrap>
            <WrapItem>
              <Avatar size={'md'} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' className="avatar" />
            </WrapItem>
          </Wrap>
        </div>
      </div>

      <div className='image-tags'>
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-A_1703592402117' alt="Product" />
      </div>

      <div className="contents">
        <span className="product-path">Products &gt; <span className="product-category">Class Zipper</span></span>
        <h1 className='pro-name'>Classic Zipper</h1>
        <p>Machine Wash 100% Polyester Casual wear Three stripes Long sleeve Gentle machine wash Made in India</p>
        <p className='price-range'>Price range</p>
        <p className='price-list'>$45-$150 <span>(50% off)</span></p>
      

      <Divider color={'grey'} border={'1px black grey'} w={"60%"} mt={10} mb={5} />
      <div className="color-checkboxes">
        <span>Colors &nbsp;</span>
        <Stack direction="row" spacing={2} align="center">
          <Checkbox colorScheme="" defaultChecked className="black" size='lg' isChecked={color === 'black'} onChange={() => handleCheckboxChange('black')}></Checkbox>
          <Checkbox colorScheme="" className="white" size='lg' value='white' isChecked={color === 'white'} onChange={() => handleCheckboxChange('white')}></Checkbox>
          <Checkbox colorScheme="" className="green" size='lg' value='green' isChecked={color === 'green'} onChange={() => handleCheckboxChange('green')} ></Checkbox>
          <Checkbox colorScheme="" className="blue" size='lg' value='blue' isChecked={color === 'blue'} onChange={() => handleCheckboxChange('blue')}></Checkbox>
          <Checkbox colorScheme="" className="red" size='lg' value='red' isChecked={color === 'red'} onChange={() => handleCheckboxChange('red')}></Checkbox>
        </Stack>
      </div>

      <Divider color={'grey'} border={'1px black grey'} w={"60%"} mt={5} mb={5} />
      <p>Printing type</p>
      <Wrap spacing={4} mt={3}>
        <Button colorScheme='blue'>DTG Printing</Button>
        <Button colorScheme='teal' variant='outline'>Embroidery</Button>
      </Wrap>

      <Divider color={'grey'} border={'1px black grey'} w={"60%"} mt={5} />
      <div className='ultypes'>
        <p><FontAwesomeIcon icon={faCircle} className="orange-icon"/> The more you order, the more you save</p>
        <ul type="bullets" className="price-lists">
          <li>50-150$</li>
          <li>500-60$</li>
          <li>100-100$</li>
          <li>800-35$</li>
          <li>200-80$</li>
        </ul>
      </div>

      <Divider color={'grey'} border={'1px black grey'} w={'60%'} mt={10} />
      <div className='text-2'>
        <Text><FontAwesomeIcon icon={faGear}/> Order will only start <b>manufacturing once you provide the size details</b> which can be done in a later step</Text>
      </div>
      <Text><FontAwesomeIcon icon={faFloppyDisk}/> We will send you digital mockups for your approval <b>within 24 hrs</b></Text>

      <Divider color={'grey'} border={'1px black grey'} w={'60%'} />
      <Box mt={5} mb={10}>
        <Text>
          Fashion is a young and bold fashion brand, which brings to you the latest trends in mens fashion. We
          aspire to epitomize and bring the right balance between style and comfort in our products.
        </Text>
        <Button colorScheme="pink" variant="link" mt={3}>
          Read More
        </Button>
      </Box>
      <div className="image-boxes">
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-A_1703592402117' alt='Product 1' />
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-B_1703592409743' alt='Product 2' />
         </div>
        <div className="image-boxes">
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-A_1703592402117' alt='Product 1' />
        <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Marks-and-spencer-Hoodie-B_1703592409743' alt='Product 2' />
      </div>
      <h1 id='heading'>Items that go with this</h1> 
      <div className="product-container">
        <div className="product-card">
          <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Bio%20Wash%20Round%20Neck_1666784392130' alt='prod' />
          <h3>Adidas Dry-Fit Polo Neck Navy Blue T-Shirt</h3>
          <p><b>$76</b></p>
        </div>
        <div className="product-card">
          <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Adidas-round-neck_1666784371121' alt='prod' />
          <h3>UCB Fleece</h3>
          <p><b>$76</b></p>
        </div>
      </div>
      </div>
      <div className='footer-sec'>
      <div className='footer-img'>
      <img src={Logo}></img>
      </div>
      <div className='footer-lists'>
      <ul type='none'> 
          <li> Quick Links</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>

          <ul type='none'> 
          <li>Orders</li>
            <li>Products</li>
            <li>Present Packs</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        
          
          <ul type='none'> 
          <li>Explore</li>
            <li>Services</li>
            <li>Wall of Love</li>
          </ul>
        
         
          <ul type='none'> 
          <li>Legal</li>
            <li>Policies</li>
            <li>Terms and conditions</li>
            <li>Return policy</li>
          </ul>
       
        
          <ul type='none'> 
          <li>Follow us on</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>

          <ul type='none'> 
          <li>Policies</li>
            <li>Terms and conditions</li>
            <li>Return policy</li>
          </ul>
        
      </div>
    
      </div>
      
      <img src={chat} alt='prod' className='chat-logo'></img>
      
      <div className='btn-div'>
      
      <button className="btn-add-to-cart">Add to bag</button></div>
 </div> 
  );
};

export default Mobile;
