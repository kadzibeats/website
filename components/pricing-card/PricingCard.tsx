import { FC, useEffect, useRef, useState } from "react";
import Button from "../button/Button";
import Select, { SelectProps } from "../select/Select";
import Toggle from "../toggle/Toggle";
import style from "./pricing-card.module.scss";

export interface PricingCardProps {
  productName: string;
  perHour: boolean;
  defaultPrice?: number;
  options: {
    text: string;
    checked?: boolean;
    selectText?: string;
    selectValue?: number;
  }[];
  hasSelect?: boolean;
  hasToggle?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  perHour,
  defaultPrice,
  productName,
  options,
  hasSelect,
  hasToggle,
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [price, setPrice] = useState(defaultPrice ? defaultPrice : 0);
  const [selectRef, setSelectRef] = useState(useRef(null));
  const priceRef = useRef(null);

  useEffect(() => {
    if (!defaultPrice) {
      if (isToggled) {
        setPrice(options[options.length - 1].selectValue);
      } else {
        setPrice(options[selectedOptionIndex].selectValue);
      }
    }
  });

  const Option: FC<{ checked: boolean; text: string; className?: string }> = ({
    text,
    checked,
    className,
  }) => {
    return (
      <div className={`${style["pricing-card__option"]} ${className}`}>
        {checked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#89CE94"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#A4303F"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        )}
        <p className="caption ml-2">{text}</p>
      </div>
    );
  };

  const selectOptions: SelectProps["options"] = options.reduce(
    (acc, option) => {
      if (option.selectText) {
        acc.push({
          name: option.selectText,
          value: option.selectValue,
        });
      }
      return acc;
    },
    []
  );

  const handleClick = () => {
    window.open("https://www.instagram.com/kadzi_beats/", "blank");
  };

  const handleToggleClick = () => {
    if (isToggled) {
      priceRef.current.classList.add(style["pricing-card__price--disappear"]);
      setTimeout(() => {
        priceRef.current.classList.remove(
          style["pricing-card__price--disappear"]
        );
        setIsToggled(false);
      }, 200);
      selectRef.current.classList.add(style["pricing-card__select--appear"]);
      setTimeout(() => {
        selectRef.current.classList.remove(
          style["pricing-card__select--disappear"]
        );
      }, 250);
    } else {
      priceRef.current.classList.add(style["pricing-card__price--disappear"]);
      setTimeout(() => {
        priceRef.current.classList.remove(
          style["pricing-card__price--disappear"]
        );
        setIsToggled(true);
      }, 200);
      selectRef.current.classList.add(style["pricing-card__select--disappear"]);
      setTimeout(() => {
        selectRef.current.classList.remove(
          style["pricing-card__select--appear"]
        );
      }, 250);
    }
  };

  const handleSelectChange = (index: number) => {
    priceRef.current.classList.add(style["pricing-card__price--disappear"]);
    setTimeout(() => {
      priceRef.current.classList.remove(
        style["pricing-card__price--disappear"]
      );
      setSelectedOptionIndex(index);
    }, 200);
  };

  return (
    <div className={`${style["pricing-card"]} p-4`}>
      <div>
        <p ref={priceRef} className={`${style["pricing-card__price"]} h1 mb-1`}>
          {price} €
          {perHour && (
            <span className={`${style["pricing-card__per-hour"]} ml-1`}>
              / h
            </span>
          )}
        </p>
        <p className={`${style["pricing-card__name"]} mb-3`}>{productName}</p>
        <div>
          {hasToggle && (
            <Toggle
              className="mb-4"
              text={options[options.length - 1].text}
              handleToggleClick={handleToggleClick}
              isToggled={isToggled}
            />
          )}
          {hasSelect && (
            <Select
              setRef={setSelectRef}
              text="Formats :"
              className={`${style["pricing-card__select"]}`}
              options={selectOptions}
              selectedOptionIndex={selectedOptionIndex}
              handleSelectChange={handleSelectChange}
            />
          )}
        </div>
        <div>
          {options.map((option, index) => (
            <Option
              key={option.text}
              className={index !== options.length ? "mb-2" : ""}
              text={option.text}
              checked={
                isToggled
                  ? true
                  : option.checked
                  ? option.checked
                  : selectedOptionIndex >= index
                  ? true
                  : false
              }
            />
          ))}
        </div>
      </div>
      <Button
        className="mt-5"
        handleClick={handleClick}
        text="Contactez-nous"
      />
    </div>
  );
};

export default PricingCard;
