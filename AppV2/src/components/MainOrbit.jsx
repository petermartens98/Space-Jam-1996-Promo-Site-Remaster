import React, { useEffect, useState } from 'react';
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

  opacity: 0.8;
  animation: opacity 1s ease-in-out infinite alternate;
  @keyframes opacity {
    from { opacity: 0.; }
    to { opacity: 1; }
  }
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
  opacity: 0.8;
  &:hover{
    transition: 0.3s ease-in-out;
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 0px 5px 5px rgba(255, 255, 255, 0.3);
    border-radius:10px;
    transform: translate(-50%, -100%) scale(1.1);
  }
`;


const planetConfigurations = [
  {
    image: JamCentral,
    marginLeft: '50px',
    marginTop: '50px',
    link: '/jam-central'

  },
  {
    image: BBall,
    marginLeft: '40px',
    marginTop: '25px'
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
    marginTop: '15px',
    link: 'https://wbshop.com/pages/looney-tunes'
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovered) {
        setRotationAngle(angle => (angle + 0.7) % 360);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [isHovered]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let orbitRadiusX;
  let orbitRadiusY;
  const planetCount = 11;

  if (screenWidth > 520){
    orbitRadiusX = 240;
    orbitRadiusY = 167;
  } else {
    orbitRadiusX = 165;
    orbitRadiusY = 230;
  }

  const orbitAngleIncrement = 360 / planetCount;

  const planets = [];

  for (let i = 0; i < planetCount; i++) {
    const orbitAngle = i * orbitAngleIncrement + 250;
    const planetX = orbitRadiusX * Math.cos((orbitAngle + rotationAngle) * Math.PI / 180);
    const planetY = orbitRadiusY * Math.sin((orbitAngle + rotationAngle) * Math.PI / 180);

    const configuration = planetConfigurations[i % planetConfigurations.length];
    const link = configuration.link || '#';
    const style = { 
      top: planetY, 
      left: planetX,
    };

    planets.push(
      <a key={i} href={link}>
        <OrbitingPlanet
          src={configuration.image}
          style={style}
        />
      </a>,
    );
  }

  return (
    <Container>
      <SpaceJamLogoContainer>
        <StyledSpaceJamLogo src={SpaceJamLogo} />
        <OrbitContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {planets}
        </OrbitContainer>
      </SpaceJamLogoContainer>
    </Container>
  );
};

export default MainOrbit;

