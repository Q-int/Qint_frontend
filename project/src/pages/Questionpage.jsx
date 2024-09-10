import styled from "styled-components";
import { Header } from "../components/Header";
import { Option } from "../components/Option";
import { Nextbtn } from "../components/Nextbtn";
import { useEffect, useRef, useState } from "react";
import { Explainbtn } from "../components/Explainbtn";
import { useLocation } from "react-router-dom";
import { ScoreCheckPage } from "./ScoreCheckPage";

export const Questionpage = () => {
  const location = useLocation();

  const [Qnum, setQnum] = useState(0);
  const [showExplainBtn, setShowExplainBtn] = useState(false);
  const [EXQ, setEXQ] = useState();
  const [qModalState, setQModalState] = useState(false);
  const [isGrading, setIsGrading] = useState(false);

  const Questions = [
    {
      question_id: 1,
      contents: "π는 제대로 기술한 것은?",
      options: [
        {
          answer_id: 1,
          text: "π는 원주율로, 원의 둘레와 지름의 비율입니다.",
        },
        {
          answer_id: 2,
          text: "π는 삼각형의 내각 합계입니다.",
        },
        {
          answer_id: 3,
          text: "π는 자연수 3과 같습니다.",
        },
        {
          answer_id: 4,
          text: "π는 원의 반지름의 제곱에 비례합니다.",
        },
      ],
    },
    {
      question_id: 2,
      contents:
        "웹 페이지에서 사용자와의 상호작용을 실시간으로 처리하기 위해 주로 사용하는 기술은?",
      options: [
        {
          answer_id: 1,
          text: "HTML",
        },
        {
          answer_id: 2,
          text: "CSS",
        },
        {
          answer_id: 3,
          text: "JavaScript",
        },
        {
          answer_id: 4,
          text: "SQL",
        },
      ],
    },
    {
      question_id: 3,
      contents: "HTML에서 웹 페이지의 구조를 정의하는 태그는?",
      options: [
        {
          answer_id: 1,
          text: "<div>",
        },
        {
          answer_id: 2,
          text: "<style>",
        },
        {
          answer_id: 3,
          text: "<script>",
        },
        {
          answer_id: 4,
          text: "<form>",
        },
      ],
    },
    {
      question_id: 4,
      contents: "CSS에서 요소의 배경 색상을 지정하는 속성은?",
      options: [
        {
          answer_id: 1,
          text: "border",
        },
        {
          answer_id: 2,
          text: "background-color",
        },
        {
          answer_id: 3,
          text: "color",
        },
        {
          answer_id: 4,
          text: "padding",
        },
      ],
    },
    {
      question_id: 5,
      contents: "React에서 상태 관리를 위해 사용하는 기본 훅은?",
      options: [
        {
          answer_id: 1,
          text: "useEffect",
        },
        {
          answer_id: 2,
          text: "useState",
        },
        {
          answer_id: 3,
          text: "useContext",
        },
        {
          answer_id: 4,
          text: "useReducer",
        },
      ],
    },
    {
      question_id: 6,
      contents: "RESTful API에서 데이터를 요청할 때 사용하는 HTTP 메서드는?",
      options: [
        {
          answer_id: 1,
          text: "GET",
        },
        {
          answer_id: 2,
          text: "POST",
        },
        {
          answer_id: 3,
          text: "PUT",
        },
        {
          answer_id: 4,
          text: "DELETE",
        },
      ],
    },
    {
      question_id: 7,
      contents: "데이터베이스에서 데이터를 삽입할 때 사용하는 SQL 명령어는?",
      options: [
        {
          answer_id: 1,
          text: "INSERT INTO",
        },
        {
          answer_id: 2,
          text: "SELECT",
        },
        {
          answer_id: 3,
          text: "UPDATE",
        },
        {
          answer_id: 4,
          text: "DELETE",
        },
      ],
    },
    {
      question_id: 8,
      contents: "Node.js에서 비동기 작업을 처리할 때 주로 사용하는 방법은?",
      options: [
        {
          answer_id: 1,
          text: "콜백 함수",
        },
        {
          answer_id: 2,
          text: "프라미스",
        },
        {
          answer_id: 3,
          text: "async/await",
        },
        {
          answer_id: 4,
          text: "집가고싶다",
        },
      ],
    },
    {
      question_id: 9,
      contents:
        "iOS 애플리케이션의 사용자 인터페이스를 설계하는 데 주로 사용하는 도구는?",
      options: [
        {
          answer_id: 1,
          text: "Storyboard",
        },
        {
          answer_id: 2,
          text: "Xcode",
        },
        {
          answer_id: 3,
          text: "SwiftUI",
        },
        {
          answer_id: 4,
          text: "Interface Builder",
        },
      ],
    },
    {
      question_id: 10,
      contents: "iOS에서 비동기 작업을 수행할 때 사용하는 클래스는?",
      options: [
        {
          answer_id: 1,
          text: "URLSession",
        },
        {
          answer_id: 2,
          text: "NSOperationQueue",
        },
        {
          answer_id: 3,
          text: "DispatchQueue",
        },
        {
          answer_id: 4,
          text: "NSURLConnection",
        },
      ],
    },
    {
      question_id: 11,
      contents:
        "Swift에서 변수의 값이 변경되지 않는 상수를 정의할 때 사용하는 키워드는?",
      options: [
        {
          answer_id: 1,
          text: "let",
        },
        {
          answer_id: 2,
          text: "var",
        },
        {
          answer_id: 3,
          text: "const",
        },
        {
          answer_id: 4,
          text: "final",
        },
      ],
    },
    {
      question_id: 12,
      contents: "Flutter에서 UI를 구성하는 기본적인 위젯은?",
      options: [
        {
          answer_id: 1,
          text: "Widget",
        },
        {
          answer_id: 2,
          text: "Container",
        },
        {
          answer_id: 3,
          text: "Element",
        },
        {
          answer_id: 4,
          text: "State",
        },
      ],
    },
    {
      question_id: 13,
      contents: "Flutter에서 상태 관리를 위해 자주 사용되는 패턴은?",
      options: [
        {
          answer_id: 1,
          text: "InheritedWidget",
        },
        {
          answer_id: 2,
          text: "Provider",
        },
        {
          answer_id: 3,
          text: "BLoC",
        },
        {
          answer_id: 4,
          text: "Redux",
        },
      ],
    },
    {
      question_id: 14,
      contents: "Flutter에서 애니메이션을 간단히 구현할 때 사용하는 클래스는?",
      options: [
        {
          answer_id: 1,
          text: "AnimationController",
        },
        {
          answer_id: 2,
          text: "AnimatedBuilder",
        },
        {
          answer_id: 3,
          text: "Tween",
        },
        {
          answer_id: 4,
          text: "AnimatedWidget",
        },
      ],
    },
    {
      question_id: 15,
      contents: "집가고싶다",
      options: [
        {
          answer_id: 1,
          text: "집",
        },
        {
          answer_id: 2,
          text: "집",
        },
        {
          answer_id: 3,
          text: "집",
        },
        {
          answer_id: 4,
          text: "집",
        },
      ],
    },
  ];

  const mode = true;

  const [selectedOption, setSelectedOption] = useState(undefined);
  const optionSelect = (n) => {
    setSelectedOption(n);
  };

  const nextQuestion = (n) => {
    setQnum(n);
  };

  const onShowEXbtn = (tf) => {
    setShowExplainBtn(tf);
  };

  const onEXQ = (Q) => {
    setEXQ(Q);
  };

  const onGrading = (tf) => {
    setIsGrading(tf);
  }

  useEffect(() => {
    if (localStorage.getItem("next") == "true") {
      setQnum(parseInt(localStorage.getItem("Qnum")) + 1);
      localStorage.setItem("next", false);
    } else if(localStorage.getItem("next") == "ing") {
      setQnum(parseInt(localStorage.getItem("Qnum")))
    }
  });
  useEffect(() => {
    setIsGrading(false);
  }, [Qnum])

  return (
    <>
      <Header />
      <Conrainer>
        <Contentboxcontainer>
          <Contentbox>{Questions[Qnum].contents}</Contentbox>
          <QnumText>{Qnum + 1}/15</QnumText>
        </Contentboxcontainer>
        <Optionscontainer>
          {Questions[Qnum].options.map((option, index) => (
            <Option
              key={index}
              option={option}
              mode={mode}
              id={index}
              selected={optionSelect}
              selectedOption={selectedOption}
              Qnum={Qnum}
              onShowEXbtn={onShowEXbtn}
              onEXQ={onEXQ}
              isGrading={isGrading}
              onGrading={onGrading}
            />
          ))}
        </Optionscontainer>
        <Buttoncontainer>
          <Explainbtn showEXbtn={showExplainBtn} EXQ={EXQ} Qnum={Qnum} />
          <Nextbtn
            Qnum={Qnum}
            onNextQ={nextQuestion}
            qModalState={qModalState}
            setQModalState={setQModalState}
            onShowEXbtn={onShowEXbtn}
          />
        </Buttoncontainer>
        {qModalState && (
          <ModalOverlay>
            <ScoreCheckPage />
          </ModalOverlay>
        )}
      </Conrainer>
    </>
  );
};

const Conrainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 8.9vh);
  background-color: #f4f4f4;
`;

const Contentboxcontainer = styled.div`
  box-sizing: border-box;
  height: 25vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vh;
`;

const Contentbox = styled.div`
box-sizing: border-box;
  width: 78vw;
  height: 15.7vh;
  background: #ffffff;
  box-shadow: inset 0px 0px 1.2vh rgba(103, 103, 103, 0.25);
  border-radius: 1vh;
  font-size: 2.75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2vw;
`;

const Optionscontainer = styled.div`
  box-sizing: border-box;
  height: calc(100vh - 8.9vh - 40vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
`;

const Buttoncontainer = styled.div`
  box-sizing: border-box;
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  padding-right: 11.7vw;
  padding-top: 3.9vh;
  gap: 0.7vw;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const QnumText = styled.p`
  margin: 0;
  font-size: 18px;
  color: #50555C;
  font-weight: 400;
`;
