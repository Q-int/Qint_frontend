import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { apiSkip } from "../apis/apiSkip";

export const Nextbtn = ({
  Qnum,
  onNextQ,
  WQlength,
  onNextWQ,
  WQnum,
  qModalState,
  setIsModal,
  setQModalState,
  onShowEXbtn,
  grading,
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [grade, setGrade] = useState(false);
  const [rG, setRG] = useState(false);

  useEffect(() => {
    setGrade(grading);
    if(grade){
      setRG(true);
    }
  }, [grading]);
  
  useEffect(() => {
    console.log("현재 grade:", grade); // grade 상태가 바뀔 때마다 최신 상태 출력
  }, [grade]);

  const nextQuestion = () => {
    if (pathname.includes('question')) {
      if (Qnum < 14) {
        if(!rG) {
          apiSkip();
          setRG(false);
        } else {
          setRG(false);
        }
        if (localStorage.getItem('next') == 'ing') {
          localStorage.setItem('next', false);
        }
        onNextQ(++Qnum);
        onShowEXbtn(false);
      } else if(Qnum == 14) {
        if(!rG) {
          apiSkip();
          setRG(false);
        } else {
          setRG(false);
        }
        setQModalState(true);
      }
    } else if (pathname.includes('wrongs')) {
      if (WQnum < WQlength - 1) {
        onNextWQ(++WQnum);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (pathname.includes('explain')) {
      if(Qnum < 14) {
        navigate('/question');
        localStorage.setItem('next', true);
      } else if(Qnum == 14) {
        setIsModal(true);
        localStorage.setItem('next', true);
      }
    }
  };

  return <Container onClick={nextQuestion}>다음 문제</Container>;
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
