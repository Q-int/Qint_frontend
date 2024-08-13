import styled from "styled-components";
import { Header } from "../components/Header";

export const  Main = () => {

  return (
    <Container>
      {<Header/>}
      <Headimg></Headimg>
      <Mainbox>
        <Box1>
          <Logobox>
            <Logo1></Logo1>
            <Logo2></Logo2>
          </Logobox>
          <Text>기술 면접 대비 문제 풀어보고,<br/>
                개발자 기술 면접 준비하기!
          </Text>
        </Box1>
        <Startbtn>시작하기</Startbtn>
      </Mainbox>
    </Container>
  )
}

export default Main;

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #fff;
`

const Headimg = styled.img.attrs({
  src: "/images/headerimg.jpg",
  alt: "이미지",
})`
  height: 129.5px;
`
const Logobox = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: flex-start;
align-items: flex-start;
`

const Mainbox = styled.div`
  height: 523px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  text-align: left;
`

const Logo1 = styled.img.attrs({
  src: "/images/Q-int.svg",
  alt: "로고",
})`
  height: 80px;
`

const Logo2 = styled.img.attrs({
src: "/images/Quick interview.svg",
alt: "Quick interview",
})`
font-size: 40px;
color: #00EDA6;
`

const Text = styled.p`
font-size: 40px;
text-align: left;
font-family: pretendard;
font-weight: 900;
`

const Startbtn = styled.button`
width: 350px;
height: 60px;
border: none;
background: #00EDA6;
box-shadow: 0px 4px 4px rgba(158, 158, 158, 0.25);
border-radius: 30px;
font-size: 22px;
cursor: pointer;
margin-top: 370px;
margin-right: 130px;

&:focus {
  border: none;
  outline: none;
}
`
const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 70px;
  margin-left: 100px;
`