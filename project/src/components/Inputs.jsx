import styled from "styled-components";
import { useEffect, useState } from "react";
import { Eyes } from "../assets/Eyes";
// import { apiEmail } from "../apis/ApiEmail";
import { useLocation } from "react-router-dom";

export const Inputs = ({
  label,
  placeholder,
  type,
  inputs,
  password1,
  password2,
  style,
  pathname,
  getUnion,
  value3,
  getPswd,
  getCode,
  onBlur,
  emailColor,

  ...props
}) => {
  const [showPswd, setShowPswd] = useState(false);
  const [borderColor, setBorderColor] = useState("#ffffff");

  const location = useLocation();

  /*
  const { borderColor, borderColorFocus } = ApiEmail({
    pathname: location.pathname,
    setEmailInput,
  });

  */

  // const getUnion = apiEmail("jiminelp@gmail.com"); api연동

  useEffect(() => {
    if (pathname == "/SignUp") {
      setBorderColor(emailColor ? "#00eda6" : "#ff3951");
    }
  }, [emailColor, pathname]);

  useEffect(() => {
    if (pathname == "/SignUp") {
      setBorderColor(getUnion ? "#00eda6" : "#ff3951");
    }
  }, [getUnion, pathname]);

  useEffect(() => {
    if (pathname == "/SignUp") {
      setBorderColor(getPswd ? "#00eda6" : "#ff3951");
    }
  }, [getPswd, pathname]);

  useEffect(() => {
    if (pathname == "/SignUp") {
      setBorderColor(getCode ? "#00eda6" : "#ff3951");
    }
  }, [pathname, getCode]);

  if (type === "password") {
    return (
      <>
        <InputFakeContainer>
          <ExplainContainer>
            <InputContainer
              onBlur={onBlur}
              placeholder={placeholder}
              type={showPswd ? "text" : "password"}
              {...props}
              value={password1 || password2}
              maxLength="64"
              borderColor={borderColor}
            ></InputContainer>
            <InputExplain borderColor={borderColor}>{value3}</InputExplain>
          </ExplainContainer>
          <PasswordEye onClick={() => setShowPswd(!showPswd)}>
            <Eyes isEye={showPswd} />
          </PasswordEye>
        </InputFakeContainer>
      </>
    );
  } else {
    return (
      <ExplainContainer>
        <InputContainer
          placeholder={placeholder}
          type={type}
          {...props}
          maxLength="64"
          borderColor={borderColor}
          onBlur={onBlur}
        ></InputContainer>
        <InputExplain borderColor={borderColor}>{value3}</InputExplain>
      </ExplainContainer>
    );
  }
};

const InputContainer = styled.input`
  border: ${({ borderColor }) => borderColor} solid 1px;
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
    border: ${({ borderColor }) => {
        return borderColor === "#ffffff" ? "#e0e0e0" : borderColor;
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
  color: ${({ borderColor }) => borderColor};
`;

const ExplainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
