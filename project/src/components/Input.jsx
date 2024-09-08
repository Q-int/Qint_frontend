import styled from "styled-components";
import { useState } from "react";
import { Eyes } from "../assets/Eyes";

export const Input = ({
  placeholder,
  type,
  value,
  name,
  onChange,
  successMsg,
  isError,
  errorMsg,
  isSignUp,
  ...props
}) => {
  const [showPswd, setShowPswd] = useState(type);

  const errorHandler = isError || !value;

  return (
    <InputFakeContainer>
      <ExplainContainer>
        <InputContainer
          placeholder={placeholder}
          type={showPswd}
          value={value}
          name={name}
          onChange={onChange}
          $isError={errorHandler}
          $isSignUp={isSignUp}
          {...props}
        />
        {isSignUp && !!value && (
          <InputExplain $isError={errorHandler}>
            {isError ? errorMsg : successMsg}
          </InputExplain>
        )}
      </ExplainContainer>
      {type === "password" && (
        <PasswordEye
          onClick={() =>
            setShowPswd((prev) => (prev === "password" ? "text" : "password"))
          }
        >
          <Eyes isEye={showPswd === "text"} />
        </PasswordEye>
      )}
    </InputFakeContainer>
  );
};

const InputContainer = styled.input`
  border: ${({ value, $isSignUp, $isError }) => {
      return !value || !$isSignUp
        ? "#ffffff"
        : $isError
        ? "#ff3951"
        : "#00eda6";
    }}
    solid 0.1vw;
  background-color: #f4f4f4;
  padding: 2vh 0 2vh 1.2vw;
  border-radius: 1vh;
  width: 19.8vw;
  outline: none;
  font-size: 1.8vh;
  &::placeholder {
    font-size: 1.8vh;
    color: #b4b4b4;
  }
  &:focus {
    outline: none;
    background-color: #ffffff;
    border: ${({ $isSignUp, $isError, value }) => {
        return !$isSignUp || !value
          ? "#e0e0e0"
          : $isError
          ? "#ff3951"
          : "#00eda6";
      }}
      solid 0.1vw;
  }
`;

const InputFakeContainer = styled.div`
  width: 21vw;
  height: 5.8vh;
  position: relative;
`;

const PasswordEye = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 1.1vh;
  right: 1vw;

  &:focus {
    outline: none;
    border: none;
  }
`;

const InputExplain = styled.div`
  font-size: 1.1vh;
  color: ${({ $isError }) => ($isError ? "#ff3951" : "#00eda6")};
`;

const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1vh;
`;
