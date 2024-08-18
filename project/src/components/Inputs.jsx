import styled from "styled-components";
import { useState } from "react";
import { Eyes } from "../assets/Eyes";

export const Inputs = ({
  label,
  placeholder,
  type,
  inputs,
  password1,
  password2,
  ...props
}) => {
  const [showPswd, setShowPswd] = useState(false);

  if (type === "password") {
    return (
      <>
        <InputFakeContainer>
          <InputContainer
            placeholder={placeholder}
            type={showPswd ? "text" : "password"}
            {...props}
            value={password1 || password2}
            maxLength="64"
          ></InputContainer>
          <PasswordEye onClick={() => setShowPswd(!showPswd)}>
            <Eyes isEye={showPswd} />
          </PasswordEye>
        </InputFakeContainer>
      </>
    );
  } else {
    return (
      <>
        <InputContainer
          placeholder={placeholder}
          type={type}
          {...props}
          maxLength="64"
        ></InputContainer>
      </>
    );
  }
};

const InputContainer = styled.input`
  background-color: #f4f4f4;
  padding: 16.5px 0 16.5px 13px;
  border-radius: 5px;
  width: 385px;
  border: 1px solid #f4f4f4;
  outline: none;
  font-size: 16px;
  &::placeholder {
    font-size: 16px;
    color: #b4b4b4;
  }
  &:focus {
    border: #e0e0e0 solid 1px;
    outline: none;
    background-color: #ffffffff;
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
