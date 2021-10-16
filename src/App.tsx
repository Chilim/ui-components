import React from "react";
import Input from "./input/Input";
import Toggle from "./toggle-button/ToggleButton";
import NUmberInput from "./number-input/NumberInput";
import "./styles.scss";

export default function App() {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  return (
    <div className="container">
      <Input value={value} setValue={setValue} isRequired />
      <Toggle />
      <NUmberInput />
    </div>
  );
}
