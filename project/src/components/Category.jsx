import { useState } from "react";
import styled from "styled-components"

export const Category =  ({src, alt, title, text, onSelect}) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleSelect = () => {
    if(isClicked) {
      onSelect(false);
      setIsClicked(false);
    } else {
      onSelect(true);
      setIsClicked(true);
    }
  }

  return (

  <Container onClick={handleSelect} >
    <Imagecover>
      <Categoryimg src={src} alt={alt} />
    </Imagecover>
    <Textbox>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Textbox>
  </Container>
  )
}


const Container = styled.div`
  width: 18vw;
  height: 35.7vh;
  box-sizing: border-box;
  border: 0.01vw solid #000;
  border-radius: 1.5vh;
  overflow: hidden;
  background-color:#fff;
`

const Imagecover = styled.div`
  width: 100%;
  height: 24vh;
  border-bottom: 0.01vw solid #000;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Categoryimg = styled.img`
  width: 100%;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  object-position: center;
`

const Textbox = styled.div`
  width: 18vw;
  height: 8.6vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.6vw;
`

const Title = styled.p`
  font-size: 2.5vh;
  font-weight: 500;
  margin: 0;
`

const Text = styled.p`
  font-size: 1.8vh;
  font-weight: 500;
  margin: 0;
`
