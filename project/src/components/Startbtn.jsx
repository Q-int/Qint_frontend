import styled from "styled-components"

export const Startbtn = ({onClick}) => {
  return (
    <Container onClick={onClick}>
      시작하기
    </Container>
  )
}

const Container = styled.button`
margin-top: 100px;
box-sizing: border-box;
width: 24vw;
height: 6vh;
background: #00EDA6;
border-radius: 1vh;
font-size: 14px;
font-weight: 500;
color: #fff;
border: none;
cursor: pointer;
`