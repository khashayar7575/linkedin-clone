import styles from "./index.module.css";
const HeaderOption = ({ label, Icon, className }) => {
  return (
    <div className={`${styles.headerOption} ${className}`}>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.title}>{label}</span>
    </div>
  );
};

export default HeaderOption;
