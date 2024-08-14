import styled from "styled-components"

export const Category =  ({src, alt, title, text}) => {
  return (

  <Container>
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
  height: 260px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 10px;
  overflow: hidden;
  background-color:#fff;
`

const Imagecover = styled.div`
  width: 100%;
  height: 170px;
  border-bottom: 1px solid #000;
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
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`

const Text = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin: 0;
`
