import React from "react";
import "./input.scss";

type InputProps = {
  value?: string;
  setValue?: (newVal: string) => void;
  isRequired?: boolean;
  error?: string;
};

const Input = ({ value, setValue, isRequired, error }: InputProps) => {
  const [localValue, setLocalValue] = React.useState<string | undefined>();
  const inputValue = value || localValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(e.target.value);
    }
    setLocalValue(e.target.value);
  };

  return (
    <div className="field">
      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleChange}
      />
      <label htmlFor="input" className={!!value ? "hasValue" : ""}>
        Label {isRequired && <span>*</span>}
      </label>
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
