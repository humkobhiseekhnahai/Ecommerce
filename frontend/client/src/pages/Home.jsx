import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Announcements from '../components/Announcements.jsx';
import Slider from '../components/Slider.jsx';
import Categories from '../components/Categories.jsx';
import {Products} from '../components/Products.jsx';
import NewsLetter from '../components/NewsLetter.jsx';
import {Footer} from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className='Container m'>
      <Announcements/>
      <Navbar/>
      <br/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default Home