import styles from "./errorControl.module.scss";

const ErrorControl = ({ error }: { error: string | undefined }) => {
  return <p className={styles.error}>{error}</p>;
};

export default ErrorControl;
