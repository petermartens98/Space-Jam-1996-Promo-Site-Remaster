import React, { useState, useEffect } from 'react';
import MainOrbit from '../components/MainOrbit';
import HomeFooter from '../components/HomeFooter';
import HomeNavBar from '../components/HomeNavBar';

const Home = () => {
  return (
    <>
      <MainOrbit />
      <HomeNavBar />
      <HomeFooter />
    </>
  )
}

export default Home