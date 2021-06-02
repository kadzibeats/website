import { FC } from "react";
import style from "./scroll-indicator.module.scss";

export interface ScrollIndicatorProps {
  className?: string;
}
const ScrollIndicator: FC<ScrollIndicatorProps> = ({ className }) => {
  return (
    <svg
      className={`${className} ${style["scroll-indictor"]}`}
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="white"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  );
};

export default ScrollIndicator;
