import { FC } from "react";
import styled from "@emotion/styled";

interface IButton {
  styles: {
    outline?: Boolean;
    // disabled: keyof TColors;
    disabledShadow?: Boolean;
    size: keyof TSize;
    color: keyof TColors;
  };
}
type TColors = {
  default: string;
  primary: string;
  secondary: string;
  danger: string;
  disabled: string;
};
type TSize = {
  sm: string;
  md: string;
  lg: string;
};
const colors: TColors = {
  default: "white",
  primary: "#48C4EC",
  secondary: "gray",
  danger: "red",
  disabled: "gray",
};
const size: TSize = {
  sm: "scale(0.5,0.5)",
  md: "scale(1.2,1.2)",
  lg: "scale(2,2)",
};

const Button = styled.button<IButton>`
  cursor: pointer;
  border: ${({ styles }) => (styles.outline ? "1px solid blue" : "none")};
  background-color: ${({ styles }) => colors[styles.color]};
  box-shadow: ${({ styles }) =>
    styles.disabledShadow ? "none" : "2px 2px gray"};
  transform: ${({ styles }) => size[styles.size]};
  color: ${({ styles }) => styles.color === "default" ? "black" : "white"};
  padding: 5px 10px;
`;
interface Props {
  title: string;
  outline?: Boolean;
  //   disabled: keyof TColors;
  disabledShadow?: Boolean;
  size: keyof TSize;
  color: keyof TColors;
}

const ButtonBuy: FC<Props> = (props) => {
  return (
    <div>
      <Button styles={props}>{props.title}</Button>
    </div>
  );
};

export default ButtonBuy;
