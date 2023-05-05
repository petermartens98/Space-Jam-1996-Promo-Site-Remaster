import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  position: relative;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin-top: 10px;
  color: red;
  font-size:13px;
  font-family:'Times New Roman';
`
const HomeFooter = () => {

  return (
    <Container>
        SPACE JAM, characters, names, and all related
        <br />
        indicia are trademarks of Warner Bros. © 1996
   </Container>
  )
}

export default HomeFooter