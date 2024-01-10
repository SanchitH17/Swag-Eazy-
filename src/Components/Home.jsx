import React, { useState } from 'react';
import './Home.css'; 
import { ChakraProvider } from '@chakra-ui/react';
import { Button, ButtonGroup , WrapItem ,Wrap, Box , Stack, Divider , Checkbox ,Text} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear , faFloppyDisk , faCircleXmark} from '@fortawesome/free-solid-svg-icons';
const Home = () => {
  const[color , setColor] = useState('black');
  
  const handleCheckboxChange = (value) => {
    setColor(value);
  };
  return (

    <div className="container">
      <img src='https://procureasystorage.blob.core.windows.net/swageazyproducts/Classic-Zipper_1666785441451' alt="Product" className="image" />
      <div className="content">
      <span className="product-path">Products &gt; <span className="product-category">Class Zipper</span></span>
        <h1>Classic Zipper</h1>
        <p>Machine Wash 100% Polyester Casual wear Three stripes Long sleeve Gentle machine wash Made in India</p>
        <p className='price-range'>Price range</p>
        <p className='price-list'>$45-$150 <span>(50% off)</span></p>

       
        <Divider color={'grey'} border={'1px black grey'} w={"60%"} mt={10} mb={5}/>
        <div className="color-checkboxes">
  <span>Colors &nbsp;</span>
  <Stack direction="row" spacing={2} align="center">
    <Checkbox colorScheme="" defaultChecked className="black" size='lg' isChecked={color === 'black'} onChange={() => handleCheckboxChange('black')}></Checkbox>
    <Checkbox colorScheme="" className="white" size='lg' value='white'  isChecked={color === 'white'} onChange={() => handleCheckboxChange('white')}></Checkbox>
    <Checkbox colorScheme="" className="green" size='lg' value='green' isChecked={color === 'green'} onChange={() => handleCheckboxChange('green')} ></Checkbox>
    <Checkbox colorScheme="" className="blue" size='lg' value='blue'isChecked={color === 'blue'} onChange={() => handleCheckboxChange('blue')}></Checkbox>
    <Checkbox colorScheme="" className="red" size='lg'value='red' isChecked={color === 'red'} onChange={() => handleCheckboxChange('red')}></Checkbox>
  </Stack>
</div>
       <Divider color={'grey'} border={'1px black grey'} w={"60%"} mt={5} mb={5}/>
        <p> Printing type</p>
        <Wrap spacing={4} mt={3}>
        <Button colorScheme='blue'> DTG Printing </Button>
    <Button colorScheme='teal' variant='outline'> Embroidery </Button>
    </Wrap>
    <Divider color={'grey'} border={'1px black grey'} w={"60%"} mt={5}/>
    <div className='ultypes'>
      <p> <FontAwesomeIcon icon={faCircleXmark} className="orange-icon"/> The more you order, the more you save </p>
        <ul type="bullets" className="price-lists">
        <li>50-150$</li>
        <li>500-60$ </li>
        <li>100-100$</li>
        <li>800-35$</li>
        <li>200-80$</li>

        </ul></div>
        <Divider color={'grey'} border={'1px black grey'} w={'60%'}  mt={10} />
        <div className='text-2'>
        <Text><FontAwesomeIcon icon={faGear}></FontAwesomeIcon > &nbsp; &nbsp; Order will only start<b> manufacturing once you provide the
           size details</b> which can be done in a later step</Text> </div>
           <Text><FontAwesomeIcon icon={faFloppyDisk}></FontAwesomeIcon> &nbsp; &nbsp; We will send you digital mockups for your approval<b> within
        24 hrs </b></Text>
        <Divider color={'grey'} border={'1px black grey'} w={'60%'} />
        </div>
     
    </div>
   
  );
}

export default Home;
