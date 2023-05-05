import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin-top: 250px;
  margin-bottom:15px;
  font-size:13px;
  font-family:'Times New Roman';
`

const NavLink = styled.span`
    color: #FF4C4C;
    text-decoration: underline;
    margin:12px;
    cursor:pointer;
`

const HomeNavBar = () => {
  return (
    <Container>
        <NavLink>Privacy Policy</NavLink>
        <NavLink>Terms</NavLink>
        <NavLink>Home</NavLink>
        <NavLink>AdChoices</NavLink>
    </Container>
  )
}

export default HomeNavBar