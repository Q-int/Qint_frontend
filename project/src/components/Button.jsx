import styled from "styled-components";

export const Button = ({ value1, value2 }) => {
  return (
    <BtnContainer>
      <GreenBtn>{value1}</GreenBtn>
      <LightGreenBtn>{value2}</LightGreenBtn>
    </BtnContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const GreenBtn = styled.button`
  cursor: pointer;
  background-color: #00eda6;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffffff;
  font-weight: 700;
  width: 398px;
  height: 52px;
`;

const LightGreenBtn = styled.button`
  cursor: pointer;
  background-color: #e4f9f3;
  border-radius: 8px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00eda6;
  font-weight: 700;
  width: 398px;
  height: 52px;
`;
