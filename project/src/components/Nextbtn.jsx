import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Nextbtn = ({
  Qnum,
  onNextQ,
  WQlength,
  onNextWQ,
  WQnum,
  qModalState,
  setQModalState,
  onShowEXbtn
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const nextQuestion = () => {
    if (pathname.includes("question")) {
      if (Qnum < 14) {
        if(localStorage.getItem("next") == "ing"){
          localStorage.setItem("next", false);
        }
        onNextQ(++Qnum);
        onShowEXbtn(false);
      } else {
        setQModalState(true);
      }
    } else if (pathname.includes("wrongs")) {
      if (WQnum < WQlength - 1) {
        onNextWQ(++WQnum);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (pathname.includes("explain")) {;
      navigate("/question");
      localStorage.setItem("next", true);
    }
  };

  const onNextClick = () => {
    nextQuestion();
  };

  return <Container onClick={onNextClick}>다음 문제</Container>;
};

const Container = styled.button`
  box-sizing: border-box;
  width: 5.9vw;
  height: 4.7vh;
  background-color: #265cff;
  border-radius: 0.5vh;
  color: #fff;
  border: none;
  font-size: 1.8vh;
  cursor: pointer;
  white-space: nowrap;
  min-width: 60px;

  &:focus {
    border: none;
    outline: none;
  }
`;
