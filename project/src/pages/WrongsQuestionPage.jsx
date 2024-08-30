import styled from "styled-components"
import { Header } from "../components/Header"
import { Nextbtn } from "../components/Nextbtn"
import { Option } from "../components/Option"
import { useState } from "react"


export const WrongsQuestionPage = () => {

  const Questions = {
    "incorrect_answers": [
        {
            "contents": "π를 제대로 기술한 것은?",
            "commentary": "π는 원주율로, 원의 둘레와 지름의 비율입니다. 삼각형의 내각 합계나 자연수 3과는 관련이 없습니다.",
            "incorrect_answer": "π는 삼각형의 내각 합계입니다.",
            "correct_answer": "π는 원주율로, 원의 둘레와 지름의 비율입니다."
        },
        {
            "contents": "웹 페이지에서 사용자와의 상호작용을 실시간으로 처리하기 위해 주로 사용하는 기술은?",
            "commentary": "JavaScript는 웹 페이지에서 사용자와의 실시간 상호작용을 처리하는 데 가장 중요한 기술입니다. HTML과 CSS는 페이지의 구조와 스타일을 정의하며, SQL은 데이터베이스 쿼리에 사용됩니다.",
            "incorrect_answer": "HTML",
            "correct_answer": "JavaScript"
        },
        {
            "contents": "HTML에서 웹 페이지의 구조를 정의하는 태그는?",
            "commentary": "<div> 태그는 웹 페이지의 구조를 정의하는 데 자주 사용됩니다. <style>은 CSS 스타일을 정의하고, <script>는 JavaScript 코드를 포함하며, <form>은 사용자 입력을 처리하는 양식을 정의합니다.",
            "incorrect_answer": "<style>",
            "correct_answer": "<div>"
        },
        {
            "contents": "CSS에서 요소의 배경 색상을 지정하는 속성은?",
            "commentary": "CSS에서 요소의 배경 색상을 지정하는 속성은 'background-color'입니다. 'color'는 텍스트 색상을 지정하며, 'border'와 'padding'은 각각 테두리와 안쪽 여백을 정의합니다.",
            "incorrect_answer": "color",
            "correct_answer": "background-color"
        },
        {
            "contents": "React에서 상태 관리를 위해 사용하는 기본 훅은?",
            "commentary": "useState 훅은 React에서 상태 관리를 위해 기본적으로 사용되는 훅입니다. useEffect는 부수 효과를 관리하고, useContext는 컨텍스트 API와 함께 사용되며, useReducer는 복잡한 상태 로직을 처리할 때 유용합니다.",
            "incorrect_answer": "useEffect",
            "correct_answer": "useState"
        },
        {
            "contents": "RESTful API에서 데이터를 요청할 때 사용하는 HTTP 메서드는?",
            "commentary": "GET 메서드는 RESTful API에서 데이터를 요청할 때 사용됩니다. POST는 데이터를 생성하고, PUT은 데이터를 업데이트하며, DELETE는 데이터를 삭제하는 데 사용됩니다.",
            "incorrect_answer": "POST",
            "correct_answer": "GET"
        },
        {
            "contents": "데이터베이스에서 데이터를 삽입할 때 사용하는 SQL 명령어는?",
            "commentary": "INSERT INTO 명령어는 데이터베이스 테이블에 새로운 데이터를 삽입하는 데 사용됩니다. SELECT는 데이터를 조회하고, UPDATE는 데이터를 수정하며, DELETE는 데이터를 삭제합니다.",
            "incorrect_answer": "SELECT",
            "correct_answer": "INSERT INTO"
        },
        {
            "contents": "Node.js에서 비동기 작업을 처리할 때 주로 사용하는 방법은?",
            "commentary": "Node.js에서는 비동기 작업을 처리하기 위해 콜백 함수, 프라미스, async/await 등의 방법을 모두 사용할 수 있습니다. 콜백 함수는 가장 기본적인 방법이며, 프라미스와 async/await는 가독성을 높여줍니다.",
            "incorrect_answer": "콜백 함수",
            "correct_answer": "모든 답변이 맞다"
        },
        {
            "contents": "iOS 애플리케이션의 사용자 인터페이스를 설계하는 데 주로 사용하는 도구는?",
            "commentary": "iOS 애플리케이션의 UI 설계를 위해 주로 사용하는 도구는 Storyboard입니다. SwiftUI와 Interface Builder도 UI 설계에 사용되지만, Storyboard가 가장 널리 사용됩니다. Xcode는 개발 도구 자체입니다.",
            "incorrect_answer": "Xcode",
            "correct_answer": "Storyboard"
        },
        {
            "contents": "iOS에서 비동기 작업을 수행할 때 사용하는 클래스는?",
            "commentary": "URLSession은 iOS에서 비동기 네트워크 작업을 수행할 때 사용하는 클래스입니다. NSOperationQueue와 DispatchQueue는 비동기 작업을 관리하는 데 사용되지만, 네트워크 요청은 주로 URLSession으로 처리합니다.",
            "incorrect_answer": "NSOperationQueue",
            "correct_answer": "URLSession"
        },
        {
            "contents": "Swift에서 변수의 값이 변경되지 않는 상수를 정의할 때 사용하는 키워드는?",
            "commentary": "Swift에서 상수를 정의할 때 사용하는 키워드는 'let'입니다. 'var'는 변경 가능한 변수를 정의할 때 사용되며, 'const'와 'final'은 다른 언어에서 사용하는 키워드입니다.",
            "incorrect_answer": "var",
            "correct_answer": "let"
        },
        {
            "contents": "Flutter에서 UI를 구성하는 기본적인 위젯은?",
            "commentary": "Flutter에서 UI를 구성하는 기본적인 위젯은 'Widget'입니다. Container는 레이아웃을 구성하는 위젯이며, Element는 내부 구현체, State는 상태를 관리하는 데 사용됩니다.",
            "incorrect_answer": "Container",
            "correct_answer": "Widget"
        },
        {
            "contents": "Flutter에서 상태 관리를 위해 자주 사용되는 패턴은?",
            "commentary": "Flutter에서 상태 관리를 위해 자주 사용되는 패턴으로는 Provider, BLoC, Redux 등이 있습니다. InheritedWidget은 상태 관리의 기초를 이루지만, 직접 사용하기보다는 Provider 등의 패턴을 활용하는 것이 일반적입니다.",
            "incorrect_answer": "InheritedWidget",
            "correct_answer": "Provider"
        },
        {
            "contents": "Flutter에서 애니메이션을 간단히 구현할 때 사용하는 클래스는?",
            "commentary": "Flutter에서 애니메이션을 간단히 구현할 때 'AnimatedBuilder'를 자주 사용합니다. AnimationController는 애니메이션을 제어하고, Tween은 애니메이션의 중간 단계를 정의하며, AnimatedWidget은 위젯에 애니메이션을 추가하는 데 사용됩니다.",
            "incorrect_answer": "Tween",
            "correct_answer": "AnimatedBuilder"
        },
        {
            "contents": "JavaScript에서 변수를 선언할 때 사용하지 않는 키워드는?",
            "commentary": "JavaScript에서 변수를 선언할 때 사용하는 키워드는 'var', 'let', 'const'입니다. 'int'는 다른 프로그래밍 언어에서 사용되는 데이터 타입으로, JavaScript에서는 변수를 선언할 때 사용하지 않습니다.",
            "incorrect_answer": "int",
            "correct_answer": "let"
        }
    ]
}



  return(
    <Container>
      <Header/>
      <Contentboxcontainer>
        <Contentbox>
          {Questions.incorrect_answers[0].contents}
        </Contentbox>
      </Contentboxcontainer>
      <Explaincontainer>
        <Option option={Questions.incorrect_answers[0].incorrect_answer} rw={false}/>
        <Option option={Questions.incorrect_answers[0].correct_answer} rw={true}/>
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