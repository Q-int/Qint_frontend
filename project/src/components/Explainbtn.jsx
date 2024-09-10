import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Explainbtn = ({ showEXbtn, EXQ, Qnum }) => {
  const navigate = useNavigate();
  const EXbtnClickHandle = () => {
    navigate("/explain", { state: { EXQ: EXQ, Qnum: Qnum} });
    localStorage.setItem("next", 'ing');
    localStorage.setItem("Qnum", Qnum);
  };

  return (
    <Container $display={showEXbtn} onClick={EXbtnClickHandle}>
      해설
    </Container>
  );
};

const Container = styled.button`
  width: 3.5vw;
  height: 4.7vh;
  background: #00eda6;
  border-radius: 0.5vh;
  color: #fff;
  border: none;
  font-size: 1.8vh;
  display: ${(props) => (props.$display ? "block" : "none")};
  cursor: pointer;
  white-space:nowrap;
  min-width: 32px;

  &:focus {
    border: none;
    outline: none;
  }
`;
