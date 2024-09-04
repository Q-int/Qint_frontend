import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components"

export const Nextbtn = ({Qnum, onNextQ, WQlength, onNextWQ, WQnum }) => {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const nextQuestion = () => {
    if(pathname.includes('question')){
      if(Qnum < 14){
        onNextQ(++Qnum);
        localStorage.setItem("Qnum", Qnum);
      } else {
        navigate('/explain');//이거 지우고 모달 띄우는 기능 추가
      }
    } else if(pathname.includes('wrongs')){
      if(WQnum < WQlength - 1){
        onNextWQ(++WQnum);
        window.scrollTo({top: 0, behavior: "smooth"});
      }
    } else if(pathname.includes('explain')){
      const nQ = parseInt(localStorage.getItem("Qnum"));
      navigate('/question', {state: {nQ : nQ}});
    }
  }


  const onNextClick = () => {
  nextQuestion();
  }

  return(
    <Container onClick={onNextClick}>다음 문제</Container>
  )
}

const Container = styled.button`
  box-sizing: border-box;
  width: 5.9vw;
  height: 4.7vh;
  background-color: #265CFF; 
  border-radius: 0.5vh;
  color: #fff;
  border: none;
  font-size: 1.8vh;
  cursor: pointer;

  &:focus {
  border: none;
  outline: none;
}
`