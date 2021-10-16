import React from "react";
import Input from "./input/Input";
import "./styles.scss";

export default function App() {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  return (
    <div className="container">
      <Input value={value} setValue={setValue} isRequired />
    </div>
  );
}
