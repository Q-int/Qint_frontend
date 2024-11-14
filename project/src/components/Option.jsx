import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { apiGrading } from "../apis/apiGrading";

export const Option = ({
  option,
  mode,
  id,
  questionId,
  selected,
  selectedOption,
  Qnum,
  EXQ,
  onShowEXbtn,
  onEXQ,
  isGrading,
  onGrading,
}) => {
  const [rw, setRw] = useState(undefined);
  const [isClicked, setIsClicked] = useState(undefined);
  const { pathname } = useLocation();

  const [Question, setQuestion] = useState({
		"answer_text" : "3.1415926535...",
		"commentay" : "어쩌구 저쩌구 해서 쨌든 그냥 니가 틀리고 내가 맞음 어쩔팁이",
		"is_correct" : true
});

  const clickHandle = () => {
    if (pathname.includes("question")) {
      if (isClicked) {
        setQuestion(apiGrading(questionId, id));
        if(Question.is_correct){
          setRw(true);
        }
        onShowEXbtn(true);
        onEXQ(Question);
        onGrading(true);
      } else if(!isGrading){
        setIsClicked(true);
        selected(id);
      }
    }
  };

  useEffect(() => {
    if (isClicked && selectedOption != id) {
      setIsClicked(false);
    }
  }, [selectedOption]);

  useEffect(() => {
    setIsClicked(false);
  }, [Qnum]);

  useEffect(() => {
    if(pathname.includes('explain')) {
      setRw(true);
    }
    if(isGrading){
      setRw(EXQ.is_correct);
    }
  }, [pathname, isGrading, EXQ])

  return (
    <Container
      $mode={mode}
      $rw={rw}
      $isClick={isClicked}
      $selectedOption={selectedOption}
      onClick={clickHandle}
      id={id}
    >
      {typeof option === "object" ? option.text : option}
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  width: 77vw;
  height: 10.6vh;
  background: ${(props) =>
    props.$isClick && props.$selectedOption == props.id
      ? "#C7FFEF"
      : "#E4F9F3"};
  border-radius: 1vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2.9vw;
  font-size: 2.7vh;
  font-weight: 400;
  outline: ${(props) => {
    if (props.$mode) return "none";
    if (props.$rw === true) return "0.2vw solid #68F665";
    if (props.$rw === false) return "0.2vw solid #FF3951";
  }};
`;
