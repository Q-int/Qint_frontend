import styled from "styled-components"

export const Startbtn = ({clicked}) => {
  return (
    <Container onClick={clicked}>
      시작하기
    </Container>
  )
}

const Container = styled.div`
margin-top: 100px;
box-sizing: border-box;
width: 24vw;
height: 6vh;
background: #00EDA6;
border-radius: 1vh;
font-size: 14px;
font-weight: 500;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;

&:focus {
  border: none;
  outline: none;
}
`