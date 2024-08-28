import styled from "styled-components"
import { Header } from "../components/Header"
import { Nextbtn } from "../components/Nextbtn"
import { Option } from "../components/Option"


export const WrongsQuestionPage = () => {

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
        <Option option={Questions.options[0]}/>
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
  height: 133vh;
  overflow-y: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &:-webkit-scrollbar{
    display: none;
  }
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
width: 78vw;
height: 15.7vh;
background: #FFFFFF;
box-shadow: inset 0px 0px 1.2vh rgba(103, 103, 103, 0.25);
border-radius: 1vh;
font-size: 2.75vh;
display: flex;
align-items: center;
justify-content: center;
`

const Explaincontainer = styled.div`
  box-sizing: border-box;
  height: 90vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 7vh;
`

const Explainbox = styled.div`
box-sizing: border-box;
width: 77.5vw;
height: 50vh;
padding: 2.7vh 1.6vw;
background: #E4F9F3;
box-shadow: inset 0px 0px 0.5vw rgba(103, 103, 103, 0.25);
border-radius: 1vw;
font-size: 2.8vh;
font-weight: 400;
`

const Buttoncontainer = styled.div`
  box-sizing: border-box;
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 11.7vw;
`