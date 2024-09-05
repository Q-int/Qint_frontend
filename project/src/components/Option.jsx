import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export const Option = ({
  option,
  mode,
  rw,
  id,
  selected,
  selectedOption,
  Qnum,
  showEXbtn,
  onShowEXbtn,
  onEXQ,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const { pathname } = useLocation();

  const Question = {
    answer_text: "3.1415926535...",
    commentay: "어쩌구 저쩌구 해서 쨌든 그냥 니가 틀리고 내가 맞음",
    is_correct: true,
  };

  const clickHandle = () => {
    if (pathname.includes("question")) {
      if (isClicked) {
        onShowEXbtn(true);
        onEXQ(Question);
      } else {
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

  return (
    <Container
      $mode={mode}
      $rw={rw}
      $isClick={isClicked}
      $selectedOption={selectedOption}
      onClick={clickHandle}
      id={id}
    >
      {mode ? option.text : option}
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
  border: ${(props) =>
    props.$mode ? "none" : props.$rw ? "1px solid green" : "1px solid red"};
`;
