import styled from "styled-components";

export const Button = ({
  value1,
  value2,
  onClick1,
  onClick2,
  backColor1,
  backColor2,
  fontColor1,
  fontColor2,
  fontWeight,
}) => {
  return (
    <BtnContainer>
      <FirstBtn
        onClick={onClick1}
        backColor1={backColor1}
        fontColor1={fontColor1}
        fontWeight={fontWeight}
      >
        {value1}
      </FirstBtn>
      <SecondBtn
        onClick={onClick2}
        backColor2={backColor2}
        fontColor2={fontColor2}
        fontWeight={fontWeight}
      >
        {value2}
      </SecondBtn>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const FirstBtn = styled.button`
  cursor: pointer;
  background-color: ${({ backColor1 }) => backColor1};
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ fontColor1 }) => fontColor1};
  font-weight: ${({ fontWeight }) => fontWeight};
  width: 398px;
  height: 52px;
  font-size: 16px;
`;

const SecondBtn = styled.button`
  cursor: pointer;
  background-color: ${({ backColor2 }) => backColor2};
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ fontColor2 }) => fontColor2};
  font-weight: ${({ fontWeight }) => fontWeight};
  width: 398px;
  height: 52px;
  font-size: 16px;
`;
