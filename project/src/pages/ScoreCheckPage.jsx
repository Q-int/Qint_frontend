import styled from "styled-components";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const ScoreCheckPage = () => {
  const navigate = useNavigate();

  const mainClick = () => {
    navigate("/");
  };

  const MyPageClick = () => {
    navigate("/mypage");
  };

  return (
    <ModalBack>
      <ScoreModal>
        <ModalContents>
          <ScoreTotalContents>
            <ScoreTotal>총 문제 수 : 15</ScoreTotal>
            <ScoreTotal>정답 : 10</ScoreTotal>
            <ScoreTotal>오답 : 5</ScoreTotal>
          </ScoreTotalContents>
          <Button
            value1="메인 페이지로 이동"
            value2="마이 페이지로 이동"
            backColor1="#00EDA6"
            backColor2="#265CFF"
            fontColor1="#ffffff"
            fontColor2="#ffffff"
            fontWeight="500"
            onClick1={mainClick}
            onClick2={MyPageClick}
          />
        </ModalContents>
      </ScoreModal>
    </ModalBack>
  );
};

const ModalBack = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgb(136, 136, 136, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScoreModal = styled.div`
  width: 23vw;
  height: 53vh;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const ScoreTotal = styled.div`
  color: #000000;
  font-size: 3vh;
`;

const ScoreTotalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8vh;
  align-items: start;
`;

const ModalContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11vh;
`;
