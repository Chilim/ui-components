import React from "react";
import Input from "./input/Input";
import Toggle from "./toggle-button/ToggleButton";
import NumberInput from "./number-input/NumberInput";
import Checkbox from "./checkbox/Checkbox";
import "./styles.scss";

export default function App() {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  return (
    <div className="container">
      <Input value={value} setValue={setValue} isRequired />
      <Toggle />
      <NumberInput />
      <Checkbox />
    </div>
  );
}
