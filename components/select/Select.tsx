import { ChangeEvent, FC } from "react";
import style from "./select.module.scss";

export interface SelectProps {
  text?: string;
  className?: string;
  options: { name: string; value: number }[];
  selectedOptionIndex: number;
  handleSelectChange: (index: number) => void;
}

const Select: FC<SelectProps> = ({
  options,
  selectedOptionIndex,
  handleSelectChange,
  className,
  text,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(Number(event.target.value));
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
