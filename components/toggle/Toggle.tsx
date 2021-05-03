import { Dispatch, FC, SetStateAction, useState } from "react";
import style from "./toggle.module.scss";
export interface ToggleProps {
  className?: string;
  isToggled: boolean;
  text?: string;
  handleToggleClick: () => void;
}

const Toggle: FC<ToggleProps> = ({
  isToggled,
  text,
  className,
  handleToggleClick,
}) => {
  return (
    <div className={`${style.toggle__wrapper} ${className ? className : ""}`}>
      <div
        className={`${style.toggle} ${
          isToggled ? style["toggle--toggled"] : ""
        }`}
      >
        <div
          onClick={handleToggleClick}
          className={`${style.toggle__button}`}
        ></div>
      </div>
      {text && <p className="ml-2 caption">{text}</p>}
    </div>
  );
};

export default Toggle;
