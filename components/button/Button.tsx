import { FC } from "react";
import style from "./button.module.scss";

export interface ButtonProps {
  className?: string;
  text: string;
  handleClick: () => void;
}

const Button: FC<ButtonProps> = ({ className, text, handleClick }) => {
  return (
    <button
      className={`${className ? className : ""} p-vertical-2 ${style.button}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
