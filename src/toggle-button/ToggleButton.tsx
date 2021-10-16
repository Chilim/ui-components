import React from "react";
import ErrorControl from "../error-control/ErrorControl";
import styles from "./toggleButton.module.scss";

type ToggleProps = {
  value?: boolean | string | number;
  setValue?: (newVal: boolean) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  error?: string;
};

const Toggle = ({
  value,
  setValue,
  error,
  isRequired,
  isDisabled = true,
  isReadOnly = true
}: ToggleProps) => {
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
    let cls = `${styles.toggle}`;
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
        id="toggle"
      />
      <label htmlFor="toggle" />
      <div className={styles.pseudo_label}>
        Label {isRequired && <span>*</span>}
      </div>
      <ErrorControl error={error} />
    </div>
  );
};

export default Toggle;
