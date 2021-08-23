import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FormBox = styled.form`
  position: absolute;
  width: 338px;
  /* height: 388px; */
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
`;
export const IName = styled.input`
  border: none;
  width: 100%;
  height: 36px;
  background: #e3e3e3;
  border-radius: 5px;
  padding: 5px 0 5px 0px;
  /* margin: 15px 0 15px 0; */
`;
export const IDesc = styled.textarea`
  border: none;
  width: 100%;
  padding: 3px;
  height: 68px;
  background: #e3e3e3;
  border-radius: 5px;
  resize: none;
  margin: 15px 0 15px 0;
  padding: 5px 0 5px 0px;
`;
export const IPrice = styled.input`
  border: none;
  width: 128px;
  height: 36px;
  background: #e3e3e3;
  border-radius: 5px;
  margin: 0 0 10px 0;

`;

export const SCategory = styled.select`
  width: 133px;
  height: 36px;
  background: #e3e3e3;
  border-radius: 5px;
  border: none;
  margin: 10px 0 0 0;
`;
export const Submit = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px;
  width: 100%;
  height: 36px;
  background: #35c543;
  border-radius: 5px;
  color: white;
  margin: 15px 0 15px 0;
  font-size: 1.5em;
  &:hover {
    background: #179924;
  }
`;
export const CImg = styled.label`
  width: 161px;
  height: 161px;
  background: #e3e3e3;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
