import { Header } from "../components/Header";
import styled from "styled-components";
import { Piechart } from "../components/Piechart";
import { useNavigate } from "react-router-dom";
import { apiWrongQ } from "../apis/apiWrongQ";
import { useEffect, useState } from "react";
import { apiMypage } from "../apis/apiMypage";

export const Mypage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    { id: '정답', value: 30},
    { id: '오답', value: 70},
]);
  const showWrongQsbtnHandle = () => {
    const wrongs = apiWrongQ();
    console.log(wrongs);
    navigate('/wrongs');
  }

  const logoutbtnHandle = () => {
    navigate('/');
  }

  const getMypageInfo = async () => {
    const mypageInfo = await apiMypage()
    setData([
      { id: '정답', value: parseInt(Math.round((mypageInfo.correct_answers / 15) * 100))},
      { id: '오답', value: parseInt(Math.round((mypageInfo.incorrect_answers / 15) * 100))},
  ]);
  }

  useEffect(() => {
    getMypageInfo();
  }, [])


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
            <ShowWQbtn onClick={showWrongQsbtnHandle}>
                틀린 문제 다시보기
                <Icon/>
            </ShowWQbtn>
            <Box4>
              <Box2>
                  <Intertext3>끝내시려면 로그아웃 하세요</Intertext3>
                  <Logoutbtn onClick={logoutbtnHandle}>로그아웃</Logoutbtn>
                </Box2>
                <Text>문제 오류 신고 pjylove08@dsm.hs.kr</Text>
            </Box4>
          </Box1>
        </Container>
    </>
  )
}


const Container = styled.div`
background-color: #F4F4F4;
height: calc(100vh - 8.9vh);
width: 100vw;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 6.5vw;
box-sizing: border-box;
`

const Percentagebox = styled.div`
width: 39vw;
height: 76vh;
background-color: #fff;
display: flex;
border-radius: 1vw;
flex-direction: column;
align-items: flex-start;
`

const P = styled.p`
font-size: 2.7vh;
color: #787878;
font-weight: 600;
margin-left: 1vw;
white-space:nowrap;
`

const Percenttextbox = styled.div`
width: 25vw;
height: 15vh;
background: #FFFFFF;
box-shadow: inset 0px 0px 1vh rgba(0, 0, 0, 0.25);
border-radius: 1vh;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 2vw;
box-sizing: border-box;
gap: 1.3vw;
`

const Greentext = styled.p`
font-size: 2.3vh;
color: #5BFF57;
font-weight:700;
white-space:nowrap;
`

const Redtext = styled.p`
font-size: 2.3vh;
color: #FF3263;
font-weight:700;
white-space:nowrap;
`

const ShowWQbtn = styled.button`
width: 22.8vw;
height: 10.9vh;
background: #FFFFFF;
border-radius: 0.7vw;
display: flex;
justify-content: center;
align-items: center;
gap: 0.7vw;
font-size: 3.5vh;
letter-spacing: -0.32%;
color: #50555C;
font-weight: 700;
border: none;
cursor: pointer;
white-space:nowrap;

&:focus {
  border: none;
  outline: none;
}
`

const Intertext1 = styled.h1`
font-size: 4vh;
letter-spacing: -0.32%;
white-space:nowrap;
`

const Intertext3 = styled.h1`
font-weight: 500;
font-size: 2.8vh;
letter-spacing: -0.32%;
color: #999999;
white-space:nowrap;
`

const Logoutbtn = styled.h1`
font-size: 2.75vh;
letter-spacing: -0.32%;
font-weight: 500;
cursor: pointer;
white-space:nowrap;
`

const Text = styled.p`
font-size: 1.4vh;
line-height: 0.1vh;
letter-spacing: -0.32%;
color: #6C6B6B;
white-space:nowrap;
`

const PercentText = styled.p`
font-size: 2vh;
line-height: 1.1vh;
letter-spacing: -0.32%;
font-weight: 700;
`

const Icon = styled.img.attrs({
  src: "/images/again.svg",
  alt: "다시보기 이미지",
})`
  height: 4vh;
`

const Box = styled.div`
margin-top: 0.1vh;
display: flex;
flex-direction: column;
justify-content: center;
`

const Box1 = styled.div`
margin-right: 7vw;
display: flex;
flex-direction: column;
gap: 3vh;
align-items: center;
`

const Box2 = styled.div`
  display: flex;
  gap: 1.3vw;
`

const Box3 = styled.div`
  
`

const Box4 = styled.div`
  width: 26vw;
  display: flex;
  flex-wrap: wrap;
  padding-left: 2vw;
  box-sizing: border-box;
`