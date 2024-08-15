import styled from "styled-components"
import { Header } from "../components/Header"
import { Nextbtn } from "../components/Nextbtn"
import { Option } from "../components/Option"

export const Explainpage = () => {

  const Questions = {
    "contents": "π를 제대로 기술한 것은?",
    "options": [
        {
            "text": "π는 원주율로, 원의 둘레와 지름의 비율입니다."
        },
        {
            "text": "π는 삼각형의 내각 합계입니다."
        },
        {
            "text": "π는 자연수 3과 같습니다."
        },
        {
            "text": "π는 원의 반지름의 제곱에 비례합니다."
        }
    ]
}

  return(
    <Container>
      <Header/>
      <Contentboxcontainer>
        <Contentbox>
          {Questions.contents}
        </Contentbox>
      </Contentboxcontainer>
      <Explaincontainer>
        <Option option={Questions.options[1]}/>
        <Explainbox>
          그거 아닌데 뭔소리징
        </Explainbox>
      </Explaincontainer>
      <Buttoncontainer>
        <Nextbtn/>
      </Buttoncontainer>
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  background-color: #f4f4f4;
  height: 100vh;
`

const Contentboxcontainer = styled.div`
  box-sizing: border-box;
  height: 25vh;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contentbox = styled.div`
width: 1200px;
height: 100px;
background: #FFFFFF;
box-shadow: inset 0px 0px 10px rgba(103, 103, 103, 0.25);
border-radius: 10px;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
`

const Explaincontainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 65px - 40vh);
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 50px;
`

const Explainbox = styled.div`
box-sizing: border-box;
width: 1190px;
height: 230px;
padding: 20px 25px;
background: #E4F9F3;
box-shadow: inset 0px 0px 10px rgba(103, 103, 103, 0.25);
border-radius: 10px;
font-size: 20px;
font-weight: 400;
`

const Buttoncontainer = styled.div`
  box-sizing: border-box;
  height: 109px;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 180px;
`