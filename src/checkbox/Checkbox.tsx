import React from "react";
import ErrorControl from "../error-control/ErrorControl";
import styles from "./checkbox.module.scss";

type CheckboxProps = {
  value?: boolean | string | number;
  setValue?: (newVal: boolean) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  error?: string;
};

const Checkbox = ({
  value,
  setValue,
  error,
  isRequired = true,
  isDisabled = false,
  isReadOnly = true
}: CheckboxProps) => {
  const [checked, setChecked] = React.useState(false);
  const isChecked = checked || !!value;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isDisabled || isReadOnly) return;
    if (setValue) {
      setValue(e.target.checked);
    }
    setChecked(e.target.checked);
  };

  const getClass = () => {
    let cls = `${styles.checkbox}`;
    const whiteSpace = " ";
    if (isDisabled) cls += `${whiteSpace}${styles.disabled}`;
    if (isReadOnly && !isDisabled) cls += `${whiteSpace}${styles.readonly}`;
    return cls;
  };

  return (
    <div className={getClass()}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        id="checkbox"
      />
      <label htmlFor="checkbox">Label {isRequired && <span>*</span>}</label>
      <ErrorControl error={error} />
    </div>
  );
};

export default Checkbox;
