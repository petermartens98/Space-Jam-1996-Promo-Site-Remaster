import React from 'react'
import styled from 'styled-components'
import SpaceJamLogo from '../assets/SpaceJamLogo.png'
import BBall from '../assets/planets/BBall.png'
import BehindTheJam from '../assets/planets/BehindTheJam.png'
import JamCentral from '../assets/planets/JamCentral.png'
import JumpStation from '../assets/planets/JumpStation.png'
import JuniorJam from '../assets/planets/JuniorJam.png'
import LunarTunes from '../assets/planets/LunarTunes.png'
import PressBoxShuttle from '../assets/planets/PressBoxShuttle.png'
import SiteMap from '../assets/planets/SiteMap.png'
import StellarSouveniers from '../assets/planets/StellarSouveniers.png'
import TheLineup from '../assets/planets/TheLineup.png'
import WarnerStudioStore from '../assets/planets/WarnerStudioStore.png'

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin-top: 250px;
`;

const SpaceJamLogoContainer = styled.div`
  position: relative;
`

const StyledSpaceJamLogo = styled.img`
  width: 265px;
  height: auto;
  margin-bottom: 0px;
`

const OrbitContainer = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OrbitingPlanet = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  height: auto; 
  width: auto;
  cursor: pointer;
`;

const planetConfigurations = [
  {
    image: JamCentral,
    marginLeft: '50px',
    marginTop: '50px'
  },
  {
    image: BBall,
    marginLeft: '35px',
    marginTop: '30px'
  },
  {
    image: LunarTunes,
    marginLeft: '45px',
    marginTop: '30px'
  },
  {
    image: JumpStation,
    marginLeft: '15px',
    marginTop: '15px'
  },
  {
    image: WarnerStudioStore,
    marginLeft: '5px',
    marginTop: '15px'
  },
  {
    image: BehindTheJam,
    marginLeft: '-20px'
  },
  {
    image: SiteMap,
    marginLeft: '-25px',
    marginTop: '-5px'
  },
  {
    image: StellarSouveniers,
    marginLeft: '-20px',
    marginTop: '-30px'
  },
  {
    image: JuniorJam,
    marginLeft: '-35px',
    marginTop: '-30px'
  },
  {
    image: TheLineup,
    marginLeft: '-10px'
  },{
    image: PressBoxShuttle,
    marginLeft: '17px',
    marginTop:'10px'
  }
];

const MainOrbit = () => {
  const planetCount = 11;
  const orbitRadiusX = 200;
  const orbitRadiusY = 200;
  const orbitAngleIncrement = 360 / planetCount;

  const planets = [];
  for (let i = 0; i < planetCount; i++) {
    const orbitAngle = i * orbitAngleIncrement + 250;
    const planetX = orbitRadiusX * Math.cos(orbitAngle * Math.PI / 180);
    const planetY = orbitRadiusY * Math.sin(orbitAngle * Math.PI / 180);

    planets.push(
      <OrbitingPlanet
        key={i}
        src={planetConfigurations[i % planetConfigurations.length].image}
        style={{ 
          top: planetY, 
          left: planetX,
          marginLeft: planetConfigurations[i % planetConfigurations.length].marginLeft,
          marginTop: planetConfigurations[i % planetConfigurations.length].marginTop,
           }}
      />,
    );
  }

  return (
    <Container>
      <SpaceJamLogoContainer>
        <StyledSpaceJamLogo src={SpaceJamLogo} />
        <OrbitContainer>
          {planets}
        </OrbitContainer>
      </SpaceJamLogoContainer>
    </Container>
  );
};


export default MainOrbit;
