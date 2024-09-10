import styled from "styled-components";
import answerImg from "../assets/answer.svg";
import commentaryImg from "../assets/commentary.svg";
import mypageImg from "../assets/mypage.svg";
import Qcatagory_1Img from "../assets/Qcatagory_1.svg";
import Qcatagory_2Img from "../assets/Qcatagory_2.svg";
import Qexplanation_1Img from "../assets/Qexplanation_1.svg";
import scoreImg from "../assets/score.svg";
import wrongQImg from "../assets/wrongQ.svg";
import { Header } from "../components/Header";

export const DescriptionPage = () => {
  return (
    <DesContainer>
      <Header />
      <ImgContainer>
        <Imgs src={mypageImg} alt="마이페이지" />
        <Imgs src={Qcatagory_1Img} alt="카테고리 첫 페이지" />
        <Imgs src={Qcatagory_2Img} alt="카테고리 두 번째 페이지" />
        <Imgs src={answerImg} alt="답 확인 페이지" />
        <Imgs src={commentaryImg} alt="해설 페이지" />
        <Imgs src={wrongQImg} alt="틀린 문제 페이지" />
        <Imgs src={scoreImg} alt="문제 스코어 페이지" />
      </ImgContainer>
    </DesContainer>
  );
};

const Imgs = styled.img`
  width: 70vw;
`;

const DesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14vh;
  justify-content: start;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20vh;
  align-items: center;
  margin-bottom: 14vh;
`;
