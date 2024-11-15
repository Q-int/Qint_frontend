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
  setQInfo,
  QInfo,
  getQ,
}) => {
  const [rw, setRw] = useState(undefined);
  const [isClicked, setIsClicked] = useState(undefined);
  const { pathname } = useLocation();

  const [Question, setQuestion] = useState();

const clickHandle = async () => {
  if (pathname.includes("question")) {
    if (isClicked) {
      const Q = await apiGrading(questionId, id);
      setQuestion(Q);
      setIsClicked(false);
      onShowEXbtn(true);
      onEXQ(Q); // 최신 Q를 전달하여 EXQ 업데이트
      setQInfo(Q.answer_text);
      console.log(123);
      if(getQ() != option.text){
        setRw(false);
      }
      onGrading(true);
    } else if (!isGrading) {
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
    setRw(undefined);
  }, [Qnum]);

  useEffect(() => {
    if(pathname.includes('explain')) {
      setRw(true);
    }
  }, [pathname, isGrading, EXQ])

  useEffect(() => {
    if(isGrading){
      const gQ = getQ();
      console.log(option.text);
      console.log(gQ);
      if(gQ == option.text){
        setRw(true);
        // console.log(123);
      } else {
        // console.log(789);
      }
    }
  }, [EXQ]);

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
