import { Header } from "../components/Header";
import styled from "styled-components";
import { Piechart } from "../components/Piechart";

export const Mypage = () => {

  const data = [
    { id: '정답', value: 70 },
    { id: '오답', value: 30 },
];


  return(
    <>
      <Header/>
        <Container>
          <Percentagebox>
            <P>나의 정답률</P>
            <Piechart data={data}></Piechart>
          </Percentagebox>
          <Box1>
            <Percenttextbox>
              <Box3>
                <Greentext>정답률</Greentext>
                <Redtext>오답률</Redtext>
              </Box3>
              <Box>
                <PercentText>{data[0].value}%</PercentText>
                <PercentText>{data[1].value}%</PercentText>
              </Box>
            </Percenttextbox>
            <Intertext1>틀린 문제를 다시 체크 해보세요</Intertext1>
            <ShowWQbtn>
                틀린 문제 다시보기
                <Icon/>
            </ShowWQbtn>
            <Box4>
              <Box2>
                  <Intertext3>끝내시려면 로그아웃 하세요</Intertext3>
                  <Logoutbtn>로그아웃</Logoutbtn>
                </Box2>
                <Text>문제 오류 신고 010-9382-0145</Text>
            </Box4>
          </Box1>
        </Container>
    </>
  )
}


const Container = styled.div`
background-color: #F4F4F4;
height: calc(100vh - 70px);
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 100px;
box-sizing: border-box;
`

const Percentagebox = styled.div`
width: 600px;
height: 550px;
background-color: #fff;
display: flex;
border-radius: 10px;
flex-direction: column;
align-items: flex-start;
`

const P = styled.p`
font-size: 20px;
line-height: 21px;
color: #787878;
font-weight: 600;
`

const Percenttextbox = styled.div`
width: 384px;
height: 110px;
background: #FFFFFF;
box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.25);
border-radius: 6px;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 30px;
box-sizing: border-box;
gap: 20px;
`

const Greentext = styled.p`
font-size: 17px;
color: #5BFF57;
line-height: 21px;
font-weight:800;
`

const Redtext = styled.p`
font-size: 17px;
color: #FF3263;
line-height: 21px;
font-weight:700;
`

const ShowWQbtn = styled.button`
width: 351px;
height: 80px;
background: #FFFFFF;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
font-size: 25px;
line-height: 21px;
letter-spacing: -0.32%;
color: #50555C;
font-weight: 700;
border: none;

&:focus {
  border: none;
  outline: none;
}
`

const Intertext1 = styled.h1`
font-size: 30px;
line-height: 21px;
letter-spacing: -0.32%;
`

const Intertext2 = styled.h1`
font-size: 25px;
line-height: 21px;
letter-spacing: -0.32%;
color: #50555C;
`

const Intertext3 = styled.h1`
font-weight: 500;
font-size: 20px;
line-height: 21px;
letter-spacing: -0.32%;
color: #999999;
`

const Logoutbtn = styled.h1`
font-size: 20px;
line-height: 21px;
letter-spacing: -0.32%;
font-weight: 500;
cursor: pointer;
`

const Text = styled.p`
font-size: 10px;
line-height: 1px;
letter-spacing: -0.32%;
color: #6C6B6B;
`

const PercentText = styled.p`
font-size: 15px;
line-height: 9px;
letter-spacing: -0.32%;
font-weight: 700;
`

const Icon = styled.img.attrs({
  src: "/images/again.svg",
  alt: "다시보기 이미지",
})`

`

const Box = styled.div`
margin-top: 3px;
display: flex;
flex-direction: column;
justify-content: center;
`

const Box1 = styled.div`
margin-right: 100px;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
`

const Box2 = styled.div`
  display: flex;
  gap: 20px;
`

const Box3 = styled.div`
  
`

const Box4 = styled.div`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 24px;
  box-sizing: border-box;
`