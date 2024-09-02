import { useEffect, useState } from "react";
import styled from "styled-components"

export const Option = ({ option, mode , rw, id, selected, selectedOption, Qnum}) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    if(isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
      selected(id);
    }
  }

  useEffect(() => {
    if(isClicked && selectedOption != id) {
      setIsClicked(false);
    }
  }, [selectedOption]);

  useEffect(() => {
    setIsClicked(false);
  }, [Qnum]);

  return(
    <Container mode={mode} rw={rw} isClick={isClicked} selectedOption={selectedOption} onClick={clickHandle} id={id}>
      {mode ? option.text : option}
    </Container>
  )
}

const Container = styled.div`
box-sizing: border-box;
width: 77vw;
height: 10.6vh;
background: ${props => props.isClick && props.selectedOption == props.id ? "#C7FFEF" : "#E4F9F3"};
border-radius: 1vw;
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 2.9vw;
font-size: 2.7vh;
font-weight: 400;
border: ${props => props.mode ? "none" : props.rw ? "1px solid green" : "1px solid red"};
`