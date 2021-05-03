import { FC, useState } from "react";
import Select from "../components/select/Select";
import Toggle from "../components/toggle/Toggle";

const UI: FC<null> = () => {
  const options = [
    {
      name: "mp3",
      value: 15,
    },
    {
      name: "wav",
      value: 25,
    },
    {
      name: "multi-piste",
      value: 35,
    },
  ];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <h1>UI</h1>
      <Select
        text="Formats : "
        selectedOptionIndex={selectedOptionIndex}
        setSelectedOptionIndex={setSelectedOptionIndex}
        options={options}
      />
      <p>{options[selectedOptionIndex].value}</p>
      <Toggle
        isToggled={isToggled}
        setIsToggled={setIsToggled}
        text="Exclusivité"
      />
    </>
  );
};

export default UI;
