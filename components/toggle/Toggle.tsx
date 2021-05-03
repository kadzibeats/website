import { Dispatch, FC, SetStateAction, useState } from "react";
import style from "./toggle.module.scss";
export interface ToggleProps {
  className?: string;
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
  text?: string;
}

const Toggle: FC<ToggleProps> = ({
  isToggled,
  setIsToggled,
  text,
  className,
}) => {
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`${style.toggle__wrapper} ${className ? className : ""}`}>
      <div
        className={`${style.toggle} ${
          isToggled ? style["toggle--toggled"] : ""
        }`}
      >
        <div onClick={handleClick} className={`${style.toggle__button}`}></div>
      </div>
      {text && <p className="ml-2 caption">{text}</p>}
    </div>
  );
};

export default Toggle;
