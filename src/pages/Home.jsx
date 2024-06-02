import React from 'react';

import Hero from '../components/Hero';
//import './Home.css'; 
import Navbar from '../components/NavBar';
import Deal from '../components/Deal';
import Arrivals from '../components/Arrivals';

const Home = () => {
  return (
    <div className="Home">
     <Navbar/>
     <Hero/>
     <Deal/>
     <Arrivals/>
    </div>
  );
};

export default Home;
