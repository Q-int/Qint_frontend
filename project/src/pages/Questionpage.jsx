import styled from "styled-components"
import { Header } from "../components/Header"
import { Option } from "../components/Option"
import { Nextbtn } from "../components/Nextbtn"

export const Questionpage = () => {

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
    <>
    <Header/>
    <Conrainer>
      <Contentboxcontainer>
        <Contentbox>
          {Questions.contents}
        </Contentbox>
      </Contentboxcontainer>
      <Optionscontainer>
        {Questions.options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </Optionscontainer>
      <Buttoncontainer>
        <Nextbtn/>
      </Buttoncontainer>
    </Conrainer>
    </>
  )
}

const Conrainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 8.9vh);
  background-color: #f4f4f4;
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

const Optionscontainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 8.9vh - 40vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
`

const Buttoncontainer = styled.div`
  box-sizing: border-box;
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 11.7vw;
  padding-top: 3.9vh;
`