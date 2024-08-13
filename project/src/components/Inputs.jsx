import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import { Eyes } from "../assets/Eyes";

// Inputs.PropTypes = {
//   type: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
//   password: PropTypes.string,
//   setPassword: PropTypes.func,
// };

export const Inputs = ({
  label,
  placeholder,
  type,
  password,
  setPassword,
  ...props
}) => {
  const handleChangePassword = (e) => {
    if (setPassword) {
      setPassword(e.target.value);
    }
  };

  const [showPswd, setShowPswd] = useState(false);

  if (type === "password") {
    return (
      <>
        <InputFakeContainer>
          <InputContainer
            placeholder={placeholder}
            type={showPswd ? "text" : "password"}
            {...props}
            onChange={handleChangePassword}
            value={password}
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
  border: none;
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
