import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Product from './Product';

const Products = () => {
  return (
    <div className="products-wrapper">
      <Product 
        id='1' 
        title='SAMSUNG Galaxy Tab S9 FE+ Plus 12.4” 256GB Android Tablet, Long Battery Life, Powerful Processor, S Pen, 8MP Camera, Lightweight Durable Design, Expandable Storage, US Version, 2023, Mint'
        image='/product1.png'
        rating={5}
        price={875.00}
        />
      <Product 
        id='2' 
        title='Stanley IceFlow Flip Straw Tumbler with Handle 30 oz | Twist On Lid and Flip Up Straw | Leak Resistant Water Bottle | Insulated Stainless Steel |BPA-Free | Lilac'
        image='/product2.png'
        rating={3}
        price={255.00}
        />
      <Product 
        id='3' 
        title='Kids Smart Watches Girls Gifts Age 3-12, Smart Watch for Kids with 24 Games Camera Video Recorder Music Player Alarm Calculator Stopwatch Flashlight Pedometer Gift Toys for Girls Ages 5 6 7 8 9 10'
        image='/product3.png'
        rating={4}
        price={145.00}
        />
       <Product 
        id='4' 
        title='LOreal Paris Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 903 Medium'
        image='/product4.png'
        rating={2}
        price={223.00}
        />
      <Product 
        id='1' 
        title='SAMSUNG Galaxy Tab S9 FE+ Plus 12.4” 256GB Android Tablet, Long Battery Life, Powerful Processor, S Pen, 8MP Camera, Lightweight Durable Design, Expandable Storage, US Version, 2023, Mint'
        image='/product1.png'
        rating={5}
        price={875.00}
        />
      <Product 
        id='2' 
        title='Stanley IceFlow Flip Straw Tumbler with Handle 30 oz | Twist On Lid and Flip Up Straw | Leak Resistant Water Bottle | Insulated Stainless Steel |BPA-Free | Lilac'
        image='/product2.png'
        rating={3}
        price={255.00}
        />
      <Product 
        id='3' 
        title='Kids Smart Watches Girls Gifts Age 3-12, Smart Watch for Kids with 24 Games Camera Video Recorder Music Player Alarm Calculator Stopwatch Flashlight Pedometer Gift Toys for Girls Ages 5 6 7 8 9 10'
        image='/product3.png'
        rating={4}
        price={145.00}
        />
       <Product 
        id='4' 
        title='LOreal Paris Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 903 Medium'
        image='/product4.png'
        rating={2}
        price={223.00}
        />
    </div>
  )
}

export default Products