import styled from "styled-components"
import { Header } from "../components/Header"
import { Nextbtn } from "../components/Nextbtn"
import { Option } from "../components/Option"

export const Explainpage = () => {

  const Questions = {
		"answer_text" : "3.1415926535...",
		"commentay" : "어쩌구 저쩌구 해서 쨌든 그냥 니가 틀리고 내가 맞음 어쩔팁이",
		"is_correct" : true
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
  height: calc(100vh - 8.9vh - 40vh);
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 7vh;
`

const Explainbox = styled.div`
box-sizing: border-box;
width: 77.5vw;
height: 31.5vh;
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