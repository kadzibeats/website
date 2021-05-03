import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useRef,
  MouseEvent,
  MutableRefObject,
  useEffect,
} from "react";
import style from "./select.module.scss";

export interface SelectProps {
  text?: string;
  className?: string;
  options: { name: string; value: number }[];
  selectedOptionIndex: number;
  // setSelectedOptionIndex: Dispatch<SetStateAction<number>>;
  setRef: Dispatch<SetStateAction<MutableRefObject<any>>>;
  handleSelectChange: (index: number) => void;
}

const Select: FC<SelectProps> = ({
  options,
  selectedOptionIndex,
  handleSelectChange,
  className,
  text,
  setRef,
}) => {
  const ref = useRef(null);
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    handleSelectChange(Number(event.target.value));
  };

  useEffect(() => {
    setRef(ref);
  });

  return (
    <div
      ref={ref}
      className={`${style.select__wrapper} ${className ? className : ""}`}
    >
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
