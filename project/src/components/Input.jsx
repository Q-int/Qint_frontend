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
    solid 1px;
  background-color: #f4f4f4;
  padding: 16.5px 0 16.5px 13px;
  border-radius: 5px;
  width: 385px;
  outline: none;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
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
      solid 1px;
  }
`;

const InputFakeContainer = styled.div`
  width: 398px;
  height: 51px;
  position: relative;
`;

const PasswordEye = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 8.7px;
  right: 13px;

  &:focus {
    outline: none;
    border: none;
  }
`;

const InputExplain = styled.div`
  font-size: 10px;
  color: ${({ $isError }) => ($isError ? "#ff3951" : "#00eda6")};
`;

const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
