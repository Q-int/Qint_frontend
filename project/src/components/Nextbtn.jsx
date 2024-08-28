import styled from "styled-components"

export const Nextbtn = () => {
  return(
    <Container>다음 문제</Container>
  )
}

const Container = styled.button`
  box-sizing: border-box;
  width: 5.9vw;
  height: 4.7vh;
  background-color: #265CFF; 
  border-radius: 0.5vh;
  color: #fff;
  border: none;
  font-size: 1.8vh;
  cursor: pointer;

  &:focus {
  border: none;
  outline: none;
}
`