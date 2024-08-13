import styled from "styled-components"

export const Nextbtn = () => {
  return(
    <Container>다음 문제</Container>
  )
}

const Container = styled.button`
  box-sizing: border-box;
  width: 90px;
  height: 35px;
  background-color: #265CFF; 
  border-radius: 5px;
  color: #fff;
  border: none;
  font-size: 14px;

  &:focus {
  border: none;
  outline: none;
}
`