import styles from "./index.module.css";
const Input = ({ className, type = "text", placeholder, ...rest }) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
