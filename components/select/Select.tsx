import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useRef,
  MouseEvent,
} from "react";
import style from "./select.module.scss";

export interface SelectProps {
  text?: string;
  className?: string;
  options: { name: string; value: number }[];
  selectedOptionIndex: number;
  setSelectedOptionIndex: Dispatch<SetStateAction<number>>;
}

const Select: FC<SelectProps> = ({
  options,
  selectedOptionIndex,
  setSelectedOptionIndex,
  className,
  text,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionIndex(Number(event.target.value));
  };

  return (
    <div className={`${style.select__wrapper} ${className ? className : ""}`}>
      {text && <p className="caption mr-2">{text}</p>}
      <select
        className={style.select}
        value={selectedOptionIndex}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={option.name} className="caption" value={index}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
