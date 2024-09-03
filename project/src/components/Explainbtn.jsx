import { useState } from "react"
import styled from "styled-components"

export const Explainbtn = ({ showEXbtn }) => {
  
  return(
    <Container display={showEXbtn}>
      해설
    </Container>
  )
}

const Container = styled.button`
  width: 3.5vw;
  height: 4.7vh;
  background: #00EDA6;
  border-radius: 0.5vh;
  color: #fff;
  border: none;
  font-size: 1.8vh;
  display: ${props => props.display ?  'block' : 'none'};
  cursor: pointer;

  &:focus {
  border: none;
  outline: none;
}
`