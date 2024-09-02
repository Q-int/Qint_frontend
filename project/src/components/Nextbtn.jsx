import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export const Nextbtn = ({Qnum, onNextQ, WQlength, onNextWQ, WQnum, mode}) => {

  const navigate = useNavigate();

  const nextQuestion = () => {
    if(Qnum < 14){
      onNextQ(++Qnum);
    } else {
      navigate('/explain');
    }
  }

  const nextWrongQuestion = () => {
    if(WQnum < WQlength - 1){
      onNextWQ(++WQnum);
    }
  }

  const onNextClick = () => {
    if(mode) {
      nextQuestion();
    } else {
      nextWrongQuestion();
    }
    window.scrollTo({top: 0, behavior: "smooth"});
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